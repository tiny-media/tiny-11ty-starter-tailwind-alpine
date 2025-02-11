# transform-origin

Utilities for specifying the origin for an element's transformations.

## Class Table

| Class                 | Styles                        |
|-----------------------|-------------------------------|
| `origin-center`       | `transform-origin: center;`    |
| `origin-top`          | `transform-origin: top;`       |
| `origin-top-right`    | `transform-origin: top right;` |
| `origin-right`        | `transform-origin: right;`     |
| `origin-bottom-right` | `transform-origin: bottom right;`|
| `origin-bottom`       | `transform-origin: bottom;`    |
| `origin-bottom-left`  | `transform-origin: bottom left;`|
| `origin-left`         | `transform-origin: left;`      |
| `origin-top-left`     | `transform-origin: top left;`  |
| `origin-(<custom-property>)` | `transform-origin: var(<custom-property>);` |
| `origin-[<value>]`    | `transform-origin: <value>;`   |

## Examples

### Basic example

Use utilities like `origin-top` and `origin-bottom-left` to set an element's transform origin:

#### origin-center

```html
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" />
```

#### origin-top-left

```html
<img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" />
```

#### origin-bottom

```html
<img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

In the above examples, different `origin-*` classes are used to change the transform origin of images, affecting how rotations are applied.

### Using a custom value

Use the `origin-[<value>]` syntax to set the transform origin based on a completely custom value:

```html
<img class="origin-[33%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `origin-(<custom-property>)` syntax:

```html
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

This is a shorthand for `origin-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `transform-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
