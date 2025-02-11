# Perspective

Utilities for controlling an element's perspective when placed in 3D space.

## Class Styles

| Class                     | Styles                                   |
| ------------------------- | ---------------------------------------- |
| `perspective-dramatic`    | `perspective: var(--perspective-dramatic); /* 100px */` |
| `perspective-near`        | `perspective: var(--perspective-near); /* 300px */`   |
| `perspective-normal`      | `perspective: var(--perspective-normal); /* 500px */`   |
| `perspective-midrange`    | `perspective: var(--perspective-midrange); /* 800px */`  |
| `perspective-distant`     | `perspective: var(--perspective-distant); /* 1200px */` |
| `perspective-none`        | `perspective: none;`                     |
| `perspective-(<custom-property>)` | `perspective: var(<custom-property>);`         |
| `perspective-[<value>]`   | `perspective: <value>;`                  |

## Examples

### Basic example

Use utilities like `perspective-normal` and `perspective-distant` to control how close or how far away the z-plane is from the screen:

**`perspective-dramatic`**

```html
<div class="size-20 perspective-dramatic ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

**`perspective-normal`**

```html
<div class="size-20 perspective-normal ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

This is like moving a camera closer to or further away from an object.

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/perspective#basic-example)

### Removing a perspective

Use the `perspective-none` utility to remove a perspective transform from an element:

```html
<div class="perspective-none ...">
  <!-- ... -->
</div>
```

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/perspective#removing-a-perspective)

### Using a custom value

Use the `perspective-[<value>]` syntax to set the perspective based on a completely custom value:

```html
<div class="perspective-[750px] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `perspective-(<custom-property>)` syntax:

```html
<div class="perspective-(--my-perspective) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `perspective-[var(<custom-property>)]` that adds the `var()` function for you automatically.

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/perspective#using-a-custom-value)

### Responsive design

Prefix a `perspective` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="perspective-midrange md:perspective-dramatic ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/perspective#responsive-design)

## Customizing your theme

Use the `--perspective-*` theme variables to customize the perspective utilities in your project.

```css
@theme {
  --perspective-remote: 1800px;
}
```

Now the `perspective-remote` utility can be used in your markup:

```html
<div class="perspective-remote">
  <!-- ... -->
</div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).

[View Customizing Theme Section on Tailwind CSS Docs](https://tailwindcss.com/docs/perspective#customizing-your-theme)
