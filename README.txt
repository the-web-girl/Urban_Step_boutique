# 👟 Urban_Step – Site vitrine e-commerce (démo statique)

**Urban_Step** est un site vitrine statique destiné à présenter une galerie d’articles de sport (chaussures, vêtements, accessoires) et à proposer un formulaire de contact accessible.  
Les visiteurs peuvent **acheter directement via Vinted** grâce aux boutons présents sur chaque card produit.  
Le projet met l’accent sur l’**accessibilité numérique** (WCAG / RGAA), la performance et une structure HTML/CSS/JS claire.

---

## 📂 Structure du projet

├── index.html # Page d'accueil (galerie produits, avis clients, etc.)
├── contact.html # Page de contact avec formulaire accessible
│
├── assets/ # Images et visuels produits (PNG, JPG, WebP, SVG, logos)
│
├── js/
│ └── main.js # Script principal (navigation mobile, interactions, formulaire)
│
├── style/
│ ├── styles.css # CSS compilé pour le site
│ ├── styles.css.map # Sourcemap généré automatiquement
│ ├── styles.scss # SCSS principal (point d'entrée)
│ │
│ ├── components/ # Composants SCSS réutilisables
│ │ ├── _header.scss
│ │ ├── _footer.scss
│ │ ├── _buttons.scss
│ │ └── ...etc
│ │
│ └── utils/ # Outils SCSS (variables, mixins, helpers)
│ ├── _variables.scss
│ ├── _mixins.scss
│ └── ...etc
│
└── README.md # Documentation du projet


---

## ✨ Fonctionnalités principales

- **Navigation responsive**
  - Menu desktop et menu burger mobile
  - Navigation clavier + support lecteur d’écran

- **Galerie de produits**
  - Présentation d’articles avec visuels, tailles, couleurs, prix
  - **Bouton d’achat direct** : chaque card produit contient un lien vers Vinted pour commander l’article
  - Mise en avant des réductions et disponibilités

- **Formulaire de contact**
  - Champs : prénom, nom, téléphone, email, message
  - Validation HTML5 + gestion d’état avec JavaScript
  - Accessibilité renforcée (labels, aria-live, focus)

- **Accessibilité**
  - Contrastes conformes WCAG AA
  - Navigation clavier fluide
  - Texte alternatif pour les images
  - Structure HTML sémantique (`header`, `main`, `section`, `footer`)

- **Intégration réseaux sociaux**
  - Liens vers **Vinted** (achat direct) et **Instagram** (avis & communauté)
  - Icônes **Font Awesome** avec alternatives textuelles (`.sr-only`)

---

## 🚀 Installation & utilisation

1. **Téléchargement du projet**
   ```bash
   git clone https://github.com/ton-projet/urban_step.git

2. **Ouverture locale**
   - Ouvrez index.html dans votre navigateur.
   - Aucun serveur ni build n’est nécessaire.

3. **Optionnel : Compilation SCSS**
   - Pour personnaliser les styles, compilez les fichiers .scss en .css avec Sass :
   # Installer Sass si nécessaire
    npm install -g sass

    # Compiler avec watch
    sass style/styles.scss style/styles.css --watch

---

## 🔧 Technologies utilisées

- HTML5 (sémantique, ARIA)

- SCSS / CSS3 (architecture modulaire, variables, mixins)

- JavaScript Vanilla (navigation mobile, interactions, validation formulaire)

- Font Awesome (icônes sociales et décoratives)

- Images optimisées (JPG, PNG, WebP)

---

## 📌 Points forts du projet

- Démonstration d’un mini-site e-commerce statique

- Boutons d’achat direct vers Vinted intégrés dans les cards produits

- Respect des bonnes pratiques d’accessibilité (WCAG/RGAA)

- Code organisé et modulaire (SCSS en composants + utils)

- Design responsive adapté desktop, tablette, mobile

- Facile à maintenir et à faire évoluer

---

### 📄 Licence

© 2025 – Créé par IntA11Y - Solutions
Tous droits réservés.