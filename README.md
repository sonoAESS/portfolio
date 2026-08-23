# Portfolio — Antonio Elias Sánchez Soto

Portfolio personal construido con **Astro**, inspirado en la estética minimalista de [aleksgornik.com](https://aleksgornik.com/) y alimentado por mi perfil de GitHub ([@sonoAESS](https://github.com/sonoAESS)).

Bilingüe (🇪🇸 `/` · 🇬🇧 `/en`), estático y ligero. Listo para desplegar en **Vercel**.

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
npm run dev        # http://localhost:4321
```

Otros comandos:

```bash
npm run build      # genera ./dist para producción
npm run preview    # sirve el build localmente
npx astro check    # chequeo de tipos
```

## Despliegue en Vercel

1. Sube este repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta **Astro** automáticamente (build: `astro build`, output: `dist`). No requiere configuración extra.
4. Deploy. Cada push a `main` generará un nuevo despliegue.

Opcional: cuando tengas dominio propio, añade `site: 'https://tudominio.com'` en `astro.config.mjs`.

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
