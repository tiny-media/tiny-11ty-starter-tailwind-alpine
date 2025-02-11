# Filters

## filter: drop-shadow()

Utilities for applying drop-shadow filters to an element.

### Classes

| Class                     | Styles                                                                     |
| ------------------------- | -------------------------------------------------------------------------- |
| `drop-shadow-xs`          | `filter: drop-shadow(var(--drop-shadow-xs)); /* 0 1px 1px rgb(0 0 0 / 0.05) */` |
| `drop-shadow-sm`          | `filter: drop-shadow(var(--drop-shadow-sm)); /* 0 1px 2px rgb(0 0 0 / 0.15) */` |
| `drop-shadow-md`          | `filter: drop-shadow(var(--drop-shadow-md)); /* 0 3px 3px rgb(0 0 0 / 0.12) */` |
| `drop-shadow-lg`          | `filter: drop-shadow(var(--drop-shadow-lg)); /* 0 4px 4px rgb(0 0 0 / 0.15) */` |
| `drop-shadow-xl`          | `filter: drop-shadow(var(--drop-shadow-xl); /* 0 9px 7px rgb(0 0 0 / 0.1) */`  |
| `drop-shadow-2xl`         | `filter: drop-shadow(var(--drop-shadow-2xl)); /* 0 25px 25px rgb(0 0 0 / 0.15) */` |
| `drop-shadow-none`        | `filter: drop-shadow(0 0 #0000);`                                         |
| `drop-shadow-(<custom-property>)` | `filter: drop-shadow(var(<custom-property>));`                         |
| `drop-shadow-[<value>]`   | `filter: drop-shadow(<value>);`                                          |

## Examples

[Examples](https://tailwindcss.com/docs/filter-drop-shadow#examples)

### Basic example

[Basic example](https://tailwindcss.com/docs/filter-drop-shadow#basic-example)

Use utilities like `drop-shadow-sm` and `drop-shadow-xl` to add a drop shadow to an element:

`drop-shadow-md`

`drop-shadow-lg`

`drop-shadow-xl`

```html
<svg class="drop-shadow-md ...">  <!-- ... --></svg><svg class="drop-shadow-lg ...">  <!-- ... --></svg><svg class="drop-shadow-xl ...">  <!-- ... --></svg>
```

This is useful for applying shadows to irregular shapes, like text and SVG elements. For applying shadows to regular elements, you probably want to use [box shadow](https://tailwindcss.com/docs/box-shadow) instead.

### Using a custom value

[Using a custom value](https://tailwindcss.com/docs/filter-drop-shadow#using-a-custom-value)

Use the `drop-shadow-[<value>]` syntax to set the drop shadow based on a completely custom value:

```html
<svg class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ...">  <!-- ... --></svg>
```

For CSS variables, you can also use the `drop-shadow-(<custom-property>)` syntax:

```html
<svg class="drop-shadow-(--my-drop-shadow) ...">  <!-- ... --></svg>
```

This is just a shorthand for `drop-shadow-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

[Responsive design](https://tailwindcss.com/docs/filter-drop-shadow#responsive-design)

Prefix a `filter: drop-shadow()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<svg class="drop-shadow-md md:drop-shadow-xl ...">  <!-- ... --></svg>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## Customizing your theme

[Customizing your theme](https://tailwindcss.com/docs/filter-drop-shadow#customizing-your-theme)

Use the `--drop-shadow-*` theme variables to customize the drop shadow utilities in your project:

```css
@theme {  --drop-shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25); }
```

Now the `drop-shadow-3xl` utility can be used in your markup:

```html
<svg class="drop-shadow-3xl">  <!-- ... --></svg>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).
