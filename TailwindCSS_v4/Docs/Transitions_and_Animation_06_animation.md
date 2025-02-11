# Transitions & Animation

This document provides a comprehensive overview of CSS animation utilities, including predefined classes, usage examples, customization options, and considerations for responsive design and reduced motion.

## Animation Utilities

The following table lists the available animation utility classes and their corresponding CSS styles:

| Class                 | Styles                                                                                                   | Keyframes                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `animate-spin`        | `animation: var(--animate-spin); /* spin 1s linear infinite */`                                        | `@keyframes spin { to { transform: rotate(360deg); } }`                                                  |
| `animate-ping`        | `animation: var(--animate-ping); /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite */`                      | `@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`                                      |
| `animate-pulse`       | `animation: var(--animate-pulse); /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite */`                    | `@keyframes pulse { 50% { opacity: 0.5; } }`                                                              |
| `animate-bounce`      | `animation: var(--animate-bounce); /* bounce 1s infinite */`                                            | `@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }` |
| `animate-none`        | `animation: none;`                                                                                       |                                                                                                          |
| `animate-(<custom-property>)` | `animation: var(<custom-property>);` |  *(Depends on the custom property)*                                                    |
| `animate-[<value>]`   | `animation: <value>;`                                                                                    | *(Depends on the provided value)*                                                                           |

**Key Concepts:**

*   **`animation` Property:**  The CSS `animation` property is a shorthand for setting multiple animation properties at once, including `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
*   **`@keyframes` Rule:** The `@keyframes` rule defines the animation sequence by specifying the styles at different points (keyframes) during the animation.
*   **`cubic-bezier()`:**  A timing function that defines the speed curve of an animation.  It takes four values representing control points.

## Usage Examples

### Adding a Spin Animation

Apply the `animate-spin` class to create a continuous spinning effect, commonly used for loading indicators.

```html
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing…
</button>
```

### Adding a Ping Animation

Use `animate-ping` to simulate a radar ping or ripple effect, suitable for notification badges.

```html
<span class="relative flex size-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>
```

### Adding a Pulse Animation

The `animate-pulse` class creates a subtle fading in and out effect, often used in skeleton loaders.

```html
<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-10 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
```

### Adding a Bounce Animation

`animate-bounce` creates a vertical bouncing animation, useful for drawing attention, such as in "scroll down" indicators.

```html
<svg class="size-6 animate-bounce ...">
  <!-- ... -->
</svg>
```

## Supporting Reduced Motion

Use the `motion-safe` and `motion-reduce` variants to conditionally apply animations based on the user's preference for reduced motion.

```html
<button type="button" class="bg-indigo-600 ..." disabled>
  <svg class="mr-3 size-5 motion-safe:animate-spin ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing</button>
```

*   **`motion-safe:`:**  Applies the animation only if the user *has not* expressed a preference for reduced motion.
*   **`motion-reduce:`:**  Applies alternative styles (or no styles) if the user *has* expressed a preference for reduced motion. This variant is not explicitly shown in the example but is mentioned as an option.  You would typically use it to disable the animation entirely or provide a very subtle alternative.

## Using Custom Values

### Arbitrary Values

Use the `animate-[<value>]` syntax to apply a completely custom animation using an arbitrary value.

```html
<div class="animate-[wiggle_1s_ease-in-out_infinite] ...">
  <!-- ... -->
</div>
```

This allows you to directly specify the `animation` property's value. In this example "wiggle" must correspond to a defined `@keyframe` rule.

### CSS Variables

Use the `animate-(<custom-property>)` syntax as a shorthand for applying animations defined via CSS variables.

```html
<div class="animate-(--my-animation) ...">
  <!-- ... -->
</div>
```

This is equivalent to `animate-[var(<custom-property>)]`.  The `var()` function is automatically added.

## Responsive Design

Apply animations conditionally based on screen size using breakpoint prefixes (variants).

```html
<div class="animate-none md:animate-spin ...">
  <!-- ... -->
</div>
```

In this example, `animate-spin` is only applied at medium (`md`) screen sizes and above.  `animate-none` is applied at smaller screen sizes.

**Breakpoint Variants:**

*   `sm:` Small screens
*   `md:` Medium screens
*   `lg:` Large screens
*   `xl:` Extra-large screens
*   `2xl:` 2x Extra-large screens

Refer to the "variants documentation" for more details on responsive design.

## Customizing the Theme

Customize the animation utilities by defining `--animate-*` theme variables.

```css
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;

  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }
}
```
Now the `animate-wiggle` is created

```html
<div class="animate-wiggle">
  <!-- ... -->
</div>
```
This allows you to create your own named animation utilities and reuse them throughout your project.  The `@theme` directive suggests this is within a configuration context (like a Tailwind CSS configuration file).

**Key Takeaways:**

*   Define custom animations using `@keyframes`.
*   Use CSS variables (`--animate-*`) to manage animation properties.
*   Apply animations using the `animate-<name>` utility classes.
*   Use breakpoint prefixes for responsive animations.
*   Respect user preferences for reduced motion with `motion-safe` and `motion-reduce`.
