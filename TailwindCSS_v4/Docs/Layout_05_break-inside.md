# break-inside

Utilities for controlling how a column or page should break within an element.

| Class                     | Styles                     |
| ------------------------- | -------------------------- |
| `break-inside-auto`       | `break-inside: auto;`       |
| `break-inside-avoid`      | `break-inside: avoid;`      |
| `break-inside-avoid-page` | `break-inside: avoid-page;` |
| `break-inside-avoid-column`| `break-inside: avoid-column;`|

## Examples

[Examples](https://tailwindcss.com/docs/break-inside#examples)

### Basic example

[Basic example](https://tailwindcss.com/docs/break-inside#basic-example)

Use utilities like `break-inside-column` and `break-inside-avoid-page` to control how a column or page break should behave within an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

### Responsive design

[Responsive design](https://tailwindcss.com/docs/break-inside#responsive-design)

Prefix a `break-inside` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="break-inside-avoid-column md:break-inside-auto ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
