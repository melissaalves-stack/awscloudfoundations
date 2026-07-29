#!/usr/bin/env python3
"""
Gera um quiz.md dentro de cada pasta de módulo a partir do JSON correspondente.

O markdown usa <details>, que o GitHub renderiza como bloco expansível:
você lê a questão, escolhe mentalmente e clica para revelar o gabarito.

Rode sempre que editar um arquivo em questoes/:
    python quiz/gerar_quiz_md.py
"""
import json
import pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent

CABECALHO = """# Quiz — Módulo {codigo}: {titulo}

[◀ voltar para a aula](README.md)

{n} questões. Responda **antes** de abrir o gabarito — clicar direto na resposta
não ensina nada. Se acertar por eliminação, marque como erro.

Prefere terminal? `python quiz/quiz.py {codigo}`
Prefere clicar? Abra `web/index.html` (veja o README).

---

"""

RODAPE = """
## Registro

| Tentativa | Data | Acertos | % |
|---|---|---|---|
| 1ª |  |  |  |
| 2ª |  |  |  |
| 3ª |  |  |  |

Meta: **85%+** antes de considerar o módulo concluído. Anote também em [`progresso.md`](../../progresso.md).
"""


def main():
    indice = json.loads((RAIZ / "questoes" / "indice.json").read_text(encoding="utf-8"))
    gerados = 0

    for mod in indice["modulos"]:
        origem = RAIZ / mod["arquivo"]
        pasta = RAIZ / "modulos" / f"{mod['codigo']}-{mod['slug']}"
        if not pasta.exists():
            continue

        if not origem.exists():
            (pasta / "quiz.md").write_text(
                f"# Quiz — Módulo {mod['codigo']}: {mod['titulo']}\n\n"
                f"[◀ voltar para a aula](README.md)\n\n"
                f"O banco de questões deste módulo ainda não foi escrito.\n\n"
                f"Crie o arquivo `questoes/{mod['codigo']}-{mod['slug']}.json` seguindo o formato de\n"
                f"`questoes/02-identidade-e-acesso.json` e rode `python quiz/gerar_quiz_md.py`.\n\n"
                f"Escrever as próprias questões é, por sinal, uma das formas mais eficientes de estudar:\n"
                f"para formular um bom distrator você precisa entender exatamente onde mora a confusão.\n",
                encoding="utf-8")
            continue

        dados = json.loads(origem.read_text(encoding="utf-8"))
        partes = [CABECALHO.format(codigo=dados["modulo"], titulo=dados["titulo"],
                                   n=len(dados["questoes"]))]

        for i, q in enumerate(dados["questoes"], 1):
            correta = q["correta"]
            corretas = set(correta) if isinstance(correta, list) else {correta}
            multipla = q.get("multipla", False) or len(corretas) > 1

            partes.append(f"### {i}. {q['enunciado']}\n")
            if multipla:
                partes.append("_(múltipla escolha)_\n")
            partes.append("")
            for j, alt in enumerate(q["alternativas"]):
                partes.append(f"- [ ] **{chr(ord('a') + j)})** {alt}")
            partes.append("")
            gab = ", ".join(f"{chr(ord('a') + j)}" for j in sorted(corretas))
            partes.append("<details>")
            partes.append(f"<summary>Ver resposta</summary>")
            partes.append("")
            partes.append(f"**Resposta: {gab}**")
            partes.append("")
            partes.append(q["explicacao"])
            partes.append("")
            partes.append(f"<sub>`{q['id']}` · {q.get('dominio', '')} · {q.get('dificuldade', '')}</sub>")
            partes.append("")
            partes.append("</details>")
            partes.append("")
            partes.append("---")
            partes.append("")

        partes.append(RODAPE)
        (pasta / "quiz.md").write_text("\n".join(partes), encoding="utf-8")
        gerados += 1

    print(f"{gerados} quiz.md gerados a partir dos bancos existentes")


if __name__ == "__main__":
    main()
