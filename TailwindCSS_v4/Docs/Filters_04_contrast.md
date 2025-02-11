# Filters

## filter: contrast()

Utilities for applying contrast filters to an element.

### Class

| Class                     | Styles                                  |
| ------------------------- | --------------------------------------- |
| `contrast-<number>`       | `filter: contrast(<number>%);`          |
| `contrast-(<custom-property>)` | `filter: contrast(var(<custom-property>));` |
| `contrast-[<value>]`      | `filter: contrast(<value>);`             |

## Examples

### Basic example

Use utilities like `contrast-50` and `contrast-100` to control an element's contrast:

*   `contrast-50`: Applies a lower contrast.
*   `contrast-100`: Applies the default contrast (no change).
*   `contrast-125`: Applies a higher contrast.
*   `contrast-200`: Applies a much higher contrast.

```html
<img class="contrast-50 ..." src="/img/mountains.jpg" />
<img class="contrast-100 ..." src="/img/mountains.jpg" />
<img class="contrast-125 ..." src="/img/mountains.jpg" />
<img class="contrast-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `contrast-[<value>]` syntax to set the contrast based on a completely custom value:

```html
<img class="contrast-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `contrast-(<custom-property>)` syntax:

```html
<img class="contrast-(--my-contrast) ..." src="/img/mountains.jpg" />
```

This is a shorthand for `contrast-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `filter: contrast()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="contrast-125 md:contrast-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
