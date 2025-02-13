# Typography

## font-style

Utilities for controlling the style of text.

| Class        | Styles                     |
|--------------|----------------------------|
| `italic`     | `font-style: italic;`       |
| `not-italic` | `font-style: normal;`      |

## Examples

For more examples and detailed explanations, refer to the [official Tailwind CSS documentation on font-style](https://tailwindcss.com/docs/font-style#examples).

### Italicizing text

Use the `italic` utility to apply italic styling to text.

**Example:**

> The quick brown fox jumps over the lazy dog.

```html
<p class="italic ...">The quick brown fox jumps over the lazy dog.</p>
```

This code snippet will render the paragraph text in *italics*.

### Displaying text normally

Use the `not-italic` utility to explicitly set text to its normal, non-italic style. This is useful for resetting styles inherited from parent elements or applying normal style at certain breakpoints.

**Example:**

> The quick brown fox jumps over the lazy dog.

```html
<p class="not-italic ...">The quick brown fox jumps over the lazy dog.</p>
```

This code snippet will render the paragraph text in a normal, non-italic style.

### Responsive design

Tailwind CSS allows you to apply font-style utilities conditionally at different screen sizes using breakpoint prefixes. For example, `md:not-italic` will remove italic styling on medium screens and above.

**Example:**

```html
<p class="italic md:not-italic ...">This text is italic on small screens, but normal on medium screens and above.</p>
```

In this example, the text will be italic by default (`italic`), but the `md:not-italic` class overrides this style on medium (`md`) screens and larger, making the text normal style at those sizes.

For more information on responsive design and breakpoint prefixes, see the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
