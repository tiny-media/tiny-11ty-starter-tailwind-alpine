# Flexbox & Grid

## grid-template-columns

Utilities for specifying the columns in a grid layout.

| Class                     | Styles                                         |
| ------------------------- | ---------------------------------------------- |
| `grid-cols-<number>`      | `grid-template-columns: repeat(<number>, minmax(0, 1fr));` |
| `grid-cols-none`          | `grid-template-columns: none;`                 |
| `grid-cols-subgrid`       | `grid-template-columns: subgrid;`              |
| `grid-cols-[<value>]`     | `grid-template-columns: <value>;`              |
| `grid-cols-(<custom-property>)` | `grid-template-columns: var(<custom-property>);` |

## Examples

For more detailed examples, refer to the [official Tailwind CSS documentation](https://tailwindcss.com/docs/grid-template-columns#examples).

### Specifying the grid columns

Use `grid-cols-<number>` utilities like `grid-cols-2` and `grid-cols-4` to create grids with _n_ equally sized columns.

**Example:**

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
</div>
```

This code snippet creates a grid with 4 columns using `grid-cols-4`. The `gap-4` class adds spacing between the grid items.

### Implementing a subgrid

Use the `grid-cols-subgrid` utility to adopt the column tracks defined by the item's parent.

**Example:**

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div class="col-start-2">06</div>
  </div>
</div>
```

In this example, the nested grid (`<div class="col-span-3 grid grid-cols-subgrid ...">`) uses `grid-cols-subgrid` to inherit the column definitions from its parent grid, which has 4 columns. `col-span-3` makes the nested grid span 3 columns of the parent grid. `col-start-2` within the nested grid positions the "06" element starting from the second column of the subgrid (which aligns with the second column of the parent grid in this context).

### Using a custom value

Use the `grid-cols-[<value>]` syntax to set the columns based on a completely custom value.

**Example:**

```html
<div class="grid-cols-[200px_minmax(900px,_1fr)_100px] ...">
  <!-- ... -->
</div>
```

This example demonstrates setting custom column widths using the `grid-cols-[...]` syntax. It defines three columns with widths: `200px`, `minmax(900px, 1fr)` (minimum 900px, maximum 1 fraction of the available space), and `100px`.

For CSS variables, you can use the `grid-cols-(<custom-property>)` syntax, which is a shorthand for `grid-cols-[var(<custom-property>)]`.

**Example with CSS Variable:**

```html
<div class="grid-cols-(--my-grid-cols) ...">
  <!-- ... -->
</div>
```

This is equivalent to:

```html
<div class="grid-cols-[var(--my-grid-cols)] ...">
  <!-- ... -->
</div>
```

Make sure to define the CSS variable `--my-grid-cols` elsewhere in your CSS to specify the desired `grid-template-columns` value.

### Responsive design

Prefix a `grid-template-columns` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above.

**Example:**

```html
<div class="grid grid-cols-1 md:grid-cols-6 ...">
  <!-- ... -->
</div>
```

In this responsive example, the grid will have 1 column by default (`grid-cols-1`) on smaller screens. On medium screens and above (due to the `md:` prefix), it will switch to a 6-column layout (`md:grid-cols-6`).

Refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) for more information on responsive design and other variants in Tailwind CSS.