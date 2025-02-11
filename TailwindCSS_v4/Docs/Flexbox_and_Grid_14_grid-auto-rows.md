# Flexbox & Grid

## grid-auto-rows

Utilities for controlling the size of implicitly-created grid rows.

| Class                     | Styles                                  |
| ------------------------- | --------------------------------------- |
| `auto-rows-auto`          | `grid-auto-rows: auto;`                 |
| `auto-rows-min`           | `grid-auto-rows: min-content;`          |
| `auto-rows-max`           | `grid-auto-rows: max-content;`          |
| `auto-rows-fr`            | `grid-auto-rows: minmax(0, 1fr);`       |
| `auto-rows-(<custom-property>)` | `grid-auto-rows: var(<custom-property>);` |
| `auto-rows-[<value>]`     | `grid-auto-rows: <value>;`            |

## Examples

### Basic example
[Link to Basic example](https://tailwindcss.com/docs/grid-auto-rows#basic-example)

Use utilities like `auto-rows-min` and `auto-rows-max` to control the size of implicitly-created grid rows:

```html
<div class="grid grid-flow-row auto-rows-max">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using a custom value
[Link to Using a custom value](https://tailwindcss.com/docs/grid-auto-rows#using-a-custom-value)

Use the `auto-rows-[<value>]` syntax to set the size of implicitly-created grid rows based on a completely custom value:

```html
<div class="auto-rows-[minmax(0,2fr)] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `auto-rows-(<custom-property>)` syntax:

```html
<div class="auto-rows-(--my-auto-rows) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `auto-rows-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design
[Link to Responsive design](https://tailwindcss.com/docs/grid-auto-rows#responsive-design)

Prefix a `grid-auto-rows` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
[Link to variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states)