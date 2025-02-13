# Scale Utilities

Utilities for scaling elements.

## Class Styles

| Class                     | Styles                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `scale-none`              | `scale: none;`                                              |
| `scale-<number>`          | `scale: <number>% <number>%;`                               |
| `-scale-<number>`         | `scale: calc(<number>% * -1) calc(<number>% * -1);`          |
| `scale-(<custom-property>)` | `scale: var(<custom-property>) var(<custom-property>);`        |
| `scale-[<value>]`         | `scale: <value>;`                                            |
| `scale-x-<number>`        | `scale: <number>% var(--tw-scale-y);`                        |
| `-scale-x-<number>`       | `scale: calc(<number>% * -1) var(--tw-scale-y);`           |
| `scale-x-(<custom-property>)`| `scale: var(<custom-property>) var(--tw-scale-y);`          |
| `scale-x-[<value>]`       | `scale: <value> var(--tw-scale-y);`                         |
| `scale-y-<number>`        | `scale: var(--tw-scale-x) <number>%;`                        |
| `-scale-y-<number>`       | `scale: var(--tw-scale-x) calc(<number>% * -1);`           |
| `scale-y-(<custom-property>)`| `scale: var(--tw-scale-x) var(<custom-property>);`          |
| `scale-y-[<value>]`       | `scale: var(--tw-scale-x) <value>;`                         |
| `scale-z-<number>`        | `scale: var(--tw-scale-x) var(--tw-scale-y) <number>%;`     |
| `-scale-z-<number>`       | `scale: var(--tw-scale-x) var(--tw-scale-y) calc(<number>% * -1);`|
| `scale-z-(<custom-property>)`| `scale: var(--tw-scale-x) var(--tw-scale-y) var(<custom-property>);`|
| `scale-z-[<value>]`       | `scale: var(--tw-scale-x) var(--tw-scale-y) <value>;`      |
| `scale-3d`                | `scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);`|

## Examples

This section provides examples of how to use the `scale` utilities.

### Basic example

Use `scale-<number>` utilities like `scale-75` and `scale-150` to scale an element by a percentage of its original size.

**Class Examples:**

*   `scale-75`
*   `scale-100`
*   `scale-125`

**Code Example:**

```html
<img class="scale-75 ..." src="/img/mountains.jpg" />
<img class="scale-100 ..." src="/img/mountains.jpg" />
<img class="scale-125 ..." src="/img/mountains.jpg" />
```

*(Note: The original documentation includes visual examples with images which are not included here. Refer to the original documentation for visual representation.)*

### Scaling on the x-axis

Use the `scale-x-<number>` utilities like `scale-x-75` and `-scale-x-150` to scale an element on the x-axis by a percentage of its original width.

**Class Examples:**

*   `scale-x-75`
*   `scale-x-100`
*   `scale-x-125`

**Code Example:**

```html
<img class="scale-x-75 ..." src="/img/mountains.jpg" />
<img class="scale-x-100 ..." src="/img/mountains.jpg" />
<img class="scale-x-125 ..." src="/img/mountains.jpg" />
```

*(Note: The original documentation includes visual examples with images which are not included here. Refer to the original documentation for visual representation.)*

### Scaling on the y-axis

Use the `scale-y-<number>` utilities like `scale-y-75` and `-scale-y-150` to scale an element on the y-axis by a percentage of its original height.

**Class Examples:**

*   `scale-y-75`
*   `scale-y-100`
*   `scale-y-125`

**Code Example:**

```html
<img class="scale-y-75 ..." src="/img/mountains.jpg" />
<img class="scale-y-100 ..." src="/img/mountains.jpg" />
<img class="scale-y-125 ..." src="/img/mountains.jpg" />
```

*(Note: The original documentation includes visual examples with images which are not included here. Refer to the original documentation for visual representation.)*

### Using negative values

Use `-scale-<number>`, `-scale-x-<number>` and `-scale-y-<number>` utilities like `-scale-x-75` and `-scale-125` to mirror and scale down an element by a percentage of its original size.

**Class Examples:**

*   `-scale-x-75`
*   `-scale-100`
*   `-scale-y-125`

**Code Example:**

```html
<img class="-scale-x-75 ..." src="/img/mountains.jpg" />
<img class="-scale-100 ..." src="/img/mountains.jpg" />
<img class="-scale-y-125 ..." src="/img/mountains.jpg" />
```

*(Note: The original documentation includes visual examples with images which are not included here. Refer to the original documentation for visual representation.)*

### Using a custom value

Use the `scale-[<value>]` syntax to set the scale based on a completely custom value.

**Code Example:**

```html
<img class="scale-[1.7] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `scale-(<custom-property>)` syntax.

**Code Example (CSS Variable):**

```html
<img class="scale-(--my-scale) ..." src="/img/mountains.jpg" />
```

This is a shorthand for `scale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Applying on hover

Prefix a `scale` utility with a variant like `hover:*` to only apply the utility in that state.

**Code Example:**

```html
<img class="scale-95 hover:scale-120 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

---

**Note:** This Markdown file is based on the HTML content provided and is intended to be used as context for coding with LLMs.  It describes the Tailwind CSS `scale` utilities. For complete and up-to-date documentation, including visual examples and more details, please refer to the official [Tailwind CSS documentation](https://tailwindcss.com/).
