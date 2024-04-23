# Teoría Design System

### ¿Qué es un Design System?

Un DS es una colección de elementos de UI reutilizables que la gente de producto utiliza y crea para dar lugar a experiencias de usuario consistentes en productos digitales.

Un DS mantiene consistencia entre lo visual y el lenguaje de la aplicación actuando como “single source of truth” para los equipos de producto, diseñadores y desarrolladores.

Estos contienen:

- Componentes de UI
- Code components & code snippets
- Guías de estilo (tipografía, paletas de color, etc)
- Documentación, artículos, principios de diseño, etc

Es más que crear componentes, se debe pensar en la filosofía de la empresa, se debe conocer las diferentes verticales del negocio ya que actuar como single point of thruth los devs y la gente de producto debe confiar plenamente en el DS

### ¿Como son utilizados los DS?

Imaginemos que queremos hacer algo tan “trivial” como desarrollar un dropdown o un input

Enseguida caemos en las típicas preguntas:

- ¿Cómo debería verse?
- ¿Qué paleta de colores necesito?
- ¿Como están distribuidos / espaciados los componentes?
- ¿Cómo se abre el componente?
- ¿Tiene transiciones?
- ¿Qué iconos o tipografías necesitamos?
- ¿Cómo se renderia al inicio?

Estas preguntas son importantisimas y necesitan estar respaldadas por un equipo de UX Ops

### ¿Necesitas un DS?

Crear y mantener un DS lleva mucho trabajo. Algunos DS son chicos y simples de mantener, algunos son gigantes y necesitan su propio equipo. La respuesta a la pregunta: ¿Necesito un Design system? Surge de la necesidad de evitar la deuda de diseño (acumulación de inconsistencias, imperfecciones, malas experiencias de usuario, etc)

Asi como los devs tenemos deuda técnica, los diseñadora tienen deuda de diseño y pasa en cualquier producto. Es un efecto secundario del desarrollo.

Pros:

- Diseño y desarrollo del producto más rápido
- Ahorro de tiempo (a largo plazo)
- Consistencia
- Unificación de la experiencia del usuario
- Desarrollo multidisciplinario
- Disminuye la carga hacia los devs que consumen el DS

Cons:

- tiempo de mantenimiento
- disminuye la creatividad
- menor exploración y research por parte de los equipos de UX/UI
- Tiempo de aprendizaje (de como usarlo)

### Tomando señales de la materia

Atomic design es una metodología compuesta por 5 etapas diferentes trabajando en conjunto para crear interfaces solidas de forma jerarquica.

- Atomos
- Moleculas
- Organismos
- Templates
- Páginas

Este diseño no es un proceso lineal pero es un modelo mental que nos ayudará a pensar la UI de forma cohesiva y como un conjunto de partes.

## Instalaciones

```
yarn add -D @types/node vite-plugin-dts
```

## Configuración de eslint

```
npm init @eslint/config
yarn add -D eslint-plugin-simple-import-sort
yarn add -D prettier
```

.prettierrc
```
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}

```
.eslintrc.cjs

```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "simple-import-sort"
    ],
    "ignorePatterns": ["node_modules", "dist", "vite.config.ts", ".eslintrc.cjs"],
    "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    }
}

```

## Como configuro storybook

```
npx storybook@latest init
```

## React testing library

https://testing-library.com/docs/

```
  yarn add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```