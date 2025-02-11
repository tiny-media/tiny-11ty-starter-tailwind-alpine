# Tailwind CSS `break-after` Utilities

Utilities for controlling how a column or page should break after an element.

## Class Reference

| Class                | Styles                  |
| -------------------- | ----------------------- |
| `break-after-auto`   | `break-after: auto;`    |
| `break-after-avoid`  | `break-after: avoid;`   |
| `break-after-all`    | `break-after: all;`     |
| `break-after-avoid-page` | `break-after: avoid-page;` |
| `break-after-page`   | `break-after: page;`    |
| `break-after-left`   | `break-after: left;`    |
| `break-after-right`  | `break-after: right;`   |
| `break-after-column` | `break-after: column;`  |

## Examples

For more detailed examples and explanations, refer to the [official Tailwind CSS documentation for break-after utilities](https://tailwindcss.com/docs/break-after#examples).

### Basic Example

Use utilities like `break-after-column` and `break-after-page` to control how a column or page break should behave after an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

In this example, the paragraph with the class `break-after-column` will force a column break after it within the `columns-2` container.

### Responsive Design

Prefix a `break-after` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="break-after-column md:break-after-auto ...">
  <!-- ... -->
</div>
```

In this responsive example, `break-after-column` will be applied by default (on smaller screens), but on medium screens (`md:`) and above, `break-after-auto` will be applied instead, resetting the break behavior to automatic.

For more information on responsive design and breakpoint variants, see the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
