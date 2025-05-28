# SAOBR - Application Web Next.js Moderne

Une application web moderne construite avec Next.js, TypeScript, et TailwindCSS, offrant une expérience utilisateur optimale avec des composants UI modernes et accessibles.

## 🚀 Technologies Principales

- **Framework**: [Next.js 15](https://nextjs.org/) avec TurboPack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) pour des composants accessibles
  - [Lucide React](https://lucide.dev/) pour les icônes
  - [FontAwesome](https://fontawesome.com/) pour les icônes additionnelles
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) avec [Zod](https://zod.dev/) pour la validation
- **Maps Integration**: 
  - [React Google Maps](https://react-google-maps-api-docs.netlify.app/)
  - [React Leaflet](https://react-leaflet.js.org/)
- **Date Handling**: [date-fns](https://date-fns.org/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Installation

1. Clonez le repository :
```bash
git clone [url-du-repo]
cd saobr
```

2. Installez les dépendances :
```bash
yarn install
# ou
npm install
```

3. Créez un fichier `.env.local` et configurez les variables d'environnement nécessaires :
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api
```

## 🔧 Scripts Disponibles

- **Développement** : Démarrez le serveur de développement avec TurboPack
```bash
yarn dev
```

- **Production** : Construisez et démarrez l'application en production
```bash
yarn build
yarn start
```

- **Linting** : Vérifiez le code avec ESLint
```bash
yarn lint
```

## 🌟 Fonctionnalités

- 🎨 Interface utilisateur moderne et responsive
- 🌓 Mode sombre/clair avec next-themes
- 🗺️ Intégration de cartes (Google Maps et Leaflet)
- 📱 Composants UI accessibles et réutilisables
- 🔍 Validation de formulaires robuste
- 📅 Gestion avancée des dates
- 🌐 Gestion d'état globale avec Zustand

## 🔒 Sécurité et Performance

- TypeScript pour une meilleure sécurité du type
- ESLint pour la qualité du code
- TurboPack pour des builds rapides
- Composants optimisés pour les performances

## 📚 Structure du Projet

```
saobr/
├── src/               # Code source principal
├── public/            # Assets statiques
├── components/        # Composants réutilisables
├── styles/           # Styles globaux et configurations Tailwind
└── ...
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## 📝 License

Ce projet est sous licence [insérer type de licence]

---

Développé avec ❤️ par [votre équipe/organisation]
