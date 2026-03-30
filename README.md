<div align="center">

# 🚀 Mi Portafolio — Camilo León

### *Full Stack Developer · Angular · Java · Multilingüe*

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://cleon113.github.io/mi-portafolio/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**[🌐 Ver en vivo →](https://cleon113.github.io/mi-portafolio/)**

</div>

---

## ✨ ¿Qué es esto?

Portafolio personal construido con **Angular 21** — diseño **Glitch Noir Terminal**, animaciones suaves al hacer scroll, efecto typewriter en el hero, y soporte multilingüe completo (🇪🇸 / 🇩🇪 / 🇬🇧).

Un SPA moderno, rápido, responsive y hecho desde cero.

---

## 🎯 Características principales

|
 Feature 
|
 Detalle 
|
|
---
|
---
|
|
 🌍 
**
Multilingüe
**
|
 Español, Alemán e Inglés con cambio instantáneo 
|
|
 ⌨️ 
**
Typewriter Effect
**
|
 Roles que se escriben solos en el hero 
|
|
 🎞️ 
**
Scroll Animations
**
|
 Intersection Observer API para efectos al hacer scroll 
|
|
 📱 
**
Responsive
**
|
 Mobile-first, se ve bien en todo 
|
|
 🔍 
**
SEO Ready
**
|
 Meta tags, Open Graph y Twitter Card configurados 
|
|
 🚀 
**
Deploy automático
**
|
 GitHub Pages con un solo comando 
|

---

## 🛠️ Tech Stack

**Frontend**
- [Angular 21](https://angular.io/) — standalone components, sin módulos
- [TypeScript 5.9](https://www.typescriptlang.org/) — modo estricto activado
- [RxJS 7.8](https://rxjs.dev/) — programación reactiva
- SCSS — theming y animaciones custom

**Tipografías**
- [Syne](https://fonts.google.com/specimen/Syne) — títulos y branding
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) — estética terminal

**Tooling**
- Angular CLI 21.2.5
- Vitest — unit testing
- Prettier — formateo de código
- angular-cli-ghpages — deploy a GitHub Pages

---

## 📁 Estructura del proyecto


mi-portafolio/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── navbar/ # Navegación sticky + cambio de idioma
│ │ │ ├── hero/ # Sección inicial con typewriter
│ │ │ ├── about/ # Sobre mí + estadísticas
│ │ │ ├── skills/ # Habilidades técnicas y blandas
│ │ │ ├── projects/ # Proyectos destacados
│ │ │ ├── experience/ # Historial laboral
│ │ │ └── contact/ # Links de contacto + footer
│ │ ├── services/
│ │ │ ├── translation.ts # Gestión de idiomas
│ │ │ └── scroll-animation.ts # Animaciones con Intersection Observer
│ │ └── app.ts # Componente raíz
│ ├── styles.scss # Estilos globales y variables
│ └── index.html # Meta tags y fuentes
├── public/
│ ├── CamiloLeonLebenslauf.pdf # CV descargable
│ └── assets/
├── angular.json
├── package.json
└── tsconfig.json


---

## 🚀 Cómo correrlo localmente

### Prerrequisitos

- Node.js `>= 18`
- npm `>= 11`
- Angular CLI: `npm install -g @angular/cli`

### Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/Cleon113/mi-portafolio.git
cd mi-portafolio

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm start

Abre http://localhost:4200 en tu navegador.

📦 Scripts disponibles
npm start       # Servidor de desarrollo (localhost:4200)
npm run build   # Build de producción → /dist
npm test        # Unit tests con Vitest
npm run watch   # Build en modo watch
ng deploy       # Deploy a GitHub Pages

🌐 Secciones del portafolio
Hero — Presentación con efecto typewriter y CTAs
About — Intro personal + estadísticas (3+ años de experiencia, 3 idiomas, 2 países)
Skills — Frontend, Backend, Tools & Methods, y habilidades blandas
Projects — AzubiPortal (Crealogix) y este mismo portafolio
Experience — Timeline laboral desde 2020 hasta hoy
Contact — Email, LinkedIn y GitHub
📬 Contacto
<div align="center">
Show Image

Show Image

Show Image

</div>
<div align="center">
Hecho con 💻 y ☕ por Camilo León

"Code, coffee, repeat."

</div> ```
