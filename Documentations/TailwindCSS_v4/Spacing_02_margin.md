# Spacing

## Margin

Utilities for controlling an element's margin.

| Class                     | Styles  
- `m-8`

    ```html
    <div class="m-8 ...">m-8</div>
    ```

- `mt-6`
- `mr-4`
- `mb-8`
- `ml-2`

    ```html
    <div class="mt-6 ...">mt-6</div>
    <div class="mr-4 ...">mr-4</div>
    <div class="mb-8 ...">mb-8</div>
    <div class="ml-2 ...">ml-2</div>
    ```

- `mx-8`

    ```html
    <div class="mx-8 ...">mx-8</div>
    ```

- `my-8`

    ```html
    <div class="my-8 ...">my-8</div>
    ```

- \`-mt-8`

    ```html
    <div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div>
    <div class="-mt-8 bg-sky-300 ...">-mt-8</div>
    ```

- Left-to-right
  - `ms-8`
  - `me-8`
- Right-to-left
  - `ms-8`
  - `me-8`

    ```html
    <div>
      <div dir="ltr">
        <div class="ms-8 ...">ms-8</div>
        <div class="me-8 ...">me-8</div>
      </div>
      <div dir="rtl">
        <div class="ms-8 ...">ms-8</div>
        <div class="me-8 ...">me-8</div>
      </div>
    </div>
    ```

- `space-x-4`

    ```html
    <div class="flex space-x-4 ...">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    ```

#### Reversing children order

- `space-x-4 space-x-reverse`

    ```html
    <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    ```

- `m-[5px]`

    ```html
    <div class="m-[5px] ...">
      <!-- ... -->
    </div>
    ```

- `m-(--my-margin)`

    ```html
    <div class="m-(--my-margin) ...">
      <!-- ... -->
    </div>
    ```

- `mt-4 md:mt-8`

    ```html
    <div class="mt-4 md:mt-8 ...">
      <!-- ... -->
    </div>
    ```

## [Examples](https://tailwindcss.com/docs/margin#examples)

### [Basic example](https://tailwindcss.com/docs/margin#basic-example)

Use `m-<number>` utilities like `m-4` and `m-8` to control the margin on all sides of an element:

`m-8`

```html
<div class="m-8 ...">m-8</div>
```

### [Adding margin to a single side](https://tailwindcss.com/docs/margin#adding-margin-to-a-single-side)

Use `mt-<number>`, `mr-<number>`, `mb-<number>`, and `ml-<number>` utilities like `ml-2` and `mt-6` to control the margin on one side of an element:

`mt-6`

`mr-4`

`mb-8`

`ml-2`

```html
<div class="mt-6 ...">mt-6</div><div class="mr-4 ...">mr-4</div><div class="mb-8 ...">mb-8</div><div class="ml-2 ...">ml-2</div>
```

### [Adding horizontal margin](https://tailwindcss.com/docs/margin#adding-horizontal-margin)

Use `mx-<number>` utilities like `mx-4` and `mx-8` to control the horizontal margin of an element:

`mx-8`

```html
<div class="mx-8 ...">mx-8</div>
```

### [Adding vertical margin](https://tailwindcss.com/docs/margin#adding-vertical-margin)

Use `my-<number>` utilities like `my-4` and `my-8` to control the vertical margin of an element:

`my-8`

```html
<div class="my-8 ...">my-8</div>
```

### [Using negative values](https://tailwindcss.com/docs/margin#using-negative-values)

To use a negative margin value, prefix the class name with a dash to convert it to a negative value:

`\-mt-8`

```html
<div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div><div class="-mt-8 bg-sky-300 ...">-mt-8</div>
```

### [Using logical properties](https://tailwindcss.com/docs/margin#using-logical-properties)

Use `ms-<number>` and `me-<number>` utilities like `ms-4` and `me-8` to set the `margin-inline-start` and `margin-inline-end` logical properties:

**Left-to-right**

`ms-8`

`me-8`

**Right-to-left**

`ms-8`

`me-8`

```html
<div>  <div dir="ltr">    <div class="ms-8 ...">ms-8</div>    <div class="me-8 ...">me-8</div>  </div>  <div dir="rtl">    <div class="ms-8 ...">ms-8</div>  <div class="me-8 ...">me-8</div>  </div></div>
```

### [Adding space between children](https://tailwindcss.com/docs/margin#adding-space-between-children)

Use `space-x-<number>` and `space-y-<number>` utilities like `space-x-4` and `space-y-8` to control the space between elements:

`space-x-4`

```html
<div class="flex space-x-4 ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

#### [Reversing children order](https://tailwindcss.com/docs/margin#reversing-children-order)

If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `space-x-reverse` or `space-y-reverse` utilities to ensure the space is added to the correct side of each element:

`space-x-4 space-x-reverse`

```html
<div class="flex flex-row-reverse space-x-4 space-x-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

#### [Limitations](https://tailwindcss.com/docs/margin#limitations)

The space utilities are really just a shortcut for adding margin to all-but-the-last-item in a group, and aren't designed to handle complex cases like grids, layouts that wrap, or situations where the children are rendered in a complex custom order rather than their natural DOM order.

For those situations, it's better to use the [gap utilities](https://tailwindcss.com/docs/gap) when possible, or add margin to every element with a matching negative margin on the parent.

Additionally, the space utilities are not designed to work together with the [divide utilities](https://tailwindcss.com/docs/border-width#between-children). For those situations, consider adding margin/padding utilities to the children instead.

### [Using a custom value](https://tailwindcss.com/docs/margin#using-a-custom-value)

Use utilities like `m-[<value>]`,`mx-[<value>]`, and `mb-[<value>]` to set the margin based on a completely custom value:

`m-[5px]`

```html
<div class="m-[5px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `m-(<custom-property>)` syntax:

`m-(--my-margin)`

```html
<div class="m-(--my-margin) ...">  <!-- ... --></div>
```

This is just a shorthand for `m-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/margin#responsive-design)

Prefix a `margin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

`mt-4 md:mt-8`

```html
<div class="mt-4 md:mt-8 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/margin#customizing-your-theme)

The `m-<number>`,`mx-<number>`,`my-<number>`,`ms-<number>`,`me-<number>`,`mt-<number>`,`mr-<number>`,`mb-<number>`, and `ml-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).