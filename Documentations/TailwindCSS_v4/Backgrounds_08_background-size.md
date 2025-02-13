# Backgrounds

## background-size

Utilities for controlling the background size of an element's background image.

| Class             | Styles                      |
| ----------------- | --------------------------- |
| `bg-auto`         | `background-size: auto;`    |
| `bg-cover`        | `background-size: cover;`   |
| `bg-contain`      | `background-size: contain;` |
| `bg-(length:<custom-property>)` | `background-size: var(<custom-property>);` |
| `bg-[<value>]`    | `background-size: <value>;` |

## Examples

### Filling the container

Use the `bg-cover` utility to scale the background image until it fills the background layer, cropping the image if needed:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center"></div>
```

### Filling without cropping

Use the `bg-contain` utility to scale the background image to the outer edges without cropping or stretching:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center"></div>
```

### Using the default size

Use the `bg-auto` utility to display the background image at its default size:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat"></div>
```

### Using a custom value

Use the `bg-[<value>]` syntax to set the background image size based on a completely custom value:

```html
<div class="bg-[auto_100px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `bg-(length:<custom-property>)` syntax:

```html
<div class="bg-(length:--my-image-size) ...">  <!-- ... --></div>
```

This is just a shorthand for `bg-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `background-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="bg-auto md:bg-contain ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
