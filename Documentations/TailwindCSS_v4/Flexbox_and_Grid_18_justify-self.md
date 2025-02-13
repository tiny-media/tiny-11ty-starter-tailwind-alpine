# Flexbox & Grid

## justify-self

Utilities for controlling how an individual grid item is aligned along its inline axis.

| Class             | Styles                  |
|-------------------|-------------------------|
| `justify-self-auto`  | `justify-self: auto;`   |
| `justify-self-start` | `justify-self: start;`  |
| `justify-self-end`   | `justify-self: end;`    |
| `justify-self-center`| `justify-self: center;` |
| `justify-self-stretch`| `justify-self: stretch;`|

## Examples

### [Auto](https://tailwindcss.com/docs/justify-self#auto)

Use `justify-self-auto` to align an item based on the value of the grid's `justify-items` property:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-auto ...">02</div>
  <!-- ... -->
</div>
```

### [Start](https://tailwindcss.com/docs/justify-self#start)

Use `justify-self-start` to align a grid item to the start of its inline axis:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
</div>
```

### [Center](https://tailwindcss.com/docs/justify-self#center)

Use `justify-self-center` to align a grid item along the center of its inline axis:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

### [End](https://tailwindcss.com/docs/justify-self#end)

Use `justify-self-end` to align a grid item to the end of its inline axis:

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-end ...">02</div>
  <!-- ... -->
</div>
```

### [Stretch](https://tailwindcss.com/docs/justify-self#stretch)

Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

```html
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
</div>
```

### [Responsive design](https://tailwindcss.com/docs/justify-self#responsive-design)

Prefix a `justify-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="justify-self-start md:justify-self-end ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).