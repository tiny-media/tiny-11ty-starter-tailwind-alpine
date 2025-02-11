# Transitions & Animation

## transition-behavior

Utilities to control the behavior of CSS transitions.

This utility allows you to control how CSS transitions behave, specifically when dealing with properties that have discrete values.

| Class               | Styles                          |
| ------------------- | ------------------------------- |
| `transition-normal` | `transition-behavior: normal;`    |
| `transition-discrete`| `transition-behavior: allow-discrete;` |

- **`transition-normal`**:  The default behavior for transitions. Transitions will interpolate smoothly between values whenever possible.
- **`transition-discrete`**:  Transitions will only occur at the start and end of the transition duration, without any intermediate steps. This is useful for properties that don't have continuous values, like `display` (e.g., from `hidden` to `block`).

## Examples

[Examples on Tailwind CSS Docs](https://tailwindcss.com/docs/transition-behavior#examples)

### Basic example

[Basic example on Tailwind CSS Docs](https://tailwindcss.com/docs/transition-behavior#basic-example)

Use the `transition-discrete` utility to start transitions when changing properties with a discrete set of values, such as elements that change from `hidden` to `block`:

Interact with the checkboxes to see the expected behavior

```html
<label class="peer ...">  <input type="checkbox" checked /></label>
<button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ...">  I hide</button>
<label class="peer ...">  <input type="checkbox" checked /></label>
<button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ...">  I fade out</button>
```

**Explanation:**

In this example, two buttons are shown. Both are initially hidden and transition their `opacity` using `transition-all` when a checkbox (acting as a peer) is checked.

- **"I hide" button:** Uses default transition behavior (`transition-normal` implicitly). When the checkbox is unchecked, it abruptly disappears because `display: block` to `display: hidden` is not a smooth transition.
- **"I fade out" button:** Uses `transition-discrete`.  Even though it's transitioning `opacity`, the `transition-discrete` behavior is applied.  However, in this specific example, the effect might not be drastically different for opacity alone, as opacity is a continuous property. The key benefit of `transition-discrete` is more apparent when transitioning properties like `display`.

**Note:** The provided HTML snippet is illustrative and likely uses Tailwind CSS classes (`hidden`, `transition-all`, `not-peer-has-checked:opacity-0`, `peer-has-checked:block`, `peer`, `...`).  To fully understand the example, you'd need to refer to the complete Tailwind CSS documentation and context of these classes.

### Responsive design

[Responsive design on Tailwind CSS Docs](https://tailwindcss.com/docs/transition-behavior#responsive-design)

Prefix a `transition-behavior` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<button class="transition-discrete md:transition-normal ...">  <!-- ... --></button>
```

**Explanation:**

In this responsive example, the `transition-discrete` behavior is applied by default. However, on medium screens (`md:`) and larger, the `transition-normal` behavior will be applied instead, overriding the default for those screen sizes.

This is useful when you want different transition behaviors based on screen size or other media conditions.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
