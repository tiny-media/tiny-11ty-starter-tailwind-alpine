# Typography: `text-transform`

Utilities for controlling the capitalization of text.

This section describes the Tailwind CSS `text-transform` utilities, which allow you to control the capitalization of text elements. These utilities provide classes to easily transform text to uppercase, lowercase, capitalize, or reset to normal casing.

## Utility Classes

The following table outlines the available classes and their corresponding CSS styles for text transformation:

| Class        | Styles                     | Description                                                                 |
|--------------|----------------------------|-----------------------------------------------------------------------------|
| `uppercase`  | `text-transform: uppercase;` | Transforms all characters in the text to uppercase.                         |
| `lowercase`  | `text-transform: lowercase;` | Transforms all characters in the text to lowercase.                         |
| `capitalize` | `text-transform: capitalize;`| Capitalizes the first letter of each word in the text.                      |
| `normal-case`| `text-transform: none;`     | Resets any text transformations, displaying the text in its original casing. |

## Examples

Below are examples demonstrating the usage of each `text-transform` utility class.

### Uppercasing text

Use the `uppercase` utility to transform text to uppercase.

```html
<p class="uppercase">The quick brown fox jumps over the lazy dog.</p>
```

**Rendered Output:**

> THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

[Link to Example in Tailwind CSS Docs](https://tailwindcss.com/docs/text-transform#uppercasing-text)

### Lowercasing text

Use the `lowercase` utility to transform text to lowercase.

```html
<p class="lowercase">The quick brown fox jumps over the lazy dog.</p>
```

**Rendered Output:**

> the quick brown fox jumps over the lazy dog.

[Link to Example in Tailwind CSS Docs](https://tailwindcss.com/docs/text-transform#lowercasing-text)

### Capitalizing text

Use the `capitalize` utility to capitalize the first letter of each word in the text.

```html
<p class="capitalize">The quick brown fox jumps over the lazy dog.</p>
```

**Rendered Output:**

> The Quick Brown Fox Jumps Over The Lazy Dog.

[Link to Example in Tailwind CSS Docs](https://tailwindcss.com/docs/text-transform#capitalizing-text)

### Resetting text casing

Use the `normal-case` utility to reset any applied text transformations and display the text in its original casing. This is particularly useful for overriding transformations set at different breakpoints.

```html
<p class="normal-case">The quick brown fox jumps over the lazy dog.</p>
```

**Rendered Output:**

> The quick brown fox jumps over the lazy dog.

[Link to Example in Tailwind CSS Docs](https://tailwindcss.com/docs/text-transform#resetting-text-casing)

## Responsive Design

Tailwind CSS allows you to apply `text-transform` utilities conditionally at different screen sizes using breakpoint prefixes. For example, to apply `uppercase` only on medium screens and above, you would use the `md:uppercase` class.

```html
<p class="capitalize md:uppercase ...">  <!-- ... --></p>
```

In this example, the text will be capitalized by default (on smaller screens) and then transformed to uppercase on medium screens (`md:`) and larger.

For more detailed information on responsive design and breakpoint variants, please refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
