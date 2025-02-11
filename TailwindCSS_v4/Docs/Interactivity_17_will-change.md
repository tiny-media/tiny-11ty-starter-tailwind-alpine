## Will-change Utility

Utilities for optimizing upcoming animations of elements that are expected to change.

This utility helps improve performance by hinting to the browser about elements that are about to undergo changes, allowing the browser to optimize rendering in advance.

### Classes and Styles

| Class                     | Styles                        |
| ------------------------- | ----------------------------- |
| `will-change-auto`        | `will-change: auto;`          |
| `will-change-scroll`      | `will-change: scroll-position;` |
| `will-change-contents`    | `will-change: contents;`        |
| `will-change-transform`   | `will-change: transform;`       |
| `will-change-<custom-property>` | `will-change: var(<custom-property>);` |
| `will-change-[<value>]`     | `will-change: <value>;`         |

### Examples

#### Optimizing with `will-change`

Use the `will-change-scroll`, `will-change-contents`, and `will-change-transform` utilities to optimize elements that are expected to change soon. This instructs the browser to prepare for the animation before it begins.

```html
<div class="overflow-auto will-change-scroll">  <!-- ... --></div>
```

It is recommended to apply these utilities just before an element is about to change and remove them shortly after the animation or change is complete by using `will-change-auto`.

**Important Note:** The `will-change` property should be used as a last resort for **known performance problems**. Overusing these utilities or applying them preemptively without identified performance issues can negatively impact page performance.

#### Using a Custom Value

Use the `will-change-[<value>]` syntax to set the `will-change` property with a custom value.

```html
<div class="will-change-[top,left] ...">  <!-- ... --></div>
```

For CSS variables, you can use the `will-change-(<custom-property>)` syntax.

```html
<div class="will-change-(--my-properties) ...">  <!-- ... --></div>
```

This syntax is a shorthand for `will-change-[var(<custom-property>)]` and automatically adds the `var()` function for you.

**[Link to Examples on Tailwind CSS Documentation](https://tailwindcss.com/docs/will-change#examples)**
