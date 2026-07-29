#!/usr/bin/env python3
"""
Lê progresso.md e gera badges SVG dinâmicos em assets/.

Uso:
    python scripts/gerar_badges.py

Gera:
    assets/progresso.svg        -> "9/16 módulos · 56%"
    assets/progresso-clf.svg    -> progresso específico dos módulos 00-10 (CLF-C02)
    assets/progresso-aif.svg    -> progresso específico dos módulos 11-15 (AIF-C01)

Isso roda automaticamente via GitHub Actions (.github/workflows/progresso.yml)
toda vez que progresso.md muda, então os badges do README ficam sempre
atualizados sem esforço manual.
"""
import re
import pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PROGRESSO = RAIZ / "progresso.md"
ASSETS = RAIZ / "assets"

CORES = {
    "breu": "#16132A",
    "placa": "#211D3C",
    "sulco": "#352F5C",
    "giz": "#EDE9FA",
    "bruma": "#948CBB",
    "ambar": "#FFB03A",
    "menta": "#5FE3A8",
    "rosa": "#FF6B8A",
}

LINHA_MODULO = re.compile(
    r"^\|\s*(\d{2})\s*\|[^|]+\|\s*(⬜|✅)\s*\|\s*(⬜|✅)\s*\|\s*(⬜|✅)\s*\|"
)


def cor_por_percentual(pct: float) -> str:
    if pct >= 100:
        return CORES["menta"]
    if pct >= 50:
        return CORES["ambar"]
    return CORES["rosa"]


def ler_modulos():
    """Retorna lista de (codigo:int, aula:bool, lab:bool, quiz:bool)."""
    texto = PROGRESSO.read_text(encoding="utf-8")
    modulos = []
    for linha in texto.splitlines():
        m = LINHA_MODULO.match(linha)
        if not m:
            continue
        codigo = int(m.group(1))
        flags = [m.group(i) == "✅" for i in (2, 3, 4)]
        modulos.append((codigo, *flags))
    return modulos


def badge_svg(label: str, valor: str, cor_valor: str) -> str:
    """Badge estilo flat, duas seções, sem dependências externas."""
    largura_label = 11 + len(label) * 7
    largura_valor = 20 + len(valor) * 7.5
    largura_total = int(largura_label + largura_valor)

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{largura_total}" height="26" role="img" aria-label="{label}: {valor}">
  <linearGradient id="brilho" x2="0" y2="100%">
    <stop offset="0" stop-color="#fff" stop-opacity=".08"/>
    <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="borda">
    <rect width="{largura_total}" height="26" rx="6" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#borda)">
    <rect width="{largura_label}" height="26" fill="{CORES['placa']}"/>
    <rect x="{largura_label}" width="{largura_valor}" height="26" fill="{cor_valor}"/>
    <rect width="{largura_total}" height="26" fill="url(#brilho)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Consolas, 'IBM Plex Mono', ui-monospace, monospace" font-size="12">
    <text x="{largura_label / 2}" y="17" fill="{CORES['bruma']}">{label}</text>
    <text x="{largura_label + largura_valor / 2}" y="17" fill="{CORES['breu']}" font-weight="700">{valor}</text>
  </g>
</svg>'''


def gerar():
    ASSETS.mkdir(exist_ok=True)
    modulos = ler_modulos()

    if not modulos:
        print("Nenhum módulo encontrado em progresso.md — verifique o formato da tabela.")
        return

    def resumo(subset):
        total_checks = len(subset) * 3
        feitos = sum(a + l + q for _, a, l, q in subset)
        completos = sum(1 for _, a, l, q in subset if a and l and q)
        pct = round(100 * feitos / total_checks) if total_checks else 0
        return completos, len(subset), pct

    geral = [m for m in modulos]
    clf = [m for m in modulos if m[0] <= 10]
    aif = [m for m in modulos if m[0] >= 11]

    for nome, subset, rotulo in (
        ("progresso", geral, "progresso geral"),
        ("progresso-clf", clf, "CLF-C02"),
        ("progresso-aif", aif, "AIF-C01"),
    ):
        completos, total, pct = resumo(subset)
        valor = f"{completos}/{total} módulos · {pct}%"
        svg = badge_svg(rotulo, valor, cor_por_percentual(pct))
        (ASSETS / f"{nome}.svg").write_text(svg, encoding="utf-8")
        print(f"assets/{nome}.svg -> {valor}")


if __name__ == "__main__":
    gerar()
