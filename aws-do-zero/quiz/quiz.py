#!/usr/bin/env python3
"""
Quiz de terminal para o repositório aws-do-zero.

Uso:
    python quiz/quiz.py              # escolhe o módulo no menu
    python quiz/quiz.py 02           # só o módulo 02
    python quiz/quiz.py 02 09 10     # vários módulos
    python quiz/quiz.py --todos      # simulado com todos os módulos
    python quiz/quiz.py --todos -n 65  # simulado no tamanho da prova real
    python quiz/quiz.py --errei      # só as questões que você errou antes

Sem dependências externas. Python 3.8+.
"""
import argparse
import json
import pathlib
import random
import sys
import datetime

RAIZ = pathlib.Path(__file__).resolve().parent.parent
QUESTOES = RAIZ / "questoes"
HISTORICO = RAIZ / "quiz" / "historico.json"

CORES = sys.stdout.isatty()


def c(texto, cor):
    if not CORES:
        return texto
    codigos = {"verde": "32", "vermelho": "31", "amarelo": "33",
               "azul": "36", "cinza": "90", "negrito": "1"}
    return f"\033[{codigos[cor]}m{texto}\033[0m"


def carregar_indice():
    with open(QUESTOES / "indice.json", encoding="utf-8") as f:
        return json.load(f)["modulos"]


def carregar_questoes(codigos=None):
    questoes = []
    for mod in carregar_indice():
        if codigos and mod["codigo"] not in codigos:
            continue
        caminho = RAIZ / mod["arquivo"]
        if not caminho.exists():
            continue
        with open(caminho, encoding="utf-8") as f:
            dados = json.load(f)
        for q in dados["questoes"]:
            q["_modulo"] = mod["codigo"]
            q["_titulo_modulo"] = mod["titulo"]
            questoes.append(q)
    return questoes


def carregar_historico():
    if HISTORICO.exists():
        with open(HISTORICO, encoding="utf-8") as f:
            return json.load(f)
    return {"sessoes": [], "erros": {}}


def salvar_historico(h):
    HISTORICO.parent.mkdir(parents=True, exist_ok=True)
    with open(HISTORICO, "w", encoding="utf-8") as f:
        json.dump(h, f, ensure_ascii=False, indent=2)


def normalizar_correta(q):
    correta = q["correta"]
    return set(correta) if isinstance(correta, list) else {correta}


def ler_resposta(n_alt, multipla):
    dica = "letras separadas por espaço" if multipla else "uma letra"
    while True:
        bruto = input(c(f"  Sua resposta ({dica}, ou 'p' para pular): ", "azul")).strip().lower()
        if bruto == "p":
            return None
        letras = bruto.replace(",", " ").split()
        indices = set()
        valido = bool(letras)
        for letra in letras:
            if len(letra) == 1 and "a" <= letra < chr(ord("a") + n_alt):
                indices.add(ord(letra) - ord("a"))
            else:
                valido = False
        if valido:
            return indices
        print(c("  Entrada inválida. Use as letras mostradas acima.", "vermelho"))


def rodar(questoes, embaralhar=True):
    if embaralhar:
        random.shuffle(questoes)

    acertos = 0
    respondidas = 0
    erradas = []
    por_modulo = {}

    print()
    print(c(f"  {len(questoes)} questões. Ctrl+C encerra a qualquer momento.", "cinza"))
    print()

    for i, q in enumerate(questoes, 1):
        correta = normalizar_correta(q)
        multipla = q.get("multipla", False) or len(correta) > 1

        cabecalho = f"[{i}/{len(questoes)}] módulo {q['_modulo']} · {q.get('dominio', '')} · {q.get('dificuldade', '')}"
        print(c(cabecalho, "cinza"))
        print(c(q["enunciado"], "negrito"))
        print()

        # embaralha alternativas mantendo o rastro das corretas
        ordem = list(range(len(q["alternativas"])))
        random.shuffle(ordem)
        for pos, idx in enumerate(ordem):
            print(f"  {chr(ord('a') + pos)}) {q['alternativas'][idx]}")
        corretas_embaralhadas = {pos for pos, idx in enumerate(ordem) if idx in correta}
        print()

        resposta = ler_resposta(len(q["alternativas"]), multipla)
        if resposta is None:
            print(c("  Pulada.\n", "amarelo"))
            print(c("─" * 70, "cinza"))
            continue

        respondidas += 1
        mod = q["_modulo"]
        por_modulo.setdefault(mod, [0, 0])
        por_modulo[mod][1] += 1

        if resposta == corretas_embaralhadas:
            acertos += 1
            por_modulo[mod][0] += 1
            print(c("  ✓ Correto", "verde"))
        else:
            gabarito = ", ".join(sorted(chr(ord("a") + p) for p in corretas_embaralhadas))
            print(c(f"  ✗ Errado — resposta: {gabarito}", "vermelho"))
            erradas.append(q["id"])

        print(c(f"  {q['explicacao']}", "cinza"))
        print()
        print(c("─" * 70, "cinza"))

    if respondidas == 0:
        print("\nNenhuma questão respondida.")
        return

    pct = acertos / respondidas * 100
    print()
    print(c(f"  Resultado: {acertos}/{respondidas} ({pct:.0f}%)", "negrito"))

    if pct >= 85:
        print(c("  Pronto para a prova nesse conteúdo.", "verde"))
    elif pct >= 70:
        print(c("  Passaria, mas com pouca margem. Revise os erros.", "amarelo"))
    else:
        print(c("  Ainda não. Volte à aula antes de repetir o quiz.", "vermelho"))

    if len(por_modulo) > 1:
        print()
        print(c("  Por módulo:", "negrito"))
        for mod in sorted(por_modulo):
            a, t = por_modulo[mod]
            print(f"    {mod}: {a}/{t} ({a / t * 100:.0f}%)")

    hist = carregar_historico()
    hist["sessoes"].append({
        "data": datetime.datetime.now().isoformat(timespec="seconds"),
        "acertos": acertos,
        "total": respondidas,
        "percentual": round(pct, 1),
        "modulos": sorted(por_modulo),
    })
    for qid in erradas:
        hist["erros"][qid] = hist["erros"].get(qid, 0) + 1
    salvar_historico(hist)
    print()
    print(c(f"  Registrado em {HISTORICO.relative_to(RAIZ)}", "cinza"))
    print()


def menu():
    mods = carregar_indice()
    print()
    print(c("  Módulos disponíveis:", "negrito"))
    print()
    disponiveis = []
    for m in mods:
        existe = (RAIZ / m["arquivo"]).exists()
        marca = c("●", "verde") if existe else c("○", "cinza")
        rotulo = f"  {marca} {m['codigo']} — {m['titulo']}"
        if not existe:
            rotulo += c("  (banco vazio)", "cinza")
        print(rotulo)
        if existe:
            disponiveis.append(m["codigo"])
    print()
    escolha = input(c("  Módulo(s) (ex: 02 ou '02 13' ou 'todos'): ", "azul")).strip().lower()
    if escolha in ("todos", "all", ""):
        return None
    return [x for x in escolha.replace(",", " ").split()]


def main():
    p = argparse.ArgumentParser(description="Quiz do repositório aws-do-zero")
    p.add_argument("modulos", nargs="*", help="códigos dos módulos, ex: 02 09")
    p.add_argument("--todos", action="store_true", help="usa todos os módulos")
    p.add_argument("-n", type=int, help="limita o número de questões")
    p.add_argument("--errei", action="store_true", help="só questões erradas antes")
    p.add_argument("--ordem-fixa", action="store_true", help="não embaralha")
    args = p.parse_args()

    codigos = None if args.todos else (args.modulos or menu())
    questoes = carregar_questoes(codigos)

    if args.errei:
        erros = carregar_historico()["erros"]
        questoes = [q for q in questoes if q["id"] in erros]
        if not questoes:
            print("\n  Nenhum erro registrado ainda. Rode um quiz normal primeiro.\n")
            return

    if not questoes:
        print("\n  Nenhuma questão encontrada para esses módulos.")
        print("  Bancos ainda não escritos aparecem com ○ no menu.\n")
        return

    if args.n:
        random.shuffle(questoes)
        questoes = questoes[: args.n]

    try:
        rodar(questoes, embaralhar=not args.ordem_fixa)
    except KeyboardInterrupt:
        print(c("\n\n  Encerrado.\n", "amarelo"))


if __name__ == "__main__":
    main()
