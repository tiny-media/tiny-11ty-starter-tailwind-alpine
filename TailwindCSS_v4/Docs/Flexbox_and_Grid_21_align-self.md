# Flexbox & Grid

## align-self

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

| Class         | Styles                  |
|---------------|-------------------------|
| `self-auto`   | `align-self: auto;`     |
| `self-start`  | `align-self: flex-start;` |
| `self-end`    | `align-self: flex-end;`   |
| `self-center` | `align-self: center;`    |
| `self-stretch`| `align-self: stretch;`   |
| `self-baseline`| `align-self: baseline;`  |

## Examples ([Examples](https://tailwindcss.com/docs/align-self#examples))

### Auto ([Auto](https://tailwindcss.com/docs/align-self#auto))

Use `self-auto` to align an item based on the value of the container's `align-items` property:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
```

### Start ([Start](https://tailwindcss.com/docs/align-self#start))

Use `self-start` to align an item to the start of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-start ...">02</div>
  <div>03</div>
</div>
```

### Center ([Center](https://tailwindcss.com/docs/align-self#center))

Use `self-center` to align an item along the center of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center ...">02</div>
  <div>03</div>
</div>
```

### End ([End](https://tailwindcss.com/docs/align-self#end))

Use `self-end` to align an item to the end of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end ...">02</div>
  <div>03</div>
</div>
```

### Stretch ([Stretch](https://tailwindcss.com/docs/align-self#stretch))

Use `self-stretch` to stretch an item to fill the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch ...">02</div>
  <div>03</div>
</div>
```

### Responsive design ([Responsive design](https://tailwindcss.com/docs/align-self#responsive-design))

Prefix an `align-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="self-auto md:self-end ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).