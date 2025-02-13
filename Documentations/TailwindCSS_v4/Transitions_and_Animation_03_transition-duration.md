# Transitions & Animation

## transition-duration

Utilities for controlling the duration of CSS transitions.

This utility allows you to specify the length of time a transition animation should take to complete. You can control the `transition-duration` CSS property using these utilities.

| Class                     | Styles                                  |
| ------------------------- | --------------------------------------- |
| `duration-<number>`       | `transition-duration: <number>ms;`      |
| `duration-initial`        | `transition-duration: initial;`       |
| `duration-(<custom-property>)` | `transition-duration: var(<custom-property>);` |
| `duration-[<value>]`      | `transition-duration: <value>;`         |

Numbers in the `duration-<number>` class refer to milliseconds.

## Examples

### [Basic example](https://tailwindcss.com/docs/transition-duration#basic-example)

Use utilities like `duration-150` and `duration-700` to set the transition duration of an element in milliseconds. Hover over the buttons below to see the different transition speeds.

**Code:**
```html
<button class="transition duration-150 ease-in-out ...">Button A</button>
<button class="transition duration-300 ease-in-out ...">Button B</button>
<button class="transition duration-700 ease-in-out ...">Button C</button>
```

**Explanation:**

*   Each button has the `transition` class to enable transitions.
*   `duration-150`, `duration-300`, and `duration-700` classes set the `transition-duration` to 150ms, 300ms, and 700ms respectively.
*   `ease-in-out` is an example of a transition timing function utility (not directly related to duration, but often used together).
*   The `...` represents other Tailwind classes that might be applied for styling and functionality.

This example demonstrates how different `duration-` utilities affect the speed of a transition, making some transitions faster and others slower.

### [Using a custom value](https://tailwindcss.com/docs/transition-duration#using-a-custom-value)

For more specific durations, you can use the `duration-[<value>]` syntax to set the transition duration to any arbitrary CSS value, including units like `s` (seconds) or `ms` (milliseconds).

**Code:**
```html
<button class="duration-[1s,15s] ...">  <!-- ... --></button>
```

**Explanation:**

*   `duration-[1s,15s]` sets the `transition-duration` to `1s,15s`. This example shows that you can even specify multiple durations, which might be relevant for transitions on different properties.  (Note:  While the example shows two values, in most common transition scenarios, you'd likely use a single value for `transition-duration`).

You can also use CSS variables with the `duration-(<custom-property>)` syntax. This is a shorthand for `duration-[var(<custom-property>)]`.

**Code:**
```html
<button class="duration-(--my-duration) ...">  <!-- ... --></button>
```

**Explanation:**

*   `duration-(--my-duration)` sets the `transition-duration` to the value of the CSS variable `--my-duration`.
*   This is useful for theming and dynamically controlling transition durations through CSS variables.

### [Responsive design](https://tailwindcss.com/docs/transition-duration#responsive-design)

You can apply transition duration utilities conditionally at different screen sizes using Tailwind's responsive modifiers.  Prefix a `transition-duration` utility with a breakpoint variant like `md:` to apply it only at medium screen sizes and above.

**Code:**
```html
<button class="duration-0 md:duration-150 ...">  <!-- ... --></button>
```

**Explanation:**

*   `duration-0` sets the `transition-duration` to 0ms (effectively disabling transitions) by default on smaller screens.
*   `md:duration-150` overrides the `duration-0` setting for medium screens and larger, setting the `transition-duration` to 150ms on those screen sizes.

This allows you to have different transition behaviors based on the screen size, optimizing for different devices and user experiences.

**Further Information:**

For more details and advanced usage, refer to the [Tailwind CSS transition-duration documentation](https://tailwindcss.com/docs/transition-duration).

Learn more about responsive design and breakpoint variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
