# Backgrounds

## background-position

Utilities for controlling the position of an element's background image.

| Class                  | Styles                        |
| ---------------------- | ----------------------------- |
| `bg-bottom`            | `background-position: bottom;` |
| `bg-center`            | `background-position: center;` |
| `bg-left`              | `background-position: left;`   |
| `bg-left-bottom`       | `background-position: left bottom;` |
| `bg-left-top`          | `background-position: left top;`    |
| `bg-right`             | `background-position: right;`  |
| `bg-right-bottom`      | `background-position: right bottom;` |
| `bg-right-top`         | `background-position: right top;`    |
| `bg-top`               | `background-position: top;`    |
| `bg-(position:<custom-property>)` | `background-position: var(<custom-property>);` |
| `bg-[<value>]`         | `background-position: <value>;` |

## Examples

### Basic example

Use utilities like `bg-center`, `bg-right`, and `bg-left-top` to control the position of an element's background image:

Hover over these examples to see the full image

#### bg-left-top

![bg-left-top example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-top

![bg-top example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-right-top

![bg-right-top example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-left

![bg-left example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-center

![bg-center example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-right

![bg-right example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-left-bottom

![bg-left-bottom example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-bottom

![bg-bottom example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

#### bg-right-bottom

![bg-right-bottom example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<div class="bg-[url(/img/mountains.jpg)] bg-left-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-left"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-center"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-left-bottom"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right-bottom"></div>
```

### Using a custom value

Use the `bg-[<value>]` syntax to set the background position based on a completely custom value:

```html
<div class="bg-[center_top_1rem] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `bg-(<custom-property>)` syntax:

```html
<div class="bg-(--my-bg-position) ...">  <!-- ... --></div>
```

This is just a shorthand for `bg-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `background-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="bg-center md:bg-top ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
