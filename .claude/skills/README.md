# Skills locaux du portfolio

Ces skills ne sont **pas** globaux. Ils vivent dans ce repo et ne se chargent que quand Claude Code
travaille dans `my-portfolio`. Ils n'apparaissent jamais dans les sessions Python IA/ML, ce qui évite
toute collision avec `schema-animation` et `thibault-remotion`, qui restent globaux.

## Contenu

| Skill | Rôle | Déclenchement |
|---|---|---|
| `animate` | Construire une animation UI (CSS, `@starting-style`, WAAPI, Motion), avec les courbes et durées imposées | Automatique, sur toute demande de mouvement dans ce projet |
| `pick-ui-library` | Choisir la bonne lib front plutôt que coder à la main (base-ui, Sonner, cmdk, NumberFlow, recharts, zustand, cva...) | **Explicite uniquement** (`disable-model-invocation: true`), donc l'appeler par son nom |

`animate/RECIPES.md` contient les implémentations prêtes à l'emploi (bouton, dropdown, tooltip, modal,
drawer, toast, accordéon, stagger, hold-to-confirm, indicateur d'onglet, scroll reveal, drag-to-dismiss).
Il se charge à la demande, pas au démarrage.

## Provenance

Extraits de [github.com/emilkowalski/skills](https://github.com/emilkowalski/skills) (MIT), le repo de
design engineering d'Emil Kowalski (auteur de Sonner et Vaul). Récupérés le 22 août 2026.

Deux skills sur douze ont été retenus. Les dix autres sont hors périmètre ici : React Native / Expo,
Swift, principes Apple, doc Sonner, prototypage de composants, et les trois skills d'audit
d'animations (`review-animations`, `improve-animations`, `find-animation-opportunities`), qui servent
à passer en revue une codebase UI existante.

Le corps des fichiers est laissé tel quel, à une exception près : l'en-tête de `animate/SKILL.md` a été
adapté pour cadrer son périmètre à ce projet et pour signaler que les skills compagnons ne sont pas
installés.

## Mettre à jour

```powershell
# depuis la racine du repo
curl -sL https://raw.githubusercontent.com/emilkowalski/skills/main/skills/animate/SKILL.md -o .claude/skills/animate/SKILL.md
curl -sL https://raw.githubusercontent.com/emilkowalski/skills/main/skills/animate/RECIPES.md -o .claude/skills/animate/RECIPES.md
curl -sL https://raw.githubusercontent.com/emilkowalski/skills/main/skills/pick-ui-library/SKILL.md -o .claude/skills/pick-ui-library/SKILL.md
```

Penser à réappliquer l'adaptation d'en-tête de `animate/SKILL.md` après une mise à jour.
