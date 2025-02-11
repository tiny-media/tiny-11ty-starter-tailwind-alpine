# Tailwind CSS - Functions and Directives

## Core concepts

A reference for the custom functions and directives Tailwind exposes to your CSS.

## Directives

Directives are custom Tailwind-specific [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) you can use in your CSS that offer special functionality for Tailwind CSS projects.

### @import

Use the `@import` directive to inline import CSS files, including Tailwind itself:

```css
@import "tailwindcss";
```

### @theme

Use the `@theme` directive to define your project's custom design tokens, like fonts, colors, and breakpoints:

```css
@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  /* ... */
}
```

Learn more about customizing your theme in the [theme variables documentation](https://tailwindcss.com/docs/theme).

### @source

Use the `@source` directive to explicitly specify source files that aren't picked up by Tailwind's automatic content detection:

```css
@source "../node_modules/@my-company/ui-lib";
```

Learn more about automatic content detection in the [detecting classes in source files documentation](https://tailwindcss.com/docs/detecting-classes-in-source-files).

### @utility

Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg`:

```css
@utility tab-4 {
  tab-size: 4;
}
```

Learn more about registering custom utilities in the [adding custom utilities documentation](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities).

### @variant

Use the `@variant` directive to apply a Tailwind variant to styles in your CSS:

```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
}
```

If you need to apply multiple variants at the same time, use nesting:

```css
.my-element {
  background: white;
  @variant dark {
    @variant hover {
      background: black;
    }
  }
}
```

Learn more about variants in the [hover, focus, and other states documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### @custom-variant

Use the `@custom-variant` directive to add a custom variant in your project:

```css
@custom-variant pointer-coarse (@media (pointer: coarse));
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

This lets you write utilities like `pointer-coarse:size-48` and `theme-midnight:bg-slate-900`.

Learn more about adding custom variants in the [registering a custom variant documentation](https://tailwindcss.com/docs/hover-focus-and-other-states#registering-a-custom-variant).

### @apply

Use the `@apply` directive to inline any existing utility classes into your own custom CSS:

```css
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}
.select2-search {
  @apply rounded border border-gray-300;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

This is useful when you need to write custom CSS (like to override the styles in a third-party library) but still want to work with your design tokens and use the same syntax you’re used to using in your HTML.

### @reference

If you want to use `@apply` or `@variant` in the `<style>` block of a Vue or Svelte component, or within CSS modules, you will need to import your theme variables, custom utilities, and custom variants to make those values available in that context.

To do this without duplicating any CSS in your output, use the `@reference` directive to import your main stylesheet for reference without actually including the styles:

**Vue**

```vue
<template>
  <h1>Hello world!</h1>
</template>

<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

If you’re just using the default theme with no customizations, you can import `tailwindcss` directly:

**Vue**

```vue
<template>
  <h1>Hello world!</h1>
</template>

<style>
  @reference "tailwindcss";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

## Functions

Tailwind provides the following build-time functions to make working with colors and the spacing scale easier.

### \--alpha()

Use the `--alpha()` function to adjust the opacity of a color:

**Input CSS**

```css
.my-element {
  color: --alpha(var(--color-lime-300) / 50%);
}
```

**Compiled CSS**

```css
.my-element {
  color: color-mix(in oklab, var(--color-lime-300) 50%, transparent);
}
```

### \--spacing()

Use the `--spacing()` function to generate a spacing value based on your theme:

**Input CSS**

```css
.my-element {
  margin: --spacing(4);
}
```

**Compiled CSS**

```css
.my-element {
  margin: calc(var(--spacing) * 4);
}
```

This can also be useful in arbitrary values, especially in combination with `calc()`:

**HTML**

```html
<div class="py-[calc(--spacing(4)-1px)]">
  <!-- ... -->
</div>
```

## Compatibility

The following directives and functions exist solely for compatibility with Tailwind CSS v3.x.

### @config

Use the `@config` directive to load a legacy JavaScript-based configuration file:

```css
@config "../../tailwind.config.js";
```

The `corePlugins`, `safelist` and `separator` options from the JavaScript-based config are not supported in v4.0.

### @plugin

Use the `@plugin` directive to load a legacy JavaScript-based plugin:

```css
@plugin "@tailwindcss/typography";
```

The `@plugin` directive accepts either a package name or a local path.

### theme()

Use the `theme()` function to access your Tailwind theme values using dot notation:

```css
.my-element {
  margin: theme(spacing.12);
}
```

This function is deprecated, and we recommend [using CSS theme variables](https://tailwindcss.com/docs/theme#using-your-theme-variables) instead.
