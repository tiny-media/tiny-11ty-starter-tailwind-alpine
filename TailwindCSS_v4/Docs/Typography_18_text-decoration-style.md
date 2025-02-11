# Typography

## text-decoration-style

Utilities for controlling the style of text decorations.

| Class                 | Styles                                  |
| --------------------- | --------------------------------------- |
| `decoration-solid`    | `text-decoration-style: solid;`         |
| `decoration-double`   | `text-decoration-style: double;`        |
| `decoration-dotted`   | `text-decoration-style: dotted;`        |
| `decoration-dashed`   | `text-decoration-style: dashed;`        |
| `decoration-wavy`     | `text-decoration-style: wavy;`          |

## [Examples](https://tailwindcss.com/docs/text-decoration-style#examples)

### [Basic example](https://tailwindcss.com/docs/text-decoration-style#basic-example)

Use utilities like `decoration-dotted` and `decoration-dashed` to change the [text decoration](https://tailwindcss.com/docs/text-decoration-line) style of an element:

decoration-solid

The quick brown fox jumps over the lazy dog.

decoration-double

The quick brown fox jumps over the lazy dog.

decoration-dotted

The quick brown fox jumps over the lazy dog.

decoration-dashed

The quick brown fox jumps over the lazy dog.

decoration-wavy

The quick brown fox jumps over the lazy dog.

```html
<p class="underline decoration-solid">The quick brown fox...</p>
<p class="underline decoration-double">The quick brown fox...</p>
<p class="underline decoration-dotted">The quick brown fox...</p>
<p class="underline decoration-dashed">The quick brown fox...</p>
<p class="underline decoration-wavy">The quick brown fox...</p>
```

### [Responsive design](https://tailwindcss.com/docs/text-decoration-style#responsive-design)

Prefix a `text-decoration-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="underline md:decoration-dashed ...">  <!-- ... --></p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
