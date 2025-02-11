# Flexbox & Grid - flex-grow

Utilities for controlling how flex items grow.

## Class and Styles

| Class                     | Styles                      |
| ------------------------- | --------------------------- |
| `grow`                    | `flex-grow: 1;`             |
| `grow-<number>`           | `flex-grow: <number>;`      |
| `grow-[<value>]`          | `flex-grow: <value>;`       |
| `grow-(<custom-property>)` | `flex-grow: var(<custom-property>);` |

## Examples

[Examples on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#examples)

### Allowing items to grow

[Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#allowing-items-to-grow)

Use `grow` to allow a flex item to grow to fill any available space:

```html
<div class="flex ...">
  <div class="size-14 flex-none ...">01</div>
  <div class="size-14 grow ...">02</div>
  <div class="size-14 flex-none ...">03</div>
</div>
```

### Growing items based on factor

[Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#growing-items-based-on-factor)

Use `grow-<number>` utilities like `grow-3` to make flex items grow proportionally based on their growth factor, allowing them to fill the available space relative to each other:

```html
<div class="flex ...">
  <div class="size-14 grow-3 ...">01</div>
  <div class="size-14 grow-7 ...">02</div>
  <div class="size-14 grow-3 ...">03</div>
</div>
```

### Preventing items from growing

[Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#preventing-items-from-growing)

Use `grow-0` to prevent a flex item from growing:

```html
<div class="flex ...">
  <div class="size-14 grow ...">01</div>
  <div class="size-14 grow-0 ...">02</div>
  <div class="size-14 grow ...">03</div>
</div>
```

### Using a custom value

[Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#using-a-custom-value)

Use the `grow-[<value>]` syntax to set the flex grow factor based on a completely custom value:

```html
<div class="grow-[25vw] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `grow-(<custom-property>)` syntax:

```html
<div class="grow-(--my-grow) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `grow-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

[Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/flex-grow#responsive-design)

Prefix a `flex-grow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="grow md:grow-0 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).