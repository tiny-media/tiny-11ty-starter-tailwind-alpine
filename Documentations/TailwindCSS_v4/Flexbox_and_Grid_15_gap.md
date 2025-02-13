# Flexbox & Grid - gap

Utilities for controlling gutters between grid and flexbox items.

## Class and Styles

| Class                     | Styles                                     |
| ------------------------- | ------------------------------------------ |
| `gap-<number>`            | `gap: calc(var(--spacing) * <value>);`     |
| `gap-(<custom-property>)` | `gap: var(<custom-property>);`             |
| `gap-[<value>]`           | `gap: <value>;`                            |
| `gap-x-<number>`          | `column-gap: calc(var(--spacing) * <value>);` |
| `gap-x-(<custom-property>)`| `column-gap: var(<custom-property>);`         |
| `gap-x-[<value>]`         | `column-gap: <value>;`                        |
| `gap-y-<number>`          | `row-gap: calc(var(--spacing) * <value>);`    |
| `gap-y-(<custom-property>)`| `row-gap: var(<custom-property>);`            |
| `gap-y-[<value>]`         | `row-gap: <value>;`                           |

## Examples ([Examples](https://tailwindcss.com/docs/gap#examples))

### Basic example ([Basic example](https://tailwindcss.com/docs/gap#basic-example))

Use `gap-<number>` utilities like `gap-2` and `gap-4` to change the gap between both rows and columns in grid and flexbox layouts:

```html
<div class="grid grid-cols-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

This code will render a 2-column grid with a gap of 4 units between items.

### Changing row and column gaps independently ([Changing row and column gaps independently](https://tailwindcss.com/docs/gap#changing-row-and-column-gaps-independently))

Use `gap-x-<number>` and `gap-y-<number>` utilities like `gap-x-8` and `gap-y-4` to change the gap between columns and rows independently:

```html
<div class="grid grid-cols-3 gap-x-8 gap-y-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

This example creates a 3-column grid where the column gap (`gap-x-8`) is larger than the row gap (`gap-y-4`).

### Using a custom value ([Using a custom value](https://tailwindcss.com/docs/gap#using-a-custom-value))

Use utilities like `gap-[<value>]`, `gap-x-[<value>]`, and `gap-y-[<value>]` to set the gap based on a completely custom value:

```html
<div class="gap-[10vw] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `gap-(<custom-property>)` syntax:

```html
<div class="gap-(--my-gap) ...">
  <!-- ... -->
</div>
```

This is a shorthand for `gap-[var(<custom-property>)]` that automatically adds the `var()` function.

### Responsive design ([Responsive design](https://tailwindcss.com/docs/gap#responsive-design))

Prefix `gap`, `column-gap`, and `row-gap` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="grid gap-4 md:gap-6 ...">
  <!-- ... -->
</div>
```

In this case, the grid will have a `gap-4` on small screens and `gap-6` on medium screens and above.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).