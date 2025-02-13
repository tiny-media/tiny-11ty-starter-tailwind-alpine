# Typography - text-overflow

Utilities for controlling how the text of an element overflows.

## Class Reference

| Class         | Styles                                                                 |
|---------------|-------------------------------------------------------------------------|
| `truncate`    | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`       |
| `text-ellipsis` | `text-overflow: ellipsis;`                                             |
| `text-clip`     | `text-overflow: clip;`                                                |

## Examples

### Truncating text

Use the `truncate` utility to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed:

```html
<p class="truncate">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

**Example Output:**

> The longest word in any of the major...

### Adding an ellipsis

Use the `text-ellipsis` utility to truncate overflowing text with an ellipsis (…) if needed:

```html
<p class="overflow-hidden text-ellipsis">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

**Example Output:**

> The longest word in any of the major...

**Note:** You need to apply `overflow-hidden` or `overflow-x-hidden` to the parent element for `text-ellipsis` to work as expected.

### Clipping text

Use the `text-clip` utility to truncate the text at the limit of the content area:

```html
<p class="overflow-hidden text-clip">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

**Example Output:**

> The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

This is the default browser behavior when `text-overflow` is not explicitly set.

**Note:** You need to apply `overflow-hidden` or `overflow-x-hidden` to the parent element for `text-clip` to work as expected.

### Responsive design

Prefix a `text-overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="text-ellipsis md:text-clip ..."><!-- ... --></p>
```

In this example, `text-ellipsis` will be applied by default on smaller screens, and `text-clip` will be applied from medium screens and above.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
