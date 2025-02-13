# Flexbox & Grid - justify-items

Utilities for controlling how grid items are aligned along their inline axis.

## Class Reference

| Class                 | Styles                     |
| --------------------- | -------------------------- |
| `justify-items-start`   | `justify-items: start;`    |
| `justify-items-end`     | `justify-items: end;`      |
| `justify-items-center`  | `justify-items: center;`   |
| `justify-items-stretch` | `justify-items: stretch;`  |
| `justify-items-normal`  | `justify-items: normal;`   |

## Examples

For more examples and detailed explanations, refer to the [official Tailwind CSS documentation on justify-items](https://tailwindcss.com/docs/justify-items#examples).

### Start

Use `justify-items-start` to justify grid items against the start of their inline axis:

```html
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

**Visual Example:**

```
01
02
03
04
05
06
```

[View Example on Tailwind CSS Docs (Start)](https://tailwindcss.com/docs/justify-items#start)

### End

Use `justify-items-end` to justify grid items against the end of their inline axis:

```html
<div class="grid justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

**Visual Example:**

```
      01
      02
      03
      04
      05
      06
```

[View Example on Tailwind CSS Docs (End)](https://tailwindcss.com/docs/justify-items#end)

### Center

Use `justify-items-center` to justify grid items along their inline axis:

```html
<div class="grid justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

**Visual Example:**

```
   01
   02
   03
   04
   05
   06
```

[View Example on Tailwind CSS Docs (Center)](https://tailwindcss.com/docs/justify-items#center)

### Stretch

Use `justify-items-stretch` to stretch items along their inline axis:

```html
<div class="grid justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

**Visual Example:**

```
01 (stretched)
02 (stretched)
03 (stretched)
04 (stretched)
05 (stretched)
06 (stretched)
```

[View Example on Tailwind CSS Docs (Stretch)](https://tailwindcss.com/docs/justify-items#stretch)

## Responsive Design

You can apply `justify-items` utilities conditionally at different breakpoints using breakpoint prefixes. For example, use `md:justify-items-center` to apply the `justify-items-center` utility only at medium screen sizes and above.

```html
<div class="grid justify-items-start md:justify-items-center ...">
  <!-- ... -->
</div>
```

In this example, `justify-items-start` will be applied by default on smaller screens, and `justify-items-center` will be applied on medium screens and above.

For more information about responsive design and breakpoint variants, see the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

---

**Note:** These utility classes are part of the Tailwind CSS framework. To use them, you need to have Tailwind CSS installed and configured in your project. They provide a convenient way to apply CSS `justify-items` property to grid containers.