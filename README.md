# Portfolio — Antonio Elias Sánchez Soto

Portfolio personal construido con **Astro**, inspirado en la estética minimalista de [aleksgornik.com](https://aleksgornik.com/) y alimentado por mi perfil de GitHub ([@sonoAESS](https://github.com/sonoAESS)).

Bilingüe (🇪🇸 `/` · 🇬🇧 `/en`), estático y ligero. Desplegado en **GitHub Pages**.

## Stack

- [Astro](https://astro.build) v7 — sitio 100% estático, cero JS por defecto
- CSS plano con design tokens (`src/styles/global.css`) — sin frameworks de estilos
- Fuente Inter self-hosted (`@fontsource-variable/inter`)
- i18n nativo de Astro (`es` por defecto, `en` en `/en`)
- Animaciones scroll-reveal con `IntersectionObserver` (respeta `prefers-reduced-motion`)

## Estructura

```
src/
├─ components/     # Nav, Hero, About, Projects, Skills, Contact, Footer, Icon
├─ data/
│  ├─ site.ts      # nombre, roles, ubicación, redes sociales
│  └─ projects.ts  # repositorios destacados y secundarios
├─ i18n/ui.ts      # diccionarios es/en de todos los textos
├─ layouts/        # BaseLayout (meta, nav, footer, scripts)
├─ pages/          # index.astro (ES) · en/index.astro (EN)
└─ styles/         # design tokens y estilos globales
public/images/     # avatar/retrato del hero
```

## Desarrollo local

Requiere Node ≥ 22 (usa [nvm](https://github.com/nvm-sh/nvm)):

```bash
nvm use
npm install
npm run dev        # http://localhost:4321/portfolio
```

Otros comandos:

```bash
npm run build      # genera ./dist para producción
npm run preview    # sirve el build localmente
npx astro check    # chequeo de tipos
```

## Despliegue en GitHub Pages

El sitio se despliega automáticamente con **GitHub Actions** (`.github/workflows/deploy.yml`) en cada push a `main`.

URL pública: **https://sonoaess.github.io/portfolio/**

### Configuración inicial (una sola vez)

1. Ve al repo en GitHub → **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.

A partir de ahí, cada `git push` construye y publica el sitio solo. También puedes relanzar el deploy manualmente desde la pestaña **Actions → Deploy to GitHub Pages → Run workflow**.

## Personalización

| Qué | Dónde |
| --- | --- |
| Foto del hero | reemplaza `public/images/avatar.png` |
| Nombre, roles, redes, ORCID | `src/data/site.ts` |
| Proyectos (descripciones, tags, stars) | `src/data/projects.ts` |
| Textos de la interfaz (ES/EN) | `src/i18n/ui.ts` |
| Colores, radios, tipografía | variables CSS al inicio de `src/styles/global.css` |

### Añadir botón "Descargar CV"

Coloca tu PDF en `public/cv.pdf` y añade este botón junto a los CTAs en `src/components/Hero.astro`:

```html
<a class="btn btn-ghost" href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
```
