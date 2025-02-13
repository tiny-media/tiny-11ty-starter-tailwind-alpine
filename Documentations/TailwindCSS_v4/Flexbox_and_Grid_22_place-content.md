# Flexbox & Grid

## place-content

Utilities for controlling how content is justified and aligned at the same time.

| Class                  | Styles                     |
| ---------------------- | -------------------------- |
| `place-content-center`   | `place-content: center;`    |
| `place-content-start`    | `place-content: start;`     |
| `place-content-end`      | `place-content: end;`       |
| `place-content-between`  | `place-content: space-between;` |
| `place-content-around`   | `place-content: space-around;`  |
| `place-content-evenly`   | `place-content: space-evenly;`  |
| `place-content-baseline` | `place-content: baseline;`  |
| `place-content-stretch`  | `place-content: stretch;`   |

## Examples ([Examples](https://tailwindcss.com/docs/place-content#examples))

### Center ([Center](https://tailwindcss.com/docs/place-content#center))

Use `place-content-center` to pack items in the center of the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-center gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Start ([Start](https://tailwindcss.com/docs/place-content#start))

Use `place-content-start` to pack items against the start of the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### End ([End](https://tailwindcss.com/docs/place-content#end))

Use `place-content-end` to pack items against the end of the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-end gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Space between ([Space between](https://tailwindcss.com/docs/place-content#space-between))

Use `place-content-between` to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-between gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Space around ([Space around](https://tailwindcss.com/docs/place-content#space-around))

Use `place-content-around` to distribute grid items such that there is an equal amount of space around each row on the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-around gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Space evenly ([Space evenly](https://tailwindcss.com/docs/place-content#space-evenly))

Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-evenly gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Stretch ([Stretch](https://tailwindcss.com/docs/place-content#stretch))

Use `place-content-stretch` to stretch grid items along their grid areas on the block axis:

```html
<div class="grid h-48 grid-cols-2 place-content-stretch gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

```
01
02
03
04
```

### Responsive design ([Responsive design](https://tailwindcss.com/docs/place-content#responsive-design))

Prefix a `place-content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="grid place-content-start md:place-content-center ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).