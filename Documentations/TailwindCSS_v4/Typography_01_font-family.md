
# Typography: Font Family in Tailwind CSS

This document describes Tailwind CSS utilities for controlling font families.

## Overview

Tailwind provides a set of utility classes for quickly applying different font families to HTML elements.  These utilities leverage CSS variables for easy customization.

## Core Utilities

| Class                     | Styles                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `font-sans`               | `font-family: var(--font-sans); /* ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' */`                                        |
| `font-serif`              | `font-family: var(--font-serif); /* ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif */`                                                                                                |
| `font-mono`               | `font-family: var(--font-mono); /* ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace */`                                                          |
| `font-(family-name:<custom-property>)` | `font-family: var(<custom-property>);`                                                                                                                                                  |
| `font-[<value>]`          | `font-family: <value>;`                                                                                                                                                                           |

## Examples

### Basic Example

Apply predefined font families:

```html
<p class="font-sans">The quick brown fox jumps over the lazy dog.</p>
<p class="font-serif">The quick brown fox jumps over the lazy dog.</p>
<p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
```

**Rendered Output (Illustrative):**

*   **font-sans:**  The quick brown fox jumps over the lazy dog. (Sans-serif font)
*   **font-serif:** The quick brown fox jumps over the lazy dog. (Serif font)
*   **font-mono:**  The quick brown fox jumps over the lazy dog. (Monospace font)

### Using Custom Values

Apply a specific font family using the arbitrary value syntax:

```html
<p class="font-[Open_Sans]">  <!-- ... --></p>
```

Apply a font family defined by a CSS variable:

```html
<p class="font-(--my-font)">  <!-- ... --></p>
```

This is equivalent to `font-[var(--my-font)]`.  The `var()` function is automatically added.

### Responsive Design

Use breakpoint prefixes (variants) to apply font families conditionally based on screen size:

```html
<p class="font-sans md:font-serif">  <!-- ... --></p>
```

This applies `font-sans` by default and `font-serif` on medium (`md`) screens and larger.  Refer to the [Tailwind Variants Documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) for more details on responsive design and other state variants.

## Customizing Your Theme

### Using Theme Variables

Customize font families using CSS variables within the `@theme` directive:

```css
@theme {
  --font-display: "Oswald", "sans-serif";
}
```

Now you can use `font-display` in your HTML:

```html
<div class="font-display">  <!-- ... --></div>
```

###  Font Feature and Variation Settings

You can also define default `font-feature-settings` and `font-variation-settings` for a font family:

```css
@theme {
  --font-display: "Oswald", "sans-serif";
  --font-display--font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  --font-display--font-variation-settings: "opsz" 32;
}
```

### Loading Custom Fonts with `@font-face`

Use the `@font-face` rule to load custom fonts:

```css
@font-face {
  font-family: Oswald;
  font-style: normal;
  font-weight: 200 700;
  font-display: swap;
  src: url("/fonts/Oswald.woff2") format("woff2");
}
```

### Importing Fonts from Services (e.g., Google Fonts)

When importing fonts from services like Google Fonts, place the `@import` statement at the *very top* of your CSS file, *before* `@import "tailwindcss";`:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

@import "tailwindcss";

@theme {
  --font-roboto: "Roboto", sans-serif;
}
```

**Important:** Browsers require `@import` rules to precede other rules.  Therefore, URL imports must come before the Tailwind import.

For more comprehensive theme customization, see the [Tailwind Theme Documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).
