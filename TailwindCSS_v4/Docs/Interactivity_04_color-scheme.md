# Interactivity

## color-scheme

Utilities for controlling the color scheme of an element.

**Class** | **Styles**
------- | --------
`scheme-normal` | `color-scheme: normal;`
`scheme-dark` | `color-scheme: dark;`
`scheme-light` | `color-scheme: light;`
`scheme-light-dark` | `color-scheme: light dark;`
`scheme-only-dark` | `color-scheme: only dark;`
`scheme-only-light` | `color-scheme: only light;`

## Examples ([Link to Examples](https://tailwindcss.com/docs/color-scheme#examples))

### Basic example ([Link to Basic Example](https://tailwindcss.com/docs/color-scheme#basic-example))

Use utilities like `scheme-light` and `scheme-light-dark` to control how element should be rendered:

Try switching your system color scheme to see the difference

scheme-light

scheme-dark

scheme-light-dark

```html
<div class="scheme-light ...">  <input type="date" /></div>
<div class="scheme-dark ...">  <input type="date" /></div>
<div class="scheme-light-dark ...">  <input type="date" /></div>
```

### Applying in dark mode ([Link to Applying in dark mode](https://tailwindcss.com/docs/color-scheme#applying-in-dark-mode))

Prefix a `color-scheme` utility with a variant like `dark:*` to only apply the utility in that state:

```html
<html class="scheme-light dark:scheme-dark ...">
  <!-- ... -->
</html>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
