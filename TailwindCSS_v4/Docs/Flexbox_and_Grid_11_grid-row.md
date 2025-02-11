# Flexbox & Grid

## grid-row

Utilities for controlling how elements are sized and placed across grid rows.

| Class                     | Styles                                                                 |
| ------------------------- | ---------------------------------------------------------------------- |
| `row-span-<number>`       | `grid-row: span <number> / span <number>;`                             |
| `row-span-full`           | `grid-row: 1 / -1;`                                                    |
| `row-span-(<custom-property>)` | `grid-row: span var(<custom-property>) / span var(<custom-property>);` |
| `row-span-[<value>]`      | `grid-row: span <value> / span <value>;`                               |
| `row-start-<number>`      | `grid-row-start: <number>;`                                            |
| `-row-start-<number>`     | `grid-row-start: calc(<number> * -1);`                                 |
| `row-start-auto`          | `grid-row-start: auto;`                                                |
| `row-start-(<custom-property>)` | `grid-row-start: var(<custom-property>);`                            |
| `row-start-[<value>]`     | `grid-row-start: <value>;`                                              |
| `row-end-<number>`        | `grid-row-end: <number>;`                                              |
| `-row-end-<number>`       | `grid-row-end: calc(<number> * -1);`                                   |
| `row-end-auto`            | `grid-row-end: auto;`                                                  |
| `row-end-(<custom-property>)`   | `grid-row-end: var(<custom-property>);`                              |
| `row-end-[<value>]`       | `grid-row-end: <value>;`                                                |
| `row-auto`                | `grid-row: auto;`                                                      |
| `row-(<custom-property>)`   | `grid-row: var(<custom-property>);`                                     |
| `row-[<value>]`          | `grid-row: <value>;`                                                    |

## Examples ([https://tailwindcss.com/docs/grid-row#examples](https://tailwindcss.com/docs/grid-row#examples))

### Spanning rows ([https://tailwindcss.com/docs/grid-row#spanning-rows](https://tailwindcss.com/docs/grid-row#spanning-rows))

Use `row-span-<number>` utilities like `row-span-2` and `row-span-4` to make an element span _n_ rows:

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="col-span-2 row-span-2 ...">03</div>
</div>
```

This code will render a grid layout where:

*   The first div (`01`) spans 3 rows.
*   The second div (`02`) spans 2 columns.
*   The third div (`03`) spans 2 columns and 2 rows.

Visually, it would look something like this (assuming `...` represents styling):

```
+----+----+----+
| 01 | 02     |
|    |        |
|    +----+----+
|    | 03     |
+----+--------+
```

### Starting and ending lines ([https://tailwindcss.com/docs/grid-row#starting-and-ending-lines](https://tailwindcss.com/docs/grid-row#starting-and-ending-lines))

Use `row-start-<number>` and `row-end-<number>` utilities like `row-start-2` and `row-end-3` to make an element start or end at the _nth_ grid line:

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-2 row-start-2 ...">01</div>
  <div class="row-span-2 row-end-3 ...">02</div>
  <div class="row-start-1 row-end-4 ...">03</div>
</div>
```

In this example:

*   The first div (`01`) spans 2 rows and starts at row line 2.
*   The second div (`02`) spans 2 rows and ends at row line 3.
*   The third div (`03`) starts at row line 1 and ends at row line 4, effectively spanning all 3 rows in this grid.

Visually:

```
+----+----+----+
|    |    | 03 |
+----+----+----+
| 01 | 02 | 03 |
|    |    |    |
+----+----+----+
|    |    | 03 |
+----+----+----+
```

These can also be combined with the `row-span-<number>` utilities to span a specific number of rows.

### Using a custom value ([https://tailwindcss.com/docs/grid-row#using-a-custom-value](https://tailwindcss.com/docs/grid-row#using-a-custom-value))

Use utilities like `row-[<value>]`,`row-span-[<value>]`,`row-start-[<value>]`, and `row-end-[<value>]` to set the grid row size and location based on a completely custom value:

```html
<div class="row-[span_16_/_span_16] ...">
  <!-- ... -->
</div>
```

This example sets the `grid-row` property to `span 16 / span 16`.  This is likely intended for very specific or unusual grid layouts.

For CSS variables, you can also use the `row-(<custom-property>)` syntax:

```html
<div class="row-(--my-rows) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `row-[var(<custom-property>)]` that adds the `var()` function for you automatically.  Make sure you have defined the CSS variable `--my-rows` elsewhere in your CSS.

### Responsive design ([https://tailwindcss.com/docs/grid-row#responsive-design](https://tailwindcss.com/docs/grid-row#responsive-design))

Prefix `grid-row`,`grid-row-start`, and `grid-row-end` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="row-span-3 md:row-span-4 ...">
  <!-- ... -->
</div>
```

In this case, `row-span-3` will be applied for all screen sizes by default, but on medium screens (`md:`) and larger, `row-span-4` will override it.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).