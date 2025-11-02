# ?? DEXCHANGE – Test Technique Front-End

Ce projet est une application web front-end construite pour reproduire fidèlement **3 écrans principaux** d'un design Figma de DEXCHANGE. L'application est développée avec l'écosystème moderne **Next.js**, **Tailwind CSS** et **TypeScript**.

---

## ?? Architecture du Projet

Le code est organisé autour de composants réutilisables et suit la structure de l'App Router de Next.js pour une organisation claire :

* **`app/auth/register` & `app/auth/login`**: Points d'entrée pour les pages d'authentification.
* **`app/dashboard`**: Contient la page principale du Tableau de Bord.
* **`app/table-view`**: Contient la page de la Vue Tableau.
* **`components/`**: Dossier central pour tous les composants React réutilisables (`Button`, `Card`, `Sidebar`, etc.).
* **`lib/mockData.ts`**: Fichier contenant les données fictives (`mock data`) utilisées pour alimenter les tableaux et les cartes.

---

## ??? Technologies et Outils

Le projet repose sur la stack technique suivante :

* **Framework**: **Next.js** (avec l'App Router)
* **Styling**: **Tailwind CSS**
* **Langage**: **TypeScript**
* **Icônes**: **lucide-react**
* **Composants**: **shadcn/ui** (pour certains éléments de base)
* **Utilitaires**: **clsx** (pour la gestion des classes conditionnelles)

---

## ?? Prérequis

Pour lancer l'application en local, assurez-vous d'avoir installé :

* **Node.js** (version 18 ou supérieure recommandée)
* **npm** (ou yarn/pnpm)

---

## ?? Comment lancer l'application

Pour démarrer le projet en local, suivez ces étapes :

### 1. Cloner le Projet

```bash
git clone [https://github.com/bensultanisidk/dexchange-test.git](https://github.com/bensultanisidk/dexchange-test.git)
cd dexchange-test
2. Installer les Dépendances
npm install
3. Lancer le Serveur de Développement
npm run dev
4. Ouvrir l'Application
Une fois le serveur lancé, ouvrez votre navigateur et accédez à l'adresse locale :
* URL : http://localhost:3000

??? Visualiser les Pages Principales
Vous pouvez naviguer directement vers les vues suivantes :
PageAdresse ComplètePage Register / Loginhttp://localhost:3000/auth/registerDashboardhttp://localhost:3000/dashboardTable Viewhttp://localhost:3000/table-viewExporter vers Sheets
(?? Ces liens fonctionnent uniquement en local après avoir lancé le serveur.)

?? Tests et Validation
Les pages ont été validées manuellement en vérifiant les points suivants :
* ? Fidélité au Design : Reproduction correcte des tableaux et des cartes.
* ? Interactions : Vérification des boutons et des formulaires.
* ? Données : Intégrité des données mockées affichées dans les composants.
* ? Responsivité : Support simple sur les tailles d'écran mobile et desktop.

?? Futures Améliorations
Si plus de temps était alloué à ce projet, les axes d'amélioration prioritaires seraient :
* ?? Dark / Light Mode Complet: Mise en place d'un toggle global avec persistance du thème.
* ?? Dashboard plus Interactif: Ajout d'animations et intégration de graphiques dynamiques.
* ?? Tests automatisés: Couverture des composants clés avec Vitest et React Testing Library.
* ??? Amélioration de la Responsivité: Optimisation des tableaux pour les petits écrans.
* ?? Intégration API: Remplacement des données mockData par des appels à un back-end réel.
* Sidebar améliorée: Indication de la page active et animations de hover plus fluides.

?? Auteur
Faoid Ben Sultan

