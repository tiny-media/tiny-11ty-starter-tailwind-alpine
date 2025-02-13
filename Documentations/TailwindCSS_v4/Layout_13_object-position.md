# object-position

Utilities for controlling how a replaced element's content should be positioned within its container.

## Class and Styles

| Class                 | Styles                                  |
|-----------------------|-----------------------------------------|
| `object-bottom`       | `object-position: bottom;`              |
| `object-center`       | `object-position: center;`              |
| `object-left`         | `object-position: left;`                |
| `object-left-bottom`  | `object-position: left bottom;`         |
| `object-left-top`     | `object-position: left top;`            |
| `object-right`        | `object-position: right;`               |
| `object-right-bottom` | `object-position: right bottom;`        |
| `object-right-top`    | `object-position: right top;`           |
| `object-top`          | `object-position: top;`                 |
| `object-(<custom-property>)` | `object-position: var(<custom-property>);` |
| `object-[<value>]`    | `object-position: <value>;`             |

## [Examples](https://tailwindcss.com/docs/object-position#examples)

### [Basic example](https://tailwindcss.com/docs/object-position#basic-example)

Use utilities like `object-left` and `object-right-bottom` to specify how a replaced element's content should be positioned within its container:

> Hover over examples to see the full image

**Examples:**

* **`object-left-top`**
  ![object-left-top](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-top`**
  ![object-top](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-right-top`**
  ![object-right-top](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-left`**
  ![object-left](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-center`**
  ![object-center](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-right`**
  ![object-right](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-left-bottom`**
  ![object-left-bottom](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-bottom`**
  ![object-bottom](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

* **`object-right-bottom`**
  ![object-right-bottom](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="size-24 object-left-top ..." src="/img/mountains.jpg" /><img class="size-24 object-top ..." src="/img/mountains.jpg" /><img class="size-24 object-right-top ..." src="/img/mountains.jpg" /><img class="size-24 object-left ..." src="/img/mountains.jpg" /><img class="size-24 object-center ..." src="/img/mountains.jpg" /><img class="size-24 object-right ..." src="/img/mountains.jpg" /><img class="size-24 object-left-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-right-bottom ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/object-position#using-a-custom-value)

Use the `object-[<value>]` syntax to set the object position based on a completely custom value:

```html
<img class="object-[25%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `object-(<custom-property>)` syntax:

```html
<img class="object-(--my-object) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `object-[var(<custom-property>)]` that adds the `var()` function for you automatically.
