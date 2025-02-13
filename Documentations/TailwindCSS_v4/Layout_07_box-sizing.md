# box-sizing

Utilities for controlling how the browser should calculate an element's total size.

## Classes

| Class        | Styles                      |
|--------------|-----------------------------|
| `box-border` | `box-sizing: border-box`    |
| `box-content`| `box-sizing: content-box`   |

## Examples

### Including borders and padding

Use the `box-border` utility to set an element's `box-sizing` to `border-box`, telling the browser to include the element's borders and padding when you give it a height or width.

This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px:

```html
<div class="box-border size-32 border-4 p-4 ...">  <!-- ... --></div>
```

Tailwind makes this the default for all elements in our [preflight base styles](https://tailwindcss.com/docs/preflight).

### Excluding borders and padding

Use the `box-content` utility to set an element's `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element's specified width or height.

This means a 100px × 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 112px × 112px, with an internal content area of 100px × 100px:

```html
<div class="box-content size-32 border-4 p-4 ...">  <!-- ... --></div>
```

### Responsive design

Prefix a `box-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="box-content md:box-border ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
