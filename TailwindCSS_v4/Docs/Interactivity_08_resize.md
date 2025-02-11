# Interactivity

## resize

Utilities for controlling how an element can be resized.

| Class         | Styles             |
|---------------|--------------------|
| `resize-none` | `resize: none;`   |
| `resize`      | `resize: both;`   |
| `resize-y`    | `resize: vertical;` |
| `resize-x`    | `resize: horizontal;` |

## Examples ([https://tailwindcss.com/docs/resize#examples](https://tailwindcss.com/docs/resize#examples))

### Resizing in all directions ([https://tailwindcss.com/docs/resize#resizing-in-all-directions](https://tailwindcss.com/docs/resize#resizing-in-all-directions))

Use `resize` to make an element horizontally and vertically resizable:

Drag the textarea handle in the demo to see the expected behavior

```html
<textarea class="resize rounded-md ..."></textarea>
```

### Resizing vertically ([https://tailwindcss.com/docs/resize#resizing-vertically](https://tailwindcss.com/docs/resize#resizing-vertically))

Use `resize-y` to make an element vertically resizable:

Drag the textarea handle in the demo to see the expected behavior

```html
<textarea class="resize-y rounded-md ..."></textarea>
```

### Resizing horizontally ([https://tailwindcss.com/docs/resize#resizing-horizontally](https://tailwindcss.com/docs/resize#resizing-horizontally))

Use `resize-x` to make an element horizontally resizable:

Drag the textarea handle in the demo to see the expected behavior

```html
<textarea class="resize-x rounded-md ..."></textarea>
```

### Prevent resizing ([https://tailwindcss.com/docs/resize#prevent-resizing](https://tailwindcss.com/docs/resize#prevent-resizing))

Use `resize-none` to prevent an element from being resizable:

Notice that the textarea handle is gone

```html
<textarea class="resize-none rounded-md"></textarea>
```

### Responsive design ([https://tailwindcss.com/docs/resize#responsive-design](https://tailwindcss.com/docs/resize#responsive-design))

Prefix a `resize` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="resize-none md:resize ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
