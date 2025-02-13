## Filter: grayscale()

Utilities for applying grayscale filters to an element.

### Class

| Class                     | Styles                                     |
| ------------------------- | ------------------------------------------ |
| `grayscale`               | `filter: grayscale(100%);`                |
| `grayscale-<number>`      | `filter: grayscale(<number>%);`           |
| `grayscale-(<custom-property>)` | `filter: grayscale(var(<custom-property>));` |
| `grayscale-[<value>]`     | `filter: grayscale(<value>);`              |

## Examples ([Link to Examples](https://tailwindcss.com/docs/filter-grayscale#examples))

### Basic example ([Link to Basic Example](https://tailwindcss.com/docs/filter-grayscale#basic-example))

Use utilities like `grayscale` and `grayscale-75` to control the amount of grayscale effect applied to an element:

**Class:** `grayscale-0`
![grayscale-0 image](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**Class:** `grayscale-25`
![grayscale-25 image](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**Class:** `grayscale-50`
![grayscale-50 image](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**Class:** `grayscale`
![grayscale image](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="grayscale-0 ..." src="/img/mountains.jpg" />
<img class="grayscale-25 ..." src="/img/mountains.jpg" />
<img class="grayscale-50 ..." src="/img/mountains.jpg" />
<img class="grayscale ..." src="/img/mountains.jpg" />
```

### Using a custom value ([Link to Custom Value Example](https://tailwindcss.com/docs/filter-grayscale#using-a-custom-value))

Use the `grayscale-[<value>]` syntax to set the grayscale based on a completely custom value:

```html
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `grayscale-(<custom-property>)` syntax:

```html
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design ([Link to Responsive Design Example](https://tailwindcss.com/docs/filter-grayscale#responsive-design))

Prefix a `filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="grayscale md:grayscale-0 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
