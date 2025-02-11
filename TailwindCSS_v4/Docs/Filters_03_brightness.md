```markdown
# Filters

## filter: brightness()

Utilities for applying brightness filters to an element.

### Class

| Class                     | Styles                                  |
| ------------------------- | --------------------------------------- |
| `brightness-<number>`     | `filter: brightness(<number>%);`         |
| `brightness-(<custom-property>)` | `filter: brightness(var(<custom-property>));` |
| `brightness-[<value>]`    | `filter: brightness(<value>);`            |

## Examples

### Basic example

Use utilities like `brightness-50` and `brightness-100` to control an element's brightness:

**brightness-50**
![brightness-50 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**brightness-100**
![brightness-100 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**brightness-125**
![brightness-125 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**brightness-200**
![brightness-200 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="brightness-50 ..." src="/img/mountains.jpg" />
<img class="brightness-100 ..." src="/img/mountains.jpg" />
<img class="brightness-125 ..." src="/img/mountains.jpg" />
<img class="brightness-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `brightness-[<value>]` syntax to set the brightness based on a completely custom value:

```html
<img class="brightness-[1.75] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `brightness-(<custom-property>)` syntax:

```html
<img class="brightness-(--my-brightness) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `brightness-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `filter: brightness()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="brightness-110 md:brightness-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
```
