SSCC — SolarSpace Carbon Cycle
====================================

Tato sada obsahuje sjednocenou strukturu webu SSCC.
Všechny stránky (index + podstránky) používají společnou hlavičku, patičku
a jednotný styl se světlejšími panely a zlatým textem.

---------------------------------
📁 Struktura složek a souborů
---------------------------------
sscc-site-unified/
 ├─ index.html
 ├─ edukace.html
 ├─ projekty.html
 ├─ napady.html
 ├─ konsorcium.html
 ├─ spoluprace.html
 └─ assets/
     ├─ style.css       ← společný CSS styl
     └─ sscc-logo.jpg   ← logo (můžeš přepsat svým)

---------------------------------
📘 Jak nahrávat na GitHub
---------------------------------
1. Na GitHubu otevři svůj repozitář (např. sscc-web).
2. Klikni na „Add file → Upload files“.
3. Nahraj nejprve HTML soubory do kořene repozitáře.
4. Vytvoř složku „assets“ a do ní nahraj style.css a sscc-logo.jpg.
5. Commitni změny.

Cesty jsou již správně nastavené:
<link rel="stylesheet" href="assets/style.css?v=3">

---------------------------------
🌞 Poznámky
---------------------------------
• Slunce v pravém horním rohu je čistě vizuální CSS efekt (radial-gradient).
• Nejsou zde jazykové přepínače (CZ/EN byly odstraněny).
• Styl je plně responzivní a nezávislý na externím hostingu (Netlify apod.).
• Kdykoliv můžeš upravit barvy, písmo nebo gradient přímo v style.css.
