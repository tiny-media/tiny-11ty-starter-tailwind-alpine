# Interactivity

## scroll-padding

Utilities for controlling an element's scroll offset within a snap container.

| Class                     | Styles                                         |
| ------------------------- | ---------------------------------------------- |
| `scroll-p-<number>`       | `scroll-padding: calc(var(--spacing) * <number>);` |
| `-scroll-p-<number>`      | `scroll-padding: calc(var(--spacing) * -<number>);`|
| `scroll-p-(<custom-property>)` | `scroll-padding: var(<custom-property>);`      |
| `scroll-p-[<value>]`      | `scroll-padding: <value>;`                     |
| `scroll-px-<number>`      | `scroll-padding-inline: calc(var(--spacing) * <number>);` |
| `-scroll-px-<number>`     | `scroll-padding-inline: calc(var(--spacing) * -<number>);`|
| `scroll-px-(<custom-property>)`| `scroll-padding-inline: var(<custom-property>);`   |
| `scroll-px-[<value>]`     | `scroll-padding-inline: <value>;`              |
| `scroll-py-<number>`      | `scroll-padding-block: calc(var(--spacing) * <number>);`|
| `-scroll-py-<number>`     | `scroll-padding-block: calc(var(--spacing) * -<number>);`|
| `scroll-py-(<custom-property>)`| `scroll-padding-block: var(<custom-property>);`    |
| `scroll-py-[<value>]`     | `scroll-padding-block: <value>;`               |
| `scroll-ps-<number>`      | `scroll-padding-inline-start: calc(var(--spacing) * <number>);` |
| `-scroll-ps-<number>`     | `scroll-padding-inline-start: calc(var(--spacing) * -<number>);`|
| `scroll-ps-(<custom-property>)`| `scroll-padding-inline-start: var(<custom-property>);` |
| `scroll-ps-[<value>]`     | `scroll-padding-inline-start: <value>;`        |
| `scroll-pe-<number>`      | `scroll-padding-inline-end: calc(var(--spacing) * <number>);` |
| `-scroll-pe-<number>`     | `scroll-padding-inline-end: calc(var(--spacing) * -<number>);`|
| `scroll-pe-(<custom-property>)`| `scroll-padding-inline-end: var(<custom-property>);`  |
| `scroll-pe-[<value>]`     | `scroll-padding-inline-end: <value>;`         |
| `scroll-pt-<number>`      | `scroll-padding-top: calc(var(--spacing) * <number>);` |
| `-scroll-pt-<number>`     | `scroll-padding-top: calc(var(--spacing) * -<number>);`|
| `scroll-pt-(<custom-property>)`| `scroll-padding-top: var(<custom-property>);`     |
| `scroll-pt-[<value>]`     | `scroll-padding-top: <value>;`                |
| `scroll-pr-<number>`      | `scroll-padding-right: calc(var(--spacing) * <number>);`|
| `-scroll-pr-<number>`     | `scroll-padding-right: calc(var(--spacing) * -<number>);`|
| `scroll-pr-(<custom-property>)`| `scroll-padding-right: var(<custom-property>);`   |
| `scroll-pr-[<value>]`     | `scroll-padding-right: <value>;`              |
| `scroll-pb-<number>`      | `scroll-padding-bottom: calc(var(--spacing) * <number>);`|
| `-scroll-pb-<number>`     | `scroll-padding-bottom: calc(var(--spacing) * -<number>);`|
| `scroll-pb-(<custom-property>)`| `scroll-padding-bottom: var(<custom-property>);`  |
| `scroll-pb-[<value>]`     | `scroll-padding-bottom: <value>;`             |
| `scroll-pl-<number>`      | `scroll-padding-left: calc(var(--spacing) * <number>);` |
| `-scroll-pl-<number>`     | `scroll-padding-left: calc(var(--spacing) * -<number>);`|
| `scroll-pl-(<custom-property>)`| `scroll-padding-left: var(<custom-property>);`    |
| `scroll-pl-[<value>]`     | `scroll-padding-left: <value>;`               |

## [Examples](https://tailwindcss.com/docs/scroll-padding#examples)

### [Basic example](https://tailwindcss.com/docs/scroll-padding#basic-example)

Use the `scroll-pt-<number>`, `scroll-pr-<number>`, `scroll-pb-<number>`, and `scroll-pl-<number>` utilities like `scroll-pl-4` and `scroll-pt-6` to set the scroll offset of an element within a snap container:

Scroll in the grid of images to see the expected behavior

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

```html
<div class="snap-x scroll-pl-6 ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
</div>
```

### [Using logical properties](https://tailwindcss.com/docs/scroll-padding#using-logical-properties)

Use the `scroll-ps-<number>` and `scroll-pe-<number>` utilities to set the `scroll-padding-inline-start` and `scroll-padding-inline-end` logical properties, which map to either the left or right side based on the text direction:

Scroll in the grid of images to see the expected behavior

Left-to-right

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

Right-to-left

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

```html
<div dir="ltr">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
```

### [Using negative values](https://tailwindcss.com/docs/scroll-padding#using-negative-values)

To use a negative scroll padding value, prefix the class name with a dash to convert it to a negative value:

```html
<div class="-scroll-ps-6 snap-x ...">
  <!-- ... -->
</div>
```

### [Using a custom value](https://tailwindcss.com/docs/scroll-padding#using-a-custom-value)

Use utilities like `scroll-pl-[<value>]` and `scroll-pe-[<value>]` to set the scroll padding based on a completely custom value:

```html
<div class="scroll-pl-[24rem] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `scroll-pl-(<custom-property>)` syntax:

```html
<div class="scroll-pl-(--my-scroll-padding) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `scroll-pl-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/scroll-padding#responsive-design)

Prefix a `scroll-padding` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="scroll-p-8 md:scroll-p-0 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/scroll-padding#customizing-your-theme)

The `scroll-p-<number>`, `scroll-px-<number>`, `scroll-py-<number>`, `scroll-ps-<number>`, `scroll-pe-<number>`, `scroll-pt-<number>`, `scroll-pr-<number>`, `scroll-pb-<number>`, and `scroll-pl-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).
