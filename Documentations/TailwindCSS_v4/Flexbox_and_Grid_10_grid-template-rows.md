# grid-template-rows

Utilities for specifying the rows in a grid layout.

## Class Table

| Class                     | Styles                                         |
| ------------------------- | ---------------------------------------------- |
| `grid-rows-<number>`      | `grid-template-rows: repeat(<number>, minmax(0, 1fr));` |
| `grid-rows-none`          | `grid-template-rows: none;`                     |
| `grid-rows-subgrid`       | `grid-template-rows: subgrid;`                  |
| `grid-rows-[<value>]`     | `grid-template-rows: <value>;`                  |
| `grid-rows-(<custom-property>)` | `grid-template-rows: var(<custom-property>);`     |

## Examples

For more examples and detailed explanations, refer to the [official Tailwind CSS documentation for grid-template-rows](https://tailwindcss.com/docs/grid-template-rows#examples).

### Specifying the grid rows

Use `grid-rows-<number>` utilities like `grid-rows-2` and `grid-rows-4` to create grids with _n_ equally sized rows:

**Example:**

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
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

This code will create a grid with 4 rows where the height of each row is automatically determined to equally distribute the available space, due to `grid-rows-4` and the implicit column flow.

### Implementing a subgrid

Use the `grid-rows-subgrid` utility to adopt the row tracks defined by the item's parent:

**Example:**

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>
```

In this example, the div containing "06" to "06" uses `grid-rows-subgrid`. This makes it a subgrid, inheriting the row definitions from its parent grid. Combined with `row-span-3` and `row-start-2`, it positions "06" within the parent grid's row structure.

### Using a custom value

Use the `grid-rows-[<value>]` syntax to set the rows based on a completely custom value:

**Example:**

```html
<div class="grid-rows-[200px_minmax(900px,1fr)_100px] ...">
  <!-- Content here -->
</div>
```

This will set the `grid-template-rows` property to `200px minmax(900px,1fr) 100px`, creating three rows with the specified heights.

For CSS variables, you can also use the `grid-rows-(<custom-property>)` syntax:

**Example:**

```html
<div class="grid-rows-(--my-grid-rows) ...">
  <!-- Content here -->
</div>
```

Assuming `--my-grid-rows` is defined as a CSS variable, this will set `grid-template-rows` to the value of that variable. This is a shorthand for `grid-rows-[var(--my-grid-rows)]`.

### Responsive design

Prefix a `grid-template-rows` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Example:**

```html
<div class="grid grid-rows-2 md:grid-rows-6 ...">
  <!-- Content here -->
</div>
```

In this responsive example, the grid will have 2 rows on small screens (default) and 6 rows on medium screens and above, due to the `md:grid-rows-6` class.

For more information on responsive design and variants, see the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).