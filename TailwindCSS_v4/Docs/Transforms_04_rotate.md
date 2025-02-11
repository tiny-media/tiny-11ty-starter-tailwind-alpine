# Transforms

## rotate

Utilities for rotating elements.

### Class

| Class                         | Styles                                                                   |
|-------------------------------|--------------------------------------------------------------------------|
| `rotate-none`                 | `rotate: none;`                                                          |
| `rotate-<number>`             | `rotate: <number>deg;`                                                   |
| `-rotate-<number>`            | `rotate: calc(<number>deg * -1);`                                         |
| `rotate-(<custom-property>)`   | `rotate: var(<custom-property>);`                                         |
| `rotate-[<value>]`            | `rotate: <value>;`                                                      |
| `rotate-x-<number>`           | `transform: rotateX(<number>deg) var(--tw-rotate-y);`                  |
| `-rotate-x-<number>`          | `transform: rotateX(-<number>deg) var(--tw-rotate-y);`                 |
| `rotate-x-(<custom-property>)` | `transform: rotateX(var(<custom-property>)) var(--tw-rotate-y);`        |
| `rotate-x-[<value>]`          | `transform: rotateX(<value>) var(--tw-rotate-y);`                       |
| `rotate-y-<number>`           | `transform: var(--tw-rotate-x) rotateY(<number>deg);`                  |
| `-rotate-y-<number>`          | `transform: var(--tw-rotate-x) rotateY(-<number>deg);`                 |
| `rotate-y-(<custom-property>)` | `transform: var(--tw-rotate-x) rotateY(var(<custom-property>));`        |
| `rotate-y-[<value>]`          | `transform: var(--tw-rotate-x) rotateY(<value>);`                       |
| `rotate-z-<number>`           | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<number>deg);` |
| `-rotate-z-<number>`          | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-<number>deg);`|
| `rotate-z-(<custom-property>)` | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(<custom-property>));`|
| `rotate-z-[<value>]`          | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<value>);`    |

## Examples

[Examples](https://tailwindcss.com/docs/rotate#examples)

### Basic example

[Basic example](https://tailwindcss.com/docs/rotate#basic-example)

Use `rotate-<number>` utilities like `rotate-45` and `rotate-90` to rotate an element by degrees:

**rotate-45**

Example of an image rotated 45 degrees clockwise.

**rotate-90**

Example of an image rotated 90 degrees clockwise.

**rotate-210**

Example of an image rotated 210 degrees clockwise.

```html
<img class="rotate-45 ..." src="/img/mountains.jpg" />
<img class="rotate-90 ..." src="/img/mountains.jpg" />
<img class="rotate-210 ..." src="/img/mountains.jpg" />
```

### Using negative values

[Using negative values](https://tailwindcss.com/docs/rotate#using-negative-values)

Use `-rotate-<number>` utilities like `-rotate-45` and `-rotate-90` to rotate an element counterclockwise by degrees:

**-rotate-45**

Example of an image rotated 45 degrees counter-clockwise.

**-rotate-90**

Example of an image rotated 90 degrees counter-clockwise.

**-rotate-210**

Example of an image rotated 210 degrees counter-clockwise.

```html
<img class="-rotate-45 ..." src="/img/mountains.jpg" />
<img class="-rotate-90 ..." src="/img/mountains.jpg" />
<img class="-rotate-210 ..." src="/img/mountains.jpg" />
```

### Rotating in 3D space

[Rotating in 3D space](https://tailwindcss.com/docs/rotate#rotating-in-3d-space)

Use `rotate-x-<number>`, `rotate-y-<number>`, and `rotate-z-<number>` utilities like `rotate-x-50`, `-rotate-y-30`, and `rotate-z-45` together to rotate an element in 3D space:

**rotate-x-50 rotate-z-45**

Example of an image rotated 50 degrees around the X axis and 45 degrees around the Z axis.

**rotate-x-15 -rotate-y-30**

Example of an image rotated 15 degrees around the X axis and 30 degrees counter-clockwise around the Y axis.

**rotate-y-25 rotate-z-30**

Example of an image rotated 25 degrees around the Y axis and 30 degrees around the Z axis.

```html
<img class="rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
<img class="rotate-x-15 -rotate-y-30 ..." src="/img/mountains.jpg" />
<img class="rotate-y-25 rotate-z-30 ..." src="/img/mountains.jpg" />
```

### Using a custom value

[Using a custom value](https://tailwindcss.com/docs/rotate#using-a-custom-value)

Use the `rotate-[<value>]` syntax to set the rotation based on a completely custom value:

```html
<img class="rotate-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `rotate-(<custom-property>)` syntax:

```html
<img class="rotate-(--my-rotation) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `rotate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

[Responsive design](https://tailwindcss.com/docs/rotate#responsive-design)

Prefix a `rotate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="rotate-45 md:rotate-60 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
