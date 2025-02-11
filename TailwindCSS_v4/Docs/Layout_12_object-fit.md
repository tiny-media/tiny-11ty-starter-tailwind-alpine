# object-fit

Utilities for controlling how a replaced element's content should be resized.

## Class Table

| Class             | Styles                     |
|-------------------|----------------------------|
| `object-contain`  | `object-fit: contain;`     |
| `object-cover`    | `object-fit: cover;`       |
| `object-fill`     | `object-fit: fill;`        |
| `object-none`     | `object-fit: none;`        |
| `object-scale-down`| `object-fit: scale-down;` |

## Examples

[Examples](https://tailwindcss.com/docs/object-fit#examples)

### Resizing to cover

[Resizing to cover](https://tailwindcss.com/docs/object-fit#resizing-to-cover)

Use the `object-cover` utility to resize an element's content to cover its container:

**Example Image:**
![Resizing to cover example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
```

### Containing within

[Containing within](https://tailwindcss.com/docs/object-fit#containing-within)

Use the `object-contain` utility to resize an element's content to stay contained within its container:

**Example Image:**
![Containing within example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="h-48 w-96 object-contain ..." src="/img/mountains.jpg" />
```

### Stretching to fit

[Stretching to fit](https://tailwindcss.com/docs/object-fit#stretching-to-fit)

Use the `object-fill` utility to stretch an element's content to fit its container:

**Example Image:**
![Stretching to fit example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="h-48 w-96 object-fill ..." src="/img/mountains.jpg" />
```

### Scaling down

[Scaling down](https://tailwindcss.com/docs/object-fit#scaling-down)

Use the `object-scale-down` utility to display an element's content at its original size but scale it down to fit its container if necessary:

**Example Image:**
![Scaling down example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80)

```html
<img class="h-48 w-96 object-scale-down ..." src="/img/mountains.jpg" />
```

### Using the original size

[Using the original size](https://tailwindcss.com/docs/object-fit#using-the-original-size)

Use the `object-none` utility to display an element's content at its original size ignoring the container size:

**Example Image:**
![Using the original size example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="h-48 w-96 object-none ..." src="/img/mountains.jpg" />
```

### Responsive design

[Responsive design](https://tailwindcss.com/docs/object-fit#responsive-design)

Prefix an `object-fit` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="object-contain md:object-cover" src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
