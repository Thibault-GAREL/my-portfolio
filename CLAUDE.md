# CLAUDE.md - Guide de continuité du projet

Ce fichier assure la continuité du travail entre les sessions Claude Code (cloud) et le développement local sur VS Code. Il capture le contexte complet du projet, les décisions prises, les conventions et les prochaines étapes.

Dernière mise à jour : 2026-07-26

---

## 1. CONTEXTE DU PROJET

### Objectif général

Portfolio web personnel de **Thibault GAREL**, étudiant ingénieur en 4ème année à l'ECE, spécialisé en Data & AI. Le site présente son parcours académique, ses expériences professionnelles, ses projets (personnels et de groupe), ses compétences, ses statistiques GitHub et ses hobbies.

Le portfolio est aligné avec le README GitHub de Thibault : plusieurs sections du site sont des reprises "natives" (React/Tailwind) de contenus initialement conçus en Markdown/SVG pour le README.

- URL de production (Vercel) : `https://thibault-garel.vercel.app/`
- Compte GitHub : `Thibault-GAREL`

### Stack technique

- **Next.js 14.0.4** avec App Router
- **React 18.2.0** / react-dom 18.2.0
- **TypeScript 5.3.3**
- **Tailwind CSS 3.3.6** avec `darkMode: 'class'`
- **PostCSS 8.4.32** + autoprefixer 10.4.16
- Export statique : `next.config.js` utilise `output: 'export'` et `images.unoptimized: true` (site statique, pas de serveur Node en prod)

### Architecture générale (structure des dossiers)

```
my-portfolio/
├── app/
│   ├── page.tsx          # Composant principal (~2000+ lignes) : TOUT le contenu du portfolio
│   ├── layout.tsx        # Métadonnées, SEO, Open Graph, structured data (JSON-LD)
│   ├── globals.css       # Styles globaux Tailwind
│   └── icon.png          # Favicon (logo Intelligence Lab, 460x460, ~34 Ko) - détecté automatiquement par Next.js
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── PROJECT_DATES_REFERENCE.md  # Document de référence des dates corrigées des projets
├── tailwind.config.js    # darkMode: 'class' + couleurs "streamlit"
├── next.config.js        # output: 'export'
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

### Structure du contenu de `app/page.tsx`

Ordre des sections affichées sur la page (composant `Home`) :

1. **Header** (sticky) : titre + menu de navigation (desktop uniquement) + bouton CV + toggle dark mode
2. **Hero** : photo de profil (160px), nom, liens de contact (LinkedIn, GitHub, Hugging Face, Google Scholar, Contact)
3. **Academic Background** (`id="academic-background"`) : frise chronologique via `<AcademicTimeline />`
4. **Professional Experience** (`id="experience"`) : frise chronologique repliable via `<ProfessionalExperience />`
5. **Featured Projects** (`id="projects"`) : toggle "By Category / By Date" à droite du titre, puis `<ProjectsByCategory />` ou `<ProjectsByDate />`
6. **Group Projects** : projets de groupe (Resiliant AI, CND)
7. **Skills & Tools** (`id="skills"`) : plusieurs `<SkillCategory />` + section Languages (parlées) + Driving License
8. **GitHub Statistics** (`id="github-stats"`) : stats GitHub en thème transparent
9. **Hobbies** (`id="hobbies"`) : Chess, Sport, Drawing
10. **Footer** : liens de contact + badge profile views

### Composants et structures clés dans `page.tsx`

- `Home()` : composant racine, gère `sortBy` ('category' | 'date') et `darkMode`
- `ProjectsByCategory()` : projets groupés par catégorie
- `ProjectsByDate()` : projets groupés par année, avec les tableaux `fourthYearProjects`, `thirdYearProjects`, `secondYearProjects`, `firstYearProjects` (triés chronologiquement)
- `GanttChart()` : diagramme de Gantt (visible desktop uniquement, dans un `<details>`)
- `ProjectCard({ project })` : carte de projet individuelle
- `SkillCategory({ title, skills })` : catégorie de compétences
- `AcademicTimeline()` : frise du parcours académique (composant natif)
- `ProfessionalExperience()` : frise des expériences pro, repliable (`<details>`)
- Fonctions utilitaires : `normalizeCategoryName()` (via `categoryMap`), `getCategoryShadowStyle()`, `getCategoryGradientStyle()`
- Constante `categoryShadowColors` : mapping catégorie -> couleur RGB

### État d'avancement actuel

Le portfolio est **fonctionnel et déployé**. Toutes les demandes de la session cloud ont été implémentées, commitées et poussées sur la branche `claude/streamlit-portfolio-site-SBykX`.

**Fait (dernière session cloud, dans l'ordre chronologique des commits) :**
- Tri chronologique des projets 4ème année, puis de toutes les années
- 2 boutons GitHub pour le projet de groupe Resiliant AI (repo "test" + repo "Dataset & Benchmark")
- Correction transparence des stats GitHub (mobile puis dark mode) -> thème `transparent` partout
- Correction layout mobile des cartes projets (badge de catégorie centré au-dessus du titre sur mobile)
- Renommage "n8n Automation" -> "Applied AI Workflows" (emoji 🤖) partout
- Déplacement du toggle "By Category / By Date" du header vers la section Featured Projects
- Ajout de la section Hobbies (Chess, Sport, Drawing) après les GitHub stats
- Ajustements Hobbies : titres plus petits (`text-xl`), contenu centré (sauf le titre "Hobbies"), tailles de texte uniformisées (`text-lg`)
- Ajout de la section Languages parlées (Français natif, Anglais avancé - TOEIC 815 pts)
- Ajout du permis de conduire (Category B)
- Ajout de la frise Academic Background (composant React natif), placée avant les projets
- Ajout du menu de navigation + bouton CV (lien LinkedIn Featured) dans le header
- Ajout d'un bouton Home (ancre `#top`)
- Ajout de la frise Professional Experience repliable
- Ajout du lien Google Scholar (entre Hugging Face et Contact, dans Hero et Footer)
- Ajout de la catégorie **Research paper** (📄, `#FFD21E`) et du projet **OPENER** (3 cartes : Paper vers Google Scholar, Models vers la collection Hugging Face, Code vers GitHub), placée en premier dans Featured Projects, avant Generative AI. Une seule entrée OPENER dans la vue By Date et dans le Gantt, la vue By Category porte les 3 destinations.

**En cours / non tranché :** voir sections 5 et 6.

---

## 2. DÉCISIONS TECHNIQUES PRISES

### Frises chronologiques : React natif plutôt que SVG embarqué

- Thibault a d'abord conçu ses frises (Academic Background, Professional Experience) en **SVG** pour son README GitHub, avec deux variantes (light et dark, via `prefers-color-scheme`).
- Décision retenue pour le portfolio : **reconstruire ces frises en composants React/Tailwind natifs** plutôt que d'embarquer le SVG.
- Raisons :
  - Responsive (adaptation mobile via classes `sm:`)
  - Compatible avec le dark mode **par classe** du portfolio (le SVG utilisait `prefers-color-scheme`, incompatible avec le toggle manuel)
  - Cohérence visuelle avec les autres cartes du site
- Le contenu et la palette de couleurs des SVG ont été conservés fidèlement.

### Dark mode par classe (et non `prefers-color-scheme`)

- Le projet utilise `darkMode: 'class'` (Tailwind). Le dark mode est piloté par un state `darkMode` + une classe `dark` sur `<html>`.
- **Piège identifié** : les badges/stats GitHub utilisaient au départ des `<picture>` avec `media="(prefers-color-scheme: dark)"`, qui suit la préférence **système** et non la classe du site. Cela cassait l'affichage. Corrigé (voir section 5).
- Pour les composants avec couleurs dynamiques (frises, cartes), on détecte le dark mode via un **state `isDark` + `MutationObserver`** sur les attributs de `document.documentElement` :

```tsx
const [isDark, setIsDark] = React.useState(false)
React.useEffect(() => {
  const checkDarkMode = () => setIsDark(document.documentElement.classList.contains('dark'))
  checkDarkMode()
  const observer = new MutationObserver(checkDarkMode)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}, [])
```

### Couleurs dynamiques via `style` inline

- Les couleurs RGB dynamiques (par catégorie de projet, par entrée de frise) sont appliquées via l'attribut `style` inline et non via des classes Tailwind.
- Raison : limitation du JIT de Tailwind, qui ne peut pas générer des classes de couleur arbitraires calculées au runtime.

### Stats GitHub : thème `transparent` partout

- Décision finale (après plusieurs itérations) : utiliser le thème `transparent` de manière **identique en light et dark**, sur PC et mobile, pour toutes les stats.
- Services utilisés :
  - `github-readme-stats-fawn-mu-32.vercel.app` (GitHub Stats)
  - `github-profile-summary-cards-kappa.vercel.app` (Most Used Languages, Profile Details)
  - `streak-stats.demolab.com` (GitHub Streak)

### Git LFS : URL `media.githubusercontent.com`

- Pour les fichiers stockés en **Git LFS** (ex. le GIF du projet Gravity & Relativity), l'URL `raw.githubusercontent.com` renvoie un pointeur LFS (fichier texte de ~133 octets) et non le fichier réel.
- Solution retenue : utiliser `https://media.githubusercontent.com/media/<user>/<repo>/<branch>/<path>`.

### Favicon : fichier `app/icon.png`

- Utiliser une URL externe dans `metadata.icons` de Next.js **ne fonctionne pas** correctement.
- Solution retenue : placer le logo dans `app/icon.png`, détecté automatiquement par Next.js comme favicon.

### Centrage des cartes projets (nombre impair)

- Pour centrer correctement les cartes même en nombre impair, on utilise un conteneur **flexbox** avec `justify-center` et des cartes à largeur fixe (`w-full md:w-[calc(50%-0.5rem)]`).
- **Écarté** : `grid` avec `justify-items-center` cassait la taille des badges et décalait tout.

### Renommage de catégorie "n8n Automation" -> "Applied AI Workflows"

- Motivation : branding plus professionnel.
- Emoji associé : 🤖 (au lieu de ⚡).
- Le renommage a été fait dans TOUS les endroits : titres de section, `categoryMap` (normalizeCategoryName), `categoryShadowColors`, données du Gantt, `orderedCategories`.

### Migration "Speech Recognition" -> "Neural Networks" (session antérieure)

- La catégorie Speech Recognition a été supprimée ; le projet ASR a été intégré dans Neural Networks (couleur `#2563eb`), y compris dans le Gantt et les mappings.

### Navigation par ancres

- Le menu du header pointe vers des ancres : `#top`, `#academic-background`, `#projects`, `#skills`, `#hobbies`, `#github-stats`.
- Chaque section cible a un `id` et la classe `scroll-mt-20` pour compenser le header sticky.
- Le menu est masqué sur mobile (`hidden lg:flex`).
- Note : la section Professional Experience a l'`id="experience"` mais n'a pas (encore) de lien dédié dans le menu.

---

## 3. RÈGLES ET CONVENTIONS

### Conventions de code

- Composants React fonctionnels, nommés en PascalCase.
- TypeScript typé (props des composants explicitement typées).
- Styles via classes Tailwind ; couleurs dynamiques via `style` inline.
- Classes de couleur dark mode : préfixe `dark:` (ex. `dark:text-[#cdd9e5]`, `dark:bg-[#2d333b]`).
- Couleurs "streamlit" définies dans `tailwind.config.js` : `streamlit-bg`, `streamlit-secondary`, `streamlit-text`, `streamlit-accent`, `streamlit-border`.
- Tout le contenu du portfolio vit dans `app/page.tsx` (fichier volumineux, monolithique) - convention actuelle du projet.

### Workflow Git (règle explicite de la session)

- **Branche de développement** : `claude/streamlit-portfolio-site-SBykX`. Ne jamais pousser sur une autre branche sans permission explicite.
- Créer la branche localement si elle n'existe pas.
- Commits avec messages clairs et descriptifs.
- Push : `git push -u origin claude/streamlit-portfolio-site-SBykX`.
- En cas d'échec réseau uniquement : réessayer jusqu'à 4 fois avec backoff exponentiel (2s, 4s, 8s, 16s).
- Pour fetch/pull : privilégier une branche spécifique (`git fetch origin <branch>`), même logique de retry.
- Format de commit utilisé pendant la session cloud (à adapter en local) :
  - Ligne de co-auteur : `Co-Authored-By: Claude ...`
  - Lien de session : `https://claude.ai/code/session_...`
  - En local sur VS Code, ces mentions ne sont pas nécessaires ; utiliser des messages de commit standard clairs.

### Vérification

- Après une modification importante de code, lancer une vérification TypeScript : `npx tsc --noEmit -p .` (utilisé pendant la session, sans erreur).

---

## 4. PRÉFÉRENCES PERSONNELLES DE THIBAULT

- **Langue** : communication en **français**.
- **Typographie** : utiliser des tirets simples "-" et **jamais** le tiret cadratin "—". Cette règle s'applique à tout le document et à toutes les réponses.
- **Workflow attendu** : après chaque changement, committer et pousser sur la branche dédiée (Thibault s'attend à voir le travail livré, pas seulement décrit).
- **Branding** : préférence pour un rendu professionnel (ex. renommage de catégorie pour "faire plus pro", ajout du favicon Intelligence Lab).
- **Design** : goût prononcé pour le centrage, la cohérence des tailles de texte, les frises chronologiques soignées, l'adaptation light/dark et mobile.
- **Confirmation d'une version stable** : Thibault a explicitement demandé de pouvoir revenir à une version "très bien" en cas d'erreur - penser aux points de sauvegarde (commits atomiques et clairs).

---

## 5. PROBLÈMES RENCONTRÉS ET SOLUTIONS

### Projets non triés chronologiquement (vue "By Date")

- **Cause** : les tableaux `fourthYearProjects` (et autres années) étaient définis manuellement, pas dans l'ordre chronologique. Le Gantt triait correctement (fonction de tri), mais la vue "By Date" affichait dans l'ordre du tableau.
- **Solution** : réorganisation manuelle des tableaux dans l'ordre chronologique strict, pour toutes les années. Attention : le projet "Snake AI - Decision Tree" a été déplacé de la 3ème à la 4ème année (dates réelles Mar - Apr 2026).

### Stats GitHub non transparentes / invisibles en dark mode

- **Cause 1 (mobile)** : les `<picture>` avec `prefers-color-scheme` suivaient la préférence système, pas la classe `dark` du site.
- **Cause 2** : le thème `transparent` a un texte sombre, potentiellement peu lisible sur fond sombre - mais Thibault a finalement souhaité le **même thème transparent partout** (light et dark, PC et mobile), pour une apparence uniforme et cohérente entre les différentes stats.
- **Solution finale** : suppression des `<picture>` et des variantes de thème ; une seule `<img>` en thème `transparent` par stat.

### GIF Gravity & Relativity non affiché

- **Cause** : fichier en Git LFS (~12,9 Mo) ; `raw.githubusercontent.com` renvoyait le pointeur LFS.
- **Solution** : URL `media.githubusercontent.com/media/...`.

### Favicon non visible

- **Cause** : URL externe dans `metadata.icons` non fonctionnelle avec Next.js.
- **Solution** : fichier `app/icon.png` (détection automatique).

### Layout des cartes cassé par `justify-items-center`

- **Cause** : `justify-items-center` sur la grille rendait les badges de taille différente et décalait tout.
- **Solution** : flexbox `justify-center` + cartes à largeur fixe.

### Badges de catégorie débordant sur mobile

- **Cause** : titre du projet et badge sur la même ligne, débordement sur petits écrans.
- **Solution** : sur mobile, empiler le badge (centré) au-dessus du titre (centré) ; sur desktop, garder titre à gauche + badge à droite. Implémenté avec `flex flex-col items-center md:flex-row ...` et `md:order-1 / md:order-2`.

### Pièges à éviter (récapitulatif)

- Ne pas utiliser `prefers-color-scheme` pour le dark mode : le site fonctionne par classe.
- Ne pas utiliser `raw.githubusercontent.com` pour des fichiers Git LFS.
- Ne pas utiliser une URL externe pour le favicon ; passer par `app/icon.png`.
- Ne pas passer de couleur dynamique par classe Tailwind ; utiliser `style` inline.
- Attention à garder les tableaux de projets triés chronologiquement (la vue "By Date" ne trie pas automatiquement).

---

## 6. PROCHAINES ÉTAPES

### Tâches / questions en suspens (non tranchées)

1. **Open Graph pour partages sociaux** : actuellement, l'image de partage (LinkedIn, Twitter) est la **photo de profil GitHub** de Thibault (`https://github.com/Thibault-GAREL.png`). Question posée mais non tranchée : faut-il la remplacer par le **logo Intelligence Lab** (via un `opengraph-image.png`) ou garder la photo personnelle ? -> à clarifier.

2. **Favicon dans les résultats de recherche Google** : le favicon (`app/icon.png`, logo Intelligence Lab) est bien en place, mais n'apparaît pas encore dans les résultats Google car Google n'a pas réindexé le site. Action recommandée à Thibault : demander une réindexation via **Google Search Console** (`https://search.google.com/search-console`) pour l'URL `https://thibault-garel.vercel.app/`. Délai naturel : quelques jours à quelques semaines. -> pas de modif de code requise, action côté Thibault.

3. **Frises cliquables** : proposition faite d'ajouter des liens sur les entrées des frises (École Polytechnique, Edinburgh Napier, Intelligence Lab, etc.). Thibault n'a pas répondu. -> à clarifier / optionnel.

4. **Lien "Experience" dans le menu de navigation** : la section Professional Experience a un `id="experience"` mais n'a pas de lien dans le menu du header (le menu contient Home, Academic, Projects, Skills, Hobbies, GitHub). -> à ajouter éventuellement pour cohérence.

### Idées évoquées (possibles évolutions, discutées mais non implémentées)

- **Navigation multi-pages** : possibilité de créer des pages séparées (`app/parcours/page.tsx`, etc.) avec le composant `Link` de Next.js, plutôt que la navigation par ancres actuelle. Meilleur SEO/structure mais plus complexe. Choix actuel : navigation par ancres (one-page).
- **Stats Chess.com** : possibilité d'afficher le niveau Chess.com de Thibault comme les stats GitHub (via l'API publique Chess.com ou un widget de badge). Un widget est déjà utilisé dans la section Hobbies : `https://chess-stats-mu.vercel.app/api?username=T2G2`. Username Chess.com : `T2G2` ; profil : `https://www.chess.com/member/T2G2`. -> vérifier que le widget fonctionne bien en prod.

### Informations utiles / liens de référence

- CV : `https://www.linkedin.com/in/thibaultgarel/details/featured/` (LinkedIn Featured)
- LinkedIn : `https://www.linkedin.com/in/thibaultgarel/`
- GitHub : `https://github.com/Thibault-GAREL`
- Hugging Face : `https://huggingface.co/Thibault-GAREL`
- Google Scholar : `https://scholar.google.com.au/citations?hl=fr&user=VEBOeF4AAAAJ`
- Email : `thibault.garel@edu.ece.fr`
- Expériences LinkedIn : `https://www.linkedin.com/in/thibaultgarel/details/experience/`
- `PROJECT_DATES_REFERENCE.md` : référence des dates corrigées des projets (à consulter en cas de doute sur une date).

### Données de référence : palette de couleurs des catégories de projets

(constante `categoryShadowColors` dans `page.tsx`, en RGB)

- 📄 Research paper : `#FFD21E` (jaune Hugging Face, reprend la bande des vignettes du README)
- 🤖 Generative AI : `#6e40c9`
- 🧠 Neural Networks : `#2563eb`
- 🌳 Decision Tree : `#22c55e`
- 🧬 Genetic Algorithm : `#16a34a`
- 📈 Q-Learning : `#10b981`
- 🎯 PPO : `#059669`
- 🎮 Unity ML-Agents : `#0f766e`
- 🎮 Games : `#0891b2`
- 📊 Data Analysis : `#d97706`
- 🦾 Robotics : `#dc2626`
- 👥 Group Projects : `#00b4c2`
- 🤖 Applied AI Workflows : `#db2777` (anciennement "n8n Automation")
- 🪐 Physics Simulation : `#0d9488`
