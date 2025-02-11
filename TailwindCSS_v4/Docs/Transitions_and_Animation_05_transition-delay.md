# Transitions & Animation

## transition-delay

Utilities for controlling the delay of CSS transitions.

| Class                     | Styles                                  |
| ------------------------- | --------------------------------------- |
| `delay-<number>`          | `transition-delay: <number>ms;`        |
| `delay-(<custom-property>)` | `transition-delay: var(<custom-property>);` |
| `delay-[<value>]`         | `transition-delay: <value>;`           |

## Examples

### [Basic example](https://tailwindcss.com/docs/transition-delay#basic-example)

Use utilities like `delay-150` and `delay-700` to set the transition delay of an element in milliseconds:

Hover each button to see the expected behavior

delay-150

delay-300

delay-700

```html
<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button>
<button class="transition delay-300 duration-300 ease-in-out ...">Button B</button>
<button class="transition delay-700 duration-300 ease-in-out ...">Button C</button>
```

### [Using a custom value](https://tailwindcss.com/docs/transition-delay#using-a-custom-value)

Use the `delay-[<value>]` syntax to set the transition delay based on a completely custom value:

```html
<button class="delay-[1s,250ms] ...">  <!-- ... --></button>
```

For CSS variables, you can also use the `delay-(<custom-property>)` syntax:

```html
<button class="delay-(--my-delay) ...">  <!-- ... --></button>
```

This is just a shorthand for `delay-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/transition-delay#responsive-design)

Prefix a `transition-delay` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<button class="delay-150 md:delay-300 ...">  <!-- ... --></button>
```
