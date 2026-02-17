# @oglofus/tailwind-viewport-animations [![NPM Version](https://img.shields.io/npm/v/%40oglofus%2Ftailwind-viewport-animations)](https://www.npmjs.com/package/@oglofus/tailwind-viewport-animations) [![Publish Package to NPM](https://github.com/oglofus/tailwind-viewport-animations/actions/workflows/release-package.yml/badge.svg)](https://github.com/oglofus/tailwind-viewport-animations/actions/workflows/release-package.yml)

Viewport animation utilities for Tailwind CSS v4.

## Install

```bash
npm install @oglofus/tailwind-viewport-animations
```

## Tailwind v4 usage (plugin)

In your main stylesheet:

```css
@import "tailwindcss";
@plugin "@oglofus/tailwind-viewport-animations";
```

Then use classes in your markup:

```html
<section class="va va-slide-up va-start-15 va-end-75">...</section>
```

## Included utilities

- `va`
- `va-start-{number}` -> number is treated as `%` (`va-start-23` => `23%`)
- `va-end-{number}` -> number is treated as `%` (`va-end-23` => `23%`)
- `va-start-[...]` arbitrary value (`va-start-[80%]`, `va-start-[12rem]`)
- `va-end-[...]` arbitrary value (`va-end-[20px]`, `va-end-[var(--my-range)]`)
- `va-fade`
- `va-zoom`
- `va-slide-left`
- `va-slide-right`
- `va-slide-up`
- `va-slide-down`
- `va-blur-in`
- `va-rotate-in`
- `va-pop`
- `va-reveal-up`
- `va-flip-y`
- `va-duration-{number}` -> milliseconds (`va-duration-800` => `800ms`)
- `va-duration-[...]` arbitrary duration (`va-duration-[1.4s]`)
- `va-distance-{number}` -> pixels (`va-distance-120` => `120px`)
- `va-distance-[...]` arbitrary distance (`va-distance-[20vh]`)
- `va-ease-linear`
- `va-ease-in`
- `va-ease-out`
- `va-ease-in-out`
- `va-ease-smooth`
- `va-ease-snap`
- `va-ease-[...]` arbitrary easing (`va-ease-[cubic-bezier(0.17,0.67,0.83,0.67)]`)
- `va-once`
- `va-repeat`

## Example combos

```html
<div
  class="va va-reveal-up va-start-[80%] va-end-[20px] va-distance-160 va-duration-700 va-ease-smooth"
></div>
<div
  class="va va-flip-y va-start-23 va-end-65 va-duration-[1.2s] va-ease-[cubic-bezier(0.2,0.9,0.2,1)]"
></div>
```

## Browser support note

These utilities rely on `animation-timeline: view()` / scroll-driven animations. Ensure target browsers support this API.

Compatibility reference: https://caniuse.com/?search=animation-timeline

## Used by

- https://deskify.app
- https://oglofus.com
- https://uploft.app
