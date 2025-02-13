# backface-visibility

Utilities for controlling if an element's backface is visible.

This utility in Tailwind CSS allows you to control whether the back face of an element should be visible when facing away from the viewer. This is particularly useful when working with 3D transformations and animations.

## Class Reference

| Class             | Styles                      |
| ----------------- | --------------------------- |
| `backface-hidden` | `backface-visibility: hidden;` |
| `backface-visible`| `backface-visibility: visible;`|

## Examples

### Basic Example

The `backface-visible` utility is used to show the backface of an element, such as a cube, even when it's rotated away from the view. Conversely, `backface-hidden` hides the backface when it's rotated away.

**backface-hidden:**

```html
<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div>
</div>
```

**backface-visible:**

```html
<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div>
</div>
```

**Explanation:**

In these examples, two sets of divs are created to represent a cube. The first set uses `backface-hidden`, which is the default behavior. As you rotate the cube (simulated by the provided classes), the back faces of the cube parts become hidden. In the second set, using `backface-visible` makes the back faces always visible, even when they are rotated away from the viewer.

[View online example](https://tailwindcss.com/docs/backface-visibility#basic-example) for a live demonstration.

### Responsive Design

You can apply `backface-visibility` utilities conditionally at different screen sizes using Tailwind's responsive modifiers. For example, use `md:backface-hidden` to apply `backface-hidden` style only from medium screen sizes and above.

```html
<div class="backface-visible md:backface-hidden ...">
  <!-- ... content where backface-visible is default but hidden on medium screens and up ... -->
</div>
```

This example sets the `backface-visibility` to `visible` by default, but overrides it to `hidden` on medium screens and larger.

[Learn more about Responsive Design in Tailwind CSS](https://tailwindcss.com/docs/responsive-design).

Refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states) for more details on how to use variants like responsive prefixes, hover, focus, and more with backface-visibility utilities.

[Link to the official Tailwind CSS Backface Visibility documentation](https://tailwindcss.com/docs/backface-visibility)
