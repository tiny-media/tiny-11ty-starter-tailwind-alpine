# Borders

## outline-offset

Utilities for controlling the offset of an element's outline.

| Class                       | Styles                                  |
| :-------------------------- | :-------------------------------------- |
| `outline-offset-<number>`   | `outline-offset: <number>px;`          |
| `-outline-offset-<number>`  | `outline-offset: calc(<number>px * -1);` |
| `outline-offset-(<custom-property>)` | `outline-offset: var(<custom-property>);` |
| `outline-offset-[<value>]`    | `outline-offset: <value>;`             |

## [Examples](https://tailwindcss.com/docs/outline-offset#examples)

### [Basic example](https://tailwindcss.com/docs/outline-offset#basic-example)

Use utilities like `outline-offset-2` and `outline-offset-4` to change the offset of an element's outline:

**Classes:**

* `outline-offset-0`
* `outline-offset-2`
* `outline-offset-4`

**Example Code:**

```html
<button class="outline-2 outline-offset-0 ...">Button A</button>
<button class="outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-2 outline-offset-4 ...">Button C</button>
```

### [Using a custom value](https://tailwindcss.com/docs/outline-offset#using-a-custom-value)

Use the `outline-offset-[<value>]` syntax to set the outline offset based on a completely custom value:

**Example Code:**

```html
<div class="outline-offset-[2vw] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `outline-offset-(<custom-property>)` syntax:

**Example Code:**

```html
<div class="outline-offset-(--my-outline-offset) ...">  <!-- ... --></div>
```

This is just a shorthand for `outline-offset-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/outline-offset#responsive-design)

Prefix an `outline-offset` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Example Code:**

```html
<div class="outline md:outline-offset-2 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
