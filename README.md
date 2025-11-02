# DEXCHANGE – Test Technique Front-End

**Projet réalisé dans le cadre du test technique DEXCHANGE pour reproduire 3 écrans à partir du design Figma.**

---

## 1. Installation & Lancement

1. **Cloner le projet**  
   Ouvrir un terminal et exécuter :  
   ```bash
   git clone https://github.com/bensultanisidk/dexchange-test.git
Installer les dépendances
npm install
Lancer le serveur de développement
npm run dev
Ouvrir le projet dans le navigateur
http://localhost:3000
2. Visualiser les pages
Une fois le serveur lancé, vous pouvez accéder aux trois pages principales :
Page Register / Login
http://localhost:3000/auth/register
Dashboard
http://localhost:3000/Dashboard
Table View
http://localhost:3000/Table-view
Remarque : ces liens fonctionnent uniquement en local après avoir lancé le serveur de développement.
3. Librairies utilisées
Next.js (App Router)
Tailwind CSS
TypeScript
lucide-react pour les icônes
shadcn/ui pour certains composants réutilisables
clsx pour gérer les classes conditionnelles
Composants réutilisables : Button, Card, Badge, Table, Sidebar, Navbar
4. Ce que vous feriez avec plus de temps
Si j’avais plus de temps pour ce projet, voici les améliorations que j’apporterais :
Dark / Light mode complet
Ajouter un toggle global pour changer le thème
Persister le thème choisi dans le local storage
Sidebar améliorée
Mettre en surbrillance la page active
Ajouter des animations douces au hover
Animations pour les composants
Boutons, cartes et tableaux animés avec Framer Motion
Transitions fluides lors du chargement ou des interactions
Tests unitaires et d’intégration
Utiliser Vitest et React Testing Library
Vérifier le rendu des composants et les interactions
Optimisation de la responsivité et accessibilité
Adapter l’affichage pour mobile et tablette
Ajouter des attributs ARIA pour l’accessibilité
Données dynamiques et API
Remplacer les mockdata par des appels API réels
Ajouter gestion des erreurs et états de chargement
5. Auteur
Faoid Ben Sultan – GitHub
