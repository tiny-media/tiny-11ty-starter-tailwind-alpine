# Flexbox & Grid

## flex-shrink

Utilities for controlling how flex items shrink.

| Class                 | Styles                      |
| --------------------- | --------------------------- |
| `shrink`              | `flex-shrink: 1;`           |
| `shrink-<number>`     | `flex-shrink: <number>;`    |
| `shrink-[<value>]`    | `flex-shrink: <value>;`     |
| `shrink-(<custom-property>)` | `flex-shrink: var(<custom-property>);` |

## Examples

### Allowing flex items to shrink

Use `shrink` to allow a flex item to shrink if needed:

```html
<div class="flex ...">
  <div class="h-14 w-14 flex-none ...">01</div>
  <div class="h-14 w-64 shrink ...">02</div>
  <div class="h-14 w-14 flex-none ...">03</div>
</div>
```

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-shrink#allowing-flex-items-to-shrink)

### Preventing items from shrinking

Use `shrink-0` to prevent a flex item from shrinking:

```html
<div class="flex ...">
  <div class="h-16 flex-1 ...">01</div>
  <div class="h-16 w-32 shrink-0 ...">02</div>
  <div class="h-16 flex-1 ...">03</div>
</div>
```

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-shrink#preventing-items-from-shrinking)

### Using a custom value

Use the `shrink-[<value>]` syntax to set the flex shrink factor based on a completely custom value:

```html
<div class="shrink-[calc(100vw-var(--sidebar))] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `shrink-(<custom-property>)` syntax:

```html
<div class="shrink-(--my-shrink) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `shrink-[var(<custom-property>)]` that adds the `var()` function for you automatically.

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-shrink#using-a-custom-value)

### Responsive design

Prefix a `flex-shrink` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="shrink md:shrink-0 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

[View Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-shrink#responsive-design)