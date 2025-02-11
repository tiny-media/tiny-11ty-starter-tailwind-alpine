# Opacity

Utilities for controlling the opacity of an element.

## Class Syntax

Tailwind CSS provides different class syntaxes to control the opacity of elements:

### `opacity-<number>`

Sets the opacity using predefined percentage values. The `<number>` is a value from the Tailwind CSS opacity scale, typically ranging from 0 to 100 in increments of 5 or 25.

**Styles:**

```css
opacity: <number>%;
```

**Example:**

- `opacity-0`:  `opacity: 0%;` (completely transparent)
- `opacity-25`: `opacity: 25%;`
- `opacity-50`: `opacity: 50%;`
- `opacity-75`: `opacity: 75%;`
- `opacity-100`: `opacity: 100%;` (completely opaque)

### `opacity-(<custom-property>)`

Sets the opacity using a CSS custom property (variable). This is useful for dynamic opacity values controlled by JavaScript or other CSS.

**Styles:**

```css
opacity: var(<custom-property>);
```

**Example:**

- `opacity-(--my-opacity)`: `opacity: var(--my-opacity);`

**Note:** This is a shorthand for `opacity-[var(<custom-property>)]`.

### `opacity-[<value>]`

Sets the opacity using an arbitrary value. This allows you to specify any opacity value, including decimals or CSS variables directly.

**Styles:**

```css
opacity: <value>;
```

**Example:**

- `opacity-[.67]`: `opacity: 0.67;` (sets opacity to 67%)
- `opacity-[0.333]`: `opacity: 0.333;`
- `opacity-[var(--my-opacity)]`: `opacity: var(--my-opacity);` (explicitly using `var()` for custom properties)

## Examples

### Basic Example

Use `opacity-<number>` utilities like `opacity-25` and `opacity-100` to set the opacity of an element:

**Code:**

```html
<button class="bg-indigo-500 opacity-100 text-white font-bold py-2 px-4 rounded">opacity-100</button>
<button class="bg-indigo-500 opacity-75 text-white font-bold py-2 px-4 rounded">opacity-75</button>
<button class="bg-indigo-500 opacity-50 text-white font-bold py-2 px-4 rounded">opacity-50</button>
<button class="bg-indigo-500 opacity-25 text-white font-bold py-2 px-4 rounded">opacity-25</button>
```

**Visual Representation (Conceptual):**

Imagine four indigo buttons, each with decreasing opacity from left to right. The first is fully opaque, and the last is almost transparent.

### Applying Conditionally (Variants)

Prefix an `opacity` utility with a variant like `disabled:*` to only apply the utility in that state. This is useful for changing opacity based on different states like `hover`, `focus`, `disabled`, etc.

**Code:**

```html
<input class="opacity-100 disabled:opacity-75 bg-gray-200 p-2 rounded" type="text" placeholder="Input field" disabled />
```

In this example, the input field is normally fully opaque (`opacity-100`). When it's in the `disabled` state, the `disabled:opacity-75` variant is applied, making it 75% opaque.

**Learn more about variants:** [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states)

### Using a Custom Value

Use the `opacity-[<value>]` syntax to set the opacity based on a completely custom value. This is helpful when you need precise control over opacity that isn't covered by the default Tailwind scale.

**Code Example with decimal value:**

```html
<div class="bg-green-500 opacity-[.67] text-white p-4 rounded">
  This div has 67% opacity.
</div>
```

**Code Example with CSS variable:**

```html
<div class="bg-blue-500 opacity-(--my-opacity) text-white p-4 rounded" style="--my-opacity: .4;">
  This div's opacity is controlled by the --my-opacity CSS variable (40%).
</div>
```

In the CSS variable example, the `opacity-(--my-opacity)` class is used, and the actual opacity value is set using inline styles with `--my-opacity: .4;`.

### Responsive Design

Prefix an `opacity` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above. This allows you to change opacity based on screen size for responsive layouts.

**Code:**

```html
<button class="opacity-50 md:opacity-100 bg-purple-500 text-white font-bold py-2 px-4 rounded">
  Initially 50% opacity, 100% opacity on medium screens and above.
</button>
```

On small screens, the button will have `opacity-50`. On medium screens (`md:`) and larger, the `md:opacity-100` variant will override the base opacity, making the button fully opaque.

**Learn more about responsive design and breakpoints:** [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) (The same variants documentation link is relevant for responsive modifiers as well).
