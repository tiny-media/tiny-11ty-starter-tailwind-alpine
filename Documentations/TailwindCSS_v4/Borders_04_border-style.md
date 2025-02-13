# Borders

## border-style

Utilities for controlling the style of an element's borders.

| Class           | Styles                                     |
|-----------------|--------------------------------------------|
| `border-solid`  | `border-style: solid;`                     |
| `border-dashed` | `border-style: dashed;`                    |
| `border-dotted` | `border-style: dotted;`                    |
| `border-double` | `border-style: double;`                    |
| `border-hidden` | `border-style: hidden;`                    |
| `border-none`   | `border-style: none;`                      |
| `divide-solid`  | `& > :not(:last-child) { border-style: solid; }` |
| `divide-dashed` | `& > :not(:last-child) { border-style: dashed; }` |
| `divide-dotted` | `& > :not(:last-child) { border-style: dotted; }` |
| `divide-double` | `& > :not(:last-child) { border-style: double; }` |
| `divide-hidden` | `& > :not(:last-child) { border-style: hidden; }` |
| `divide-none`   | `& > :not(:last-child) { border-style: none; }`   |

## Examples

[Examples](https://tailwindcss.com/docs/border-style#examples)

### Basic example

[Basic example](https://tailwindcss.com/docs/border-style#basic-example)

Use utilities like `border-solid` and `border-dotted` to control an element's border style:

*   `border-solid`
*   `border-dashed`
*   `border-dotted`
*   `border-double`

```html
<div class="border-2 border-solid ..."></div>
<div class="border-2 border-dashed ..."></div>
<div class="border-2 border-dotted ..."></div>
<div class="border-4 border-double ..."></div>
```

### Removing a border

[Removing a border](https://tailwindcss.com/docs/border-style#removing-a-border)

Use the `border-none` utility to remove an existing border from an element:

```html
<button class="border-none ...">Save Changes</button>
```

This is most commonly used to remove a border style that was applied at a smaller breakpoint.

### Setting the divider style

[Setting the divider style](https://tailwindcss.com/docs/border-style#setting-the-divider-style)

Use utilities like `divide-dashed` and `divide-dotted` control the border style between child elements

```
01
02
03
```

```html
<div class="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Responsive design

[Responsive design](https://tailwindcss.com/docs/border-style#responsive-design)

Prefix a `border-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="border-solid md:border-dotted ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
