# Typography

## list-style-type

Utilities for controlling the marker style of a list.

### Utilities

| Class                     | Styles                        |
| ------------------------- | ----------------------------- |
| `list-disc`               | `list-style-type: disc;`      |
| `list-decimal`            | `list-style-type: decimal;`   |
| `list-none`               | `list-style-type: none;`      |
| `list-(<custom-property>)` | `list-style-type: var(<custom-property>);` |
| `list-[<value>]`          | `list-style-type: <value>;`   |

## Examples

For more examples and detailed explanations, refer to the [official Tailwind CSS documentation on list-style-type](https://tailwindcss.com/docs/list-style-type#examples).

### Basic example

Use utilities like `list-disc` and `list-decimal` to control the style of the markers in a list:

**`list-disc`**

- Now this is a story all about how, my life got flipped-turned upside down
- And I'd like to take a minute just sit right there
- I'll tell you how I became the prince of a town called Bel-Air

**`list-decimal`**

1. Now this is a story all about how, my life got flipped-turned upside down
2. And I'd like to take a minute just sit right there
3. I'll tell you how I became the prince of a town called Bel-Air

**`list-none`**

- Now this is a story all about how, my life got flipped-turned upside down
- And I'd like to take a minute just sit right there
- I'll tell you how I became the prince of a town called Bel-Air

```html
<ul class="list-disc">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ul>
<ol class="list-decimal">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ol>
<ul class="list-none">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ul>
```

### Using a custom value

Use the `list-[<value>]` syntax to set the marker based on a completely custom value:

```html
<ol class="list-[upper-roman] ...">
  <!-- ... -->
</ol>
```

For CSS variables, you can also use the `list-(<custom-property>)` syntax:

```html
<ol class="list-(--my-marker) ...">
  <!-- ... -->
</ol>
```

This is a shorthand for `list-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `list-style-type` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<ul class="list-none md:list-disc ...">
  <!-- ... -->
</ul>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

**Links to official documentation:**

*   [list-style-type Utilities](https://tailwindcss.com/docs/list-style-type)
*   [Examples](https://tailwindcss.com/docs/list-style-type#examples)
*   [Basic example](https://tailwindcss.com/docs/list-style-type#basic-example)
*   [Using a custom value](https://tailwindcss.com/docs/list-style-type#using-a-custom-value)
*   [Responsive design](https://tailwindcss.com/docs/list-style-type#responsive-design)
*   [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states)
