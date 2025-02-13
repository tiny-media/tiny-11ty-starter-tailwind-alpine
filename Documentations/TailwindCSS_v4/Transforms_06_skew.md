```markdown
# Skew

Utilities for skewing elements with transform.

## Class Styles

### `skew-<number>`

```css
transform: skewX(<number>deg) skewY(<number>deg);
```

### `-skew-<number>`

```css
transform: skewX(-<number>deg) skewY(-<number>deg);
```

### `skew-(<custom-property>)`

```css
transform: skewX(var(<custom-property>)) skewY(var(<custom-property>));
```

### `skew-[<value>]`

```css
transform: skewX(<value>) skewY(<value>);
```

### `skew-x-<number>`

```css
transform: skewX(<number>deg));
```

### `-skew-x-<number>`

```css
transform: skewX(-<number>deg));
```

### `skew-x-(<custom-property>)`

```css
transform: skewX(var(<custom-property>));
```

### `skew-x-[<value>]`

```css
transform: skewX(<value>));
```

### `skew-y-<number>`

```css
transform: skewY(<number>deg);
```

### `-skew-y-<number>`

```css
transform: skewY(-<number>deg);
```

### `skew-y-(<custom-property>)`

```css
transform: skewY(var(<custom-property>));
```

### `skew-y-[<value>]`

```css
transform: skewY(<value>);
```

## Examples

[Examples on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#examples)

### Basic example

[Basic example on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#basic-example)

Use `skew-<number>` utilities like `skew-4` and `skew-10` to skew an element on both axes:

**`skew-3`**

Example image demonstrating `skew-3` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-6`**

Example image demonstrating `skew-6` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-12`**

Example image demonstrating `skew-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="skew-3 ..." src="/img/mountains.jpg" /><img class="skew-6 ..." src="/img/mountains.jpg" /><img class="skew-12 ..." src="/img/mountains.jpg" />
```

### Using negative values

[Using negative values on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#using-negative-values)

Use `-skew-<number>` utilities like `-skew-4` and `-skew-10` to skew an element on both axes in the opposite direction:

**`-skew-3`**

Example image demonstrating `-skew-3` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`-skew-6`**

Example image demonstrating `-skew-6` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`-skew-12`**

Example image demonstrating `-skew-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="-skew-3 ..." src="/img/mountains.jpg" /><img class="-skew-6 ..." src="/img/mountains.jpg" /><img class="-skew-12 ..." src="/img/mountains.jpg" />
```

### Skewing on the x-axis

[Skewing on the x-axis on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#skewing-on-the-x-axis)

Use `skew-x-<number>` utilities like `skew-x-4` and `-skew-x-10` to skew an element on the x-axis:

**`-skew-x-12`**

Example image demonstrating `-skew-x-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-x-6`**

Example image demonstrating `skew-x-6` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-x-12`**

Example image demonstrating `skew-x-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="-skew-x-12 ..." src="/img/mountains.jpg" /><img class="skew-x-6 ..." src="/img/mountains.jpg" /><img class="skew-x-12 ..." src="/img/mountains.jpg" />
```

### Skewing on the y-axis

[Skewing on the y-axis on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#skewing-on-the-y-axis)

Use `skew-y-<number>` utilities like `skew-y-4` and `-skew-y-10` to skew an element on the y-axis:

**`-skew-y-12`**

Example image demonstrating `-skew-y-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-y-6`**

Example image demonstrating `skew-y-6` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**`skew-y-12`**

Example image demonstrating `skew-y-12` class applied to an image.
[Example Image 1](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
[Example Image 2](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="-skew-y-12 ..." src="/img/mountains.jpg" /><img class="skew-y-6 ..." src="/img/mountains.jpg" /><img class="skew-y-12 ..." src="/img/mountains.jpg" />
```

### Using a custom value

[Using a custom value on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#using-a-custom-value)

Use the `skew-[<value>]` syntax to set the skew based on a completely custom value:

```html
<img class="skew-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `skew-(<custom-property>)` syntax:

```html
<img class="skew-(--my-skew) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `skew-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

[Responsive design on Tailwind CSS Docs](https://tailwindcss.com/docs/skew#responsive-design)

Prefix `skewX()` and `skewY()` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="skew-3 md:skew-12 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
```
