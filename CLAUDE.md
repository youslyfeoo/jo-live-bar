# Jo Live Bar — Site vitrine

## Contexte

Jo Live Bar est un bar avec musique live. Ce projet est **complètement
indépendant du projet LYFE** : dossier séparé (`C:\Users\youss\jo-live-bar`
vs `C:\Users\youss\lyfe`), dépôt Git séparé, et — dès que des comptes de
service seront créés (Supabase, Stripe, Resend, hébergement) — comptes et
clés d'API strictement séparés de LYFE, même si les mêmes logiciels sont
réutilisés. Décision organisateur (2026-07-27) : ne jamais mélanger les
deux projets, dans le code comme dans les données.

## État actuel (2026-07-27)

Vitrine de présentation (page d'accueil) : présentation du lieu, concept,
horaires, adresse/contact. Plus trois pages : `/menu` (carte complète en
livre animé, voir "Page carte" ci-dessous), `/plan-de-salle` (voir
"Choix de la table sur plan") et `/a-propos` (histoire du lieu).
Navigation en bas de chaque page (`components/BottomNav.tsx`, façon
appli mobile) vers 3 sections (Réserver, Menu, À propos) : pastilles
côte à côte (sans fond de bulle englobant), chacune utilisant une vraie
photo de cymbale dorée avec le nom gravé dessus (fournies par
l'organisateur, `public/images/nav-*.png`) plutôt qu'un rendu recréé en
CSS — bien plus réaliste. Le 4ᵉ bouton "Soirée" (vers `/#concept`) a été
retiré (décision organisateur, 2026-07-28) faute d'image dédiée dans le
même style ; `cymbal-texture.png` reste dans le projet mais n'est plus
utilisé.

Écran d'accueil animé (`components/IntroSplash.tsx`, page `/`
uniquement) : le logo J.O fait un « zoom dramatique » façon générique
Netflix — parti minuscule et flou, il grossit avec un effet de rebond
et un flash de lumière dorée, puis se stabilise. Plein écran noir,
disparaît automatiquement après ~2,8s (une seule fois par session via
`sessionStorage`, jamais si l'utilisateur a activé « réduire les
animations »).

**Historique des essais (2026-07-28)**, du premier au dernier, chacun
remplacé par le suivant à la demande de l'organisateur : batteur dessiné
en SVG/CSS (pas assez réaliste) → photo de couverture avec reflet doré
→ vraie vidéo de batteur (licence Pexels, « Big Bag Films », id
8513826 — une vidéo Pinterest proposée initialement a été écartée car
elle appartenait à quelqu'un d'autre) → **version actuelle : zoom sur le
logo**, jugée plus fiable qu'une vidéo qui doit charger. Le fichier
vidéo a été retiré du projet ; l'URL Pexels ci-dessus permet de le
retélécharger si besoin de revenir en arrière.

Page carte (`/menu`) : la page elle-même ne défile plus (hauteur fixe à
l'écran, `overflow-hidden`) pour que seul le livre se feuillette, sans
que la page bouge en même temps.

Pas encore de réservation en ligne interne ni de paiement — quelques
champs restent volontairement en `[À COMPLÉTER]` (voir liste en fin de
fichier).

### Répartition du contenu par page (décision organisateur, 2026-07-28)

Chaque information vit à un seul endroit, jamais dupliquée entre pages :
- **`/` (accueil)** : seule source pour le concept (teaser court), les
  horaires, l'adresse/contact (téléphone, Instagram, TikTok) et la
  réservation. Le header ne contient plus qu'un logo (plus de liens en
  double avec la bulle du bas) — la navigation se fait uniquement via la
  bulle flottante (`BottomNav`)
- **`/a-propos`** : uniquement l'histoire ("Depuis 1993") — ne répète
  jamais le concept, les horaires ou les réseaux sociaux, qui vivent sur
  l'accueil. Un lien "Voir le concept et les infos pratiques →" renvoie
  vers `/#concept` plutôt que de dupliquer ce contenu
- **`/menu`** : uniquement la carte
- **`/plan-de-salle`** : uniquement le plan de table

Avant d'ajouter du contenu à une page existante, vérifier qu'il n'existe
pas déjà ailleurs — sinon lier plutôt que dupliquer.

## Page carte (`/menu`)

Livre animé (composant `components/MenuBook.tsx`, données dans
`components/menu-data.ts`) reproduisant fidèlement la carte réelle du
lieu (textes et prix transcrits depuis les photos de leur carte papier,
fournies par l'organisateur le 2026-07-27) : Finger Food, vins, bières,
cocktails/mocktails, shots/softs, alcool classique et premium (18 pages
de contenu + couverture + page de clôture). Pages en fond crème avec
cadres Art Déco dorés et titres bordeaux, pour évoquer la vraie carte
papier plutôt que le thème sombre du reste du site — choix volontaire
pour cette page précise.

Techniquement : `react-pageflip` est chargé uniquement côté client
(`components/MenuBookLoader.tsx`, `next/dynamic` avec `ssr: false`) car
la librairie manipule le DOM directement — nécessaire pour rester
compatible avec l'export statique (`output: "export"`).

La couverture affiche un sommaire de raccourcis (`TOC_ENTRIES` dans
`components/MenuBook.tsx`) : cliquer sur une catégorie (Finger Food, Les
Vins, Champagne, Bière, Cocktails, Mocktails, Shots & Softs, Alcools)
saute directement à la bonne page via l'API `pageFlip().flip(page)`
(accessible par une ref sur `HTMLFlipBook`). **Point technique à
retenir** : le tout premier appel à `.flip()` après le montage du
composant ne s'affiche pas (bug connu de la librairie) — `goToPage`
appelle `.flip(page)` deux fois de suite pour contourner ça ; ne pas
retirer ce deuxième appel, il n'est pas redondant.

Si les prix ou plats changent, mettre à jour `components/menu-data.ts`
uniquement (structure `MenuPageData[]`, un objet par page du livre). Si
une page est ajoutée/retirée, penser à recalculer les index dans
`TOC_ENTRIES` (page 0 = couverture, page N = `menuPages[N-1]`).

Le nom réel du lieu (Instagram @j.o.livebar), l'adresse, le téléphone et
le concept ont été retrouvés le 2026-07-27 via leur Instagram, leur
Linktree et leur outil de réservation actuel (inserve.co) — voir "Source
des informations" ci-dessous.

## Réservation existante (avant le système interne à construire)

Le lieu utilise déjà un outil de réservation externe simple (créneau
date/heure/nombre de personnes, sans aucune garantie par carte bancaire) :
`https://inserve.co/businesses/LgLbI7dRTU5Jvxfiozrt`. La vitrine y renvoie
temporairement (bouton "Réserver en ligne") en attendant le système
interne avec empreinte bancaire décrit ci-dessous, qui le remplacera.

## Stack technique

- Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- `next/font/google` pour les polices (Playfair Display pour les titres,
  Poppins pour le corps de texte) — choix de départ, à ajuster si une
  identité visuelle réelle (logo, couleurs, photos) est fournie plus tard
- Export statique (`output: "export"` dans `next.config.ts`,
  `images.unoptimized: true`) : tant que le site n'a ni Server Action ni
  route API (donc pas encore la réservation avec paiement), `npm run
  build` génère un dossier `out/` 100% statique, déployable tel quel sur
  Cloudflare Pages sans adaptateur. **Le jour où la réservation interne
  (Stripe, formulaire serveur) sera construite, il faudra retirer `output:
  "export"` et passer par l'adaptateur Next.js de Cloudflare
  (`@cloudflare/next-on-pages`) ou des Pages Functions** — décision à
  reprendre à ce moment-là, pas avant.
- Déploiement : Cloudflare Pages (palier gratuit, sans restriction d'usage
  commercial contrairement au palier gratuit de Vercel) — dépôt GitHub de
  l'organisateur connecté directement à Cloudflare Pages, build command
  `npm run build`, dossier de sortie `out`

## Contrainte budget — 0€/mois de coût fixe

Décision organisateur (2026-07-27) : le site doit tourner sans abonnement
mensuel. Concrètement, une fois la réservation développée :
- Hébergement : palier gratuit (Vercel Hobby, ou alternative si le point
  ci-dessous pose problème)
- Supabase : palier gratuit
- Resend : palier gratuit (largement suffisant pour le volume d'un bar)
- Stripe : aucun abonnement, seulement des frais par transaction (ce
  n'est pas un coût fixe du site, mais un prélèvement sur chaque paiement
  réellement effectué)

Point de vigilance à signaler à l'organisateur avant mise en production :
le palier gratuit de Vercel (Hobby) est conçu pour un usage non
commercial dans ses conditions d'utilisation ; Jo Live Bar étant une
activité commerciale, une alternative comme Cloudflare Pages (gratuit,
sans cette restriction) peut être préférable — à trancher avant le
déploiement final, pas bloquant pour le développement en local.

## Feuille de route — réservation avec empreinte bancaire (pas encore implémentée)

Décision organisateur (2026-07-27), à construire dans une prochaine étape :

- Formulaire de réservation : nom, contact, nombre de personnes, date/heure
- Carte bancaire enregistrée à la réservation (Stripe SetupIntent) —
  **aucun débit immédiat**, juste un moyen de paiement mis de côté
- Montant de garantie : 10€ par personne (ex. 5 personnes réservées = 50€
  de garantie)
- Débit déclenché **uniquement si la personne ne se présente pas** malgré
  sa réservation (no-show) — nécessite une action côté équipe (interface
  admin à construire, sur le modèle de `/admin` chez LYFE) pour marquer
  une réservation comme no-show et déclencher le prélèvement
- Coordonnées des réservataires conservées comme fichier client, dans une
  base de données dédiée à Jo Live Bar (jamais partagée avec LYFE)
- Mention RGPD à prévoir sur le site (usage des données, durée de
  conservation, droit à la suppression sur demande) — à faire valider par
  un professionnel qualifié si besoin, comme pour LYFE

### Choix de la table sur plan (décision organisateur, 2026-07-27)

En plus du formulaire ci-dessus, le client doit pouvoir **choisir sa
table sur un plan visuel du J.O**, avec la disponibilité en temps réel
(une table déjà réservée à la date/heure choisie apparaît indisponible)
— pas une simple carte statique, donc chaque table doit être une entrée
dans la base de données (capacité, zone) reliée aux réservations.

**Plan de salle validé le 2026-07-27, réduit le 2026-07-28** (page
`/plan-de-salle`, composant `components/FloorPlan.tsx`, données dans
`components/floor-data.ts`) : salle rectangulaire, bar sur toute la
longueur d'un côté, scène centrée sur le côté opposé (plus étroite que
le mur), **12 tables au total** (réduit de moitié à la demande de
l'organisateur, qui trouvait le plan à 24 tables trop chargé) — 5
tables rondes (2 pers.), 5 tables carrées (4 pers.), 2 banquettes le
long des murs latéraux (6 pers.) — soit ~42 places assises. **Ce plan
est une estimation décrite à l'oral par l'organisateur, pas un relevé
architectural exact** — les positions précises (coordonnées SVG dans
`floorTables`, `components/floor-data.ts`) sont à ajuster si un vrai
plan/photo est fourni plus tard.

Les tables sont cliquables (`components/FloorPlan.tsx`, "use client") :
toucher une table la sélectionne (mise en évidence + boutons "Réserver
cette table" / "Appeler"), la retoucher la désélectionne. **La
disponibilité en temps réel n'est pas encore branchée** — la
sélection ne fait qu'orienter vers le canal de réservation actuel
(inserve.co/téléphone) en demandant de préciser le numéro de table ;
le vrai lien base de données par table arrivera avec le système de
réservation ci-dessous. Point technique : `floorTables`/`floorSummary`
vivent dans `floor-data.ts` (fichier sans "use client") plutôt que
dans `FloorPlan.tsx`, pour que la page serveur `/plan-de-salle` puisse
importer `floorSummary` sans passer par la frontière client/serveur.

Ce que ça implique techniquement, à faire au moment de démarrer ce
chantier (pas avant, pas de scaffolding spéculatif) :
- Table `tables` dans Supabase (id, nom/numéro, capacité, zone, position
  x/y pour l'affichage du plan)
- La réservation référence une table précise (`table_id`), en plus de
  event_slug/email/participants déjà prévus
- Ceci confirme le besoin de Supabase + Server Actions dès cette étape
  (pas seulement pour l'empreinte bancaire) : **retirer `output:
  "export"` fera partie de ce même chantier**, voir note dans "Stack
  technique"

## Règles absolues

1. Jamais inventer une donnée manquante (adresse, horaires, concept,
   contact, prix). Utiliser `[À COMPLÉTER]` plutôt qu'un contenu
   plausible inventé.
2. Ne jamais réutiliser un compte ou une clé d'API du projet LYFE
   (Supabase, Stripe, Resend, hébergement) — tout est dédié à Jo Live Bar.
3. Rester à 0€/mois de coût fixe (voir "Contrainte budget" ci-dessus).

## Avant de redonner la main

1. Confirmer que `npm run build` passe sans erreur
2. Lister tous les `[À COMPLÉTER]` restants avec l'endroit où chacun se
   trouve

## `[À COMPLÉTER]` actuels (app/page.tsx)

- Horaire d'ouverture en soirée avant minuit, et horaires hors saison
  estivale (seul le créneau clubbing "minuit-5h" du Summer Club 2026 est
  confirmé, voir "Source des informations")
- Adresse email de contact (téléphone et réseaux sociaux déjà renseignés)

## Source des informations (2026-07-27)

Informations réelles trouvées via recherche publique, à confirmer avec
l'organisateur avant mise en production :

- **Nom officiel** : LE J.O LIVE STAGE BAR (Instagram/TikTok @j.o.livebar)
- **Adresse** : Allée des Commerces du Charvet, Les Arcs 1800, 73700
  Bourg-Saint-Maurice (source : inserve.co, leur outil de réservation
  actuel)
- **Téléphone** : +33 7 67 26 66 87 (source : inserve.co)
- **Concept** : café-concert et bar à cocktails ouvert depuis 1993 —
  concerts live dès l'apéritif, tapas et cocktails, cave à vins et
  spiritueux, ambiance clubbing jusqu'à 5h. Décor velours/bois/lumières
  tamisées (source : description inserve.co + publications Instagram,
  reformulé pour le site plutôt que copié)
- **Horaires confirmés** : "Summer Club 2026", jeudi/vendredi/samedi,
  juillet-août uniquement, clubbing de minuit à 5h (source : bio
  Instagram). Les horaires d'ouverture en soirée avant minuit et le
  fonctionnement hors saison estivale n'ont pas été trouvés — restent en
  `[À COMPLÉTER]`
- **Menu** : un PDF "Menu Food & Drink" (18 pages) et un PDF "Carte
  Premium" existent sur leur Linktree — pas encore intégrés au site, à
  ajouter si une page menu est demandée plus tard
- **Email** : non trouvé (pas de lien mailto exploitable sur leur
  Linktree) — reste en `[À COMPLÉTER]`
- **Logo officiel** : récupéré depuis leur page inserve.co (photo de
  profil de l'établissement) — `public/images/logo-jo-live-bar.jpg`.
  Cachet Art Déco noir et or "LE J•O LIVE STAGE BAR SINCE 1993", qui
  confirme la palette noir/or déjà choisie pour le site. Utilisé dans le
  header et le hero de `app/page.tsx`
