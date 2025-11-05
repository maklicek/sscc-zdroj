# SSCC Web — Deploy Manual (Netlify, static only)

Tento web **nepoužívá žádný build proces** (žádné React, Vue, npm ani CI).  
Je to čistý statický web (HTML + CSS + assets).

---

## 🧭 Základní princip
- **Repozitář na GitHubu je odpojený** — Netlify už neprovádí buildy.  
- **Netlify slouží pouze k hostování** statického obsahu.  
- Vše se nasazuje **ručně (Drag & Drop)**.  
- Žádné build minutes se neodečítají.

---

## 🚀 Jak nasadit novou verzi

1. Připrav novou verzi webu (např. aktualizovaný ZIP z `sscc-cockpit-v1.1` nebo novější).  
2. Rozbal ZIP — uvidíš:

# SSCC — Clean Starter

Minimalistický skeleton pro nový web na **GitHub Pages**.

## Jak spustit
1) Na GitHubu vytvoř repozitář (např. `sscc-studnice`), přepni na branch `main`.
2) Nahraj obsah tohoto ZIPu (včetně `.nojekyll`).
3) V **Settings → Pages** nastav Source: `Deploy from a branch`, Branch: `main / root`.
4) Otevři `https://<tvé-user>.github.io/sscc-studnice/`.

## Struktura
- `index.html` … přehled + navigace
- `projekty.html`, `napady.html`, `spoluprace.html`, `edukace.html`, `konsorcium.html`
- `assets/style.css`, `assets/js/main.js`
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`

> EN zatím jako auto‑překlad — jazykový přepínač je placeholder.
