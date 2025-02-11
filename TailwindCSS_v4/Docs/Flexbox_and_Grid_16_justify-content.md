# Flexbox & Grid

## justify-content

Utilities for controlling how flex and grid items are positioned along a container's main axis.

This section provides a quick reference for Tailwind CSS utility classes related to the `justify-content` property in Flexbox and Grid layouts. Use these classes to control the alignment of items along the main axis of a flex or grid container.

| Class             | Styles                       |
| ----------------- | ---------------------------- |
| `justify-start`   | `justify-content: flex-start;` |
| `justify-end`     | `justify-content: flex-end;`   |
| `justify-center`  | `justify-content: center;`    |
| `justify-between` | `justify-content: space-between;` |
| `justify-around`  | `justify-content: space-around;`  |
| `justify-evenly`  | `justify-content: space-evenly;` |
| `justify-stretch` | `justify-content: stretch;`   |
| `justify-baseline`| `justify-content: baseline;`  |
| `justify-normal`  | `justify-content: normal;`    |

## Examples

For more detailed examples and visual representations, refer to the [Tailwind CSS documentation on justify-content](https://tailwindcss.com/docs/justify-content#examples).

### Start ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#start))

Use `justify-start` to justify items against the start of the container's main axis.

**Example:** Items aligned to the start.

```html
<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#center))

Use `justify-center` to justify items along the center of the container's main axis.

**Example:** Items aligned to the center.

```html
<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#end))

Use `justify-end` to justify items against the end of the container's main axis.

**Example:** Items aligned to the end.

```html
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space between ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#space-between))

Use `justify-between` to justify items along the container's main axis such that there is an equal amount of space between each item.

**Example:** Items distributed with space between them.

```html
<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space around ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#space-around))

Use `justify-around` to justify items along the container's main axis such that there is an equal amount of space on each side of each item.

**Example:** Items distributed with space around them.

```html
<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space evenly ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#space-evenly))

Use `justify-evenly` to justify items along the container's main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`.

**Example:** Items distributed with space evenly around them.

```html
<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Stretch ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#stretch))

Use `justify-stretch` to allow content items to fill the available space along the container's main axis. This works when the items have `auto` as their main size.

**Example:** Items stretched to fill the container.

```html
<div class="flex justify-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Normal ([Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#normal))

Use `justify-normal` to pack content items in their default position as if no `justify-content` value was set. This is the initial value.

**Example:** Items in their normal, default position.

```html
<div class="flex justify-normal ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Responsive Design ([Responsive Design in Tailwind CSS Docs](https://tailwindcss.com/docs/justify-content#responsive-design))

Tailwind CSS's responsive modifiers allow you to apply `justify-content` utilities conditionally at different breakpoints. For example, use `md:justify-between` to apply `justify-between` only on medium screens and above.

**Example:** Applying `justify-between` at medium screen sizes and above.

```html
<div class="flex justify-start md:justify-between ...">
  <!-- ... -->
</div>
```

For more details on responsive variants and how to customize breakpoints, refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).