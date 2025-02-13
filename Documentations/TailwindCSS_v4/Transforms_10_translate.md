# translate

Utilities for translating elements.

## Class Styles

| Class                     | Styles                                                                 |
| ------------------------- | ---------------------------------------------------------------------- |
| `translate-<number>`      | `translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);` |
| `-translate-<number>`     | `translate: calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>);`|
| `translate-<fraction>`    | `translate: calc(<fraction> * 100%) calc(<fraction> * 100%);`         |
| `-translate-<fraction>`   | `translate: calc(<fraction> * -100%) calc(<fraction> * -100%);`        |
| `translate-full`          | `translate: 100% 100%;`                                                |
| `-translate-full`         | `translate: -100% -100%;`                                               |
| `translate-px`            | `translate: 1px 1px;`                                                  |
| `-translate-px`           | `translate: -1px -1px;`                                                 |
| `translate-(<custom-property>)` | `translate: var(<custom-property>) var(<custom-property>);`           |
| `translate-[<value>]`     | `translate: <value> <value>;`                                          |
| `translate-x-<number>`    | `translate: calc(var(--spacing) * <number>) var(--tw-translate-y);`    |
| `-translate-x-<number>`   | `translate: calc(var(--spacing) * -<number>) var(--tw-translate-y);`   |
| `translate-x-<fraction>`  | `translate: calc(<fraction> * 100%) var(--tw-translate-y);`          |
| `-translate-x-<fraction>` | `translate: calc(<fraction> * -100%) var(--tw-translate-y);`         |
| `translate-x-full`        | `translate: 100% var(--tw-translate-y);`                               |
| `-translate-x-full`       | `translate: -100% var(--tw-translate-y);`                              |
| `translate-x-px`          | `translate: 1px var(--tw-translate-y);`                                |
| `-translate-x-px`         | `translate: -1px var(--tw-translate-y);`                               |
| `translate-x-(<custom-property>)`| `translate: var(<custom-property>) var(--tw-translate-y);`        |
| `translate-x-[<value>]`    | `translate: <value> var(--tw-translate-y);`                            |
| `translate-y-<number>`    | `translate: var(--tw-translate-x) calc(var(--spacing) * <number>);`    |
| `-translate-y-<number>`   | `translate: var(--tw-translate-x) calc(var(--spacing) * -<number>);`   |
| `translate-y-<fraction>`  | `translate: var(--tw-translate-x) calc(<fraction> * 100%);`          |
| `-translate-y-<fraction>` | `translate: var(--tw-translate-x) calc(<fraction> * -100%);`         |
| `translate-y-full`        | `translate: var(--tw-translate-x) 100%;`                               |
| `-translate-y-full`       | `translate: var(--tw-translate-x) -100%;`                              |
| `translate-y-px`          | `translate: var(--tw-translate-x) 1px;`                                |
| `-translate-y-px`         | `translate: var(--tw-translate-x) -1px;`                               |
| `translate-y-(<custom-property>)`| `translate: var(--tw-translate-x) var(<custom-property>);`        |
| `translate-y-[<value>]`    | `translate: var(--tw-translate-x) <value>;`                            |
| `translate-z-<number>`    | `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * <number>);` |
| `-translate-z-<number>`   | `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -<number>);`|
| `translate-z-px`          | `translate: var(--tw-translate-x) var(--tw-translate-y) 1px;`         |
| `-translate-z-px`         | `translate: var(--tw-translate-x) var(--tw-translate-y) -1px;`        |
| `translate-z-(<custom-property>)`| `translate: var(--tw-translate-x) var(--tw-translate-y) var(<custom-property>);`|
| `translate-z-[<value>]`    | `translate: var(--tw-translate-x) var(--tw-translate-y) <value>;`        |
| `translate-none`          | `translate: none;`                                                    |

## Examples

### [Using the spacing scale](https://tailwindcss.com/docs/translate#using-the-spacing-scale)

Use `translate-<number>` utilities like `translate-2` and `-translate-4` to translate an element on both axes based on the spacing scale:

**Example Images:**

The following images demonstrate the effect of `translate` classes using the spacing scale.  They show three images of mountains, each translated differently:

*   **-translate-6:**  The first image is translated negatively (up and to the left) by a larger spacing unit.
*   **translate-2:** The second image is translated positively (down and to the right) by a smaller spacing unit.
*   **translate-8:** The third image is translated positively (down and to the right) by a larger spacing unit.

**Code:**

```html
<img class="-translate-6 ..." src="/img/mountains.jpg" />
<img class="translate-2 ..." src="/img/mountains.jpg" />
<img class="translate-8 ..." src="/img/mountains.jpg" />
```

### [Using a percentage](https://tailwindcss.com/docs/translate#using-a-percentage)

Use `translate-<fraction>` utilities like `translate-1/4` and `-translate-full` to translate an element on both axes by a percentage of the element's size:

**Example Images:**

The following images demonstrate the effect of `translate` classes using percentages. They show three images of mountains, each translated differently:

*   **-translate-1/4:** The first image is translated negatively (up and to the left) by 25% of its own dimensions.
*   **translate-1/6:** The second image is translated positively (down and to the right) by approximately 16.67% of its own dimensions.
*   **translate-1/2:** The third image is translated positively (down and to the right) by 50% of its own dimensions.

**Code:**

```html
<img class="-translate-1/4 ..." src="/img/mountains.jpg" />
<img class="translate-1/6 ..." src="/img/mountains.jpg" />
<img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

### [Translating on the x-axis](https://tailwindcss.com/docs/translate#translating-on-the-x-axis)

Use `translate-x-<number>` and `translate-x-<fraction>` utilities like `translate-x-4` and `translate-x-1/4` to translate an element on the x-axis:

**Example Images:**

The following images demonstrate the effect of `translate-x` classes. They show three images of mountains, each translated horizontally:

*   **-translate-x-4:** The first image is translated to the left by a spacing unit.
*   **translate-x-2:** The second image is translated to the right by a smaller spacing unit.
*   **translate-x-1/2:** The third image is translated to the right by 50% of its own width.

**Code:**

```html
<img class="-translate-x-4 ..." src="/img/mountains.jpg" />
<img class="translate-x-2 ..." src="/img/mountains.jpg" />
<img class="translate-x-1/2 ..." src="/img/mountains.jpg" />
```

### [Translating on the y-axis](https://tailwindcss.com/docs/translate#translating-on-the-y-axis)

Use `translate-y-<number>` and `translate-y-<fraction>` utilities like `translate-y-6` and `translate-y-1/3` to translate an element on the y-axis:

**Example Images:**

The following images demonstrate the effect of `translate-y` classes. They show three images of mountains, each translated vertically:

*   **-translate-y-4:** The first image is translated upwards by a spacing unit.
*   **translate-y-2:** The second image is translated downwards by a smaller spacing unit.
*   **translate-y-1/2:** The third image is translated downwards by 50% of its own height.

**Code:**

```html
<img class="-translate-y-4 ..." src="/img/mountains.jpg" />
<img class="translate-y-2 ..." src="/img/mountains.jpg" />
<img class="translate-y-1/2 ..." src="/img/mountains.jpg" />
```

### [Translating on the z-axis](https://tailwindcss.com/docs/translate#translating-on-the-z-axis)

Use `translate-z-<number>` utilities like `translate-z-6` and `-translate-z-12` to translate an element on the z-axis:

**Example Images:**

The following images demonstrate the effect of `translate-z` classes within a 3D transformed parent. They show three images of mountains, each translated along the z-axis (towards or away from the viewer) and rotated in 3D space:

*   **-translate-z-8:** The first image is translated negatively along the z-axis (further away).
*   **translate-z-4:** The second image is translated positively along the z-axis (closer).
*   **translate-z-12:** The third image is translated positively along the z-axis (even closer).

**Code:**

```html
<div class="transform-3d">
  <img class="-translate-z-8 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
  <img class="translate-z-2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
  <img class="translate-z-1/2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
</div>
```

**Note:** that the `translate-z-<number>` utilities require the `transform-3d` utility to be applied to the parent element.

### [Using a custom value](https://tailwindcss.com/docs/translate#using-a-custom-value)

Use the `translate-[<value>]` syntax to set the translation based on a completely custom value:

```html
<img class="translate-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `translate-(<custom-property>)` syntax:

```html
<img class="translate-(--my-translate) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `translate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/translate#responsive-design)

Prefix a `translate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="translate-45 md:translate-60 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
