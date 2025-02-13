# Typography

## text-align

Utilities for controlling the alignment of text.

| Class         | Styles                 |
|---------------|------------------------|
| `text-left`   | `text-align: left;`    |
| `text-center` | `text-align: center;`  |
| `text-right`  | `text-align: right;`   |
| `text-justify`| `text-align: justify;` |
| `text-start`  | `text-align: start;`   |
| `text-end`    | `text-align: end;`     |

## Examples

For more examples and interactive demos, refer to the [official Tailwind CSS documentation for text-align](https://tailwindcss.com/docs/text-align#examples).

### Left aligning text

Use the `text-left` utility to left align the text of an element:

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-left">So I started to walk into the water...</p>
```

This code snippet will render a paragraph with text aligned to the left.

### Right aligning text

Use the `text-right` utility to right align the text of an element:

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-right">So I started to walk into the water...</p>
```

This code snippet will render a paragraph with text aligned to the right.

### Centering text

Use the `text-center` utility to center the text of an element:

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-center">So I started to walk into the water...</p>
```

This code snippet will render a paragraph with text centered horizontally.

### Justifying text

Use the `text-justify` utility to justify the text of an element:

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-justify">So I started to walk into the water...</p>
```

This code snippet will render a paragraph with text justified, meaning the text will be spaced to fill the width of the container, with the exception of the last line.

### Responsive design

Tailwind CSS allows you to apply text alignment utilities conditionally at different breakpoints using breakpoint prefixes. For example, use `md:text-center` to center text only on medium screens and above.

```html
<p class="text-left md:text-center ...">  <!-- ... --></p>
```

In this example, the text will be left-aligned by default (`text-left`) on smaller screens. On medium screens (`md:`) and larger, the text alignment will change to center (`text-center`).

For more information on responsive design and breakpoint variants, refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) in the official Tailwind CSS documentation.
