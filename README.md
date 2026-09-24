# Portafolio Personal — Alejandro López

Portafolio bilingüe (ES/EN) construido con Vue 3, TypeScript y Vite, con modo claro/oscuro, rutas dinámicas por proyecto y despliegue continuo en Vercel.

🔗 **Sitio en vivo:** https://portafolio-personal-seven-pi.vercel.app

## Características

- 🌗 Modo claro / oscuro con persistencia de preferencia mediante Pinia
- 🌐 Contenido bilingüe (español / inglés) en toda la interfaz
- 🖼️ Galería de imágenes con carrusel por proyecto
- 🧭 Rutas dinámicas (`/proyectos/:slug`) para el detalle de cada proyecto
- 📱 Diseño responsive con menú hamburguesa en mobile
- ✨ Animaciones de aparición al hacer scroll (Intersection Observer)

## Stack técnico

- **Framework:** Vue 3 (Composition API + `<script setup>`)
- **Lenguaje:** TypeScript
- **Build tool:** Vite
- **Estado:** Pinia
- **Routing:** Vue Router
- **Estilos:** CSS con variables personalizadas (sin frameworks de CSS)
- **Iconos:** lucide-vue-next
- **Despliegue:** Vercel (CI/CD automático desde GitHub)

## Estructura del proyecto
src/
├── components/ # Secciones reutilizables (About, Projects, Work, Education, Footer)
├── views/ # Vistas de ruta (Home, ProjectDetail)
├── stores/ # Estado global con Pinia (idioma, tema)
├── data/ # Datos de proyectos y experiencia laboral (tipados con TypeScript)
├── router/ # Configuración de Vue Router
└── assets/ # CSS global y variables de tema


## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Autor

**Alejandro López** — Frontend Developer (Vue.js) ampliando hacia Full Stack (Python/Django)
[LinkedIn](https://linkedin.com/in/alelopezv) · [GitHub](https://github.com/alelopezv)