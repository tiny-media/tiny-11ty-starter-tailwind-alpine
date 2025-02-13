# Interactivity

## scroll-margin

Utilities for controlling the scroll offset around items in a snap container.

| Class                     | Styles                                         |
| ------------------------- | ---------------------------------------------- |
| `scroll-m-<number>`       | `scroll-margin: calc(var(--spacing) * <number>);` |
| `-scroll-m-<number>`      | `scroll-margin: calc(var(--spacing) * -<number>);`|
| `scroll-m-(<custom-property>)` | `scroll-margin: var(<custom-property>);`       |
| `scroll-m-[<value>]`      | `scroll-margin: <value>;`                      |
| `scroll-mx-<number>`      | `scroll-margin-inline: calc(var(--spacing) * <number>);` |
| `-scroll-mx-<number>`     | `scroll-margin-inline: calc(var(--spacing) * -<number>);`|
| `scroll-mx-(<custom-property>)`| `scroll-margin-inline: var(<custom-property>);`    |
| `scroll-mx-[<value>]`     | `scroll-margin-inline: <value>;`               |
| `scroll-my-<number>`      | `scroll-margin-block: calc(var(--spacing) * <number>);` |
| `-scroll-my-<number>`     | `scroll-margin-block: calc(var(--spacing) * -<number>);`|
| `scroll-my-(<custom-property>)`| `scroll-margin-block: var(<custom-property>);`     |
| `scroll-my-[<value>]`     | `scroll-margin-block: <value>;`                |
| `scroll-ms-<number>`      | `scroll-margin-inline-start: calc(var(--spacing) * <number>);` |
| `-scroll-ms-<number>`     | `scroll-margin-inline-start: calc(var(--spacing) * -<number>);`|
| `scroll-ms-(<custom-property>)`| `scroll-margin-inline-start: var(<custom-property>);`  |
| `scroll-ms-[<value>]`     | `scroll-margin-inline-start: <value>;`             |
| `scroll-me-<number>`      | `scroll-margin-inline-end: calc(var(--spacing) * <number>);` |
| `-scroll-me-<number>`     | `scroll-margin-inline-end: calc(var(--spacing) * -<number>);`|
| `scroll-me-(<custom-property>)`| `scroll-margin-inline-end: var(<custom-property>);`   |
| `scroll-me-[<value>]`     | `scroll-margin-inline-end: <value>;`              |
| `scroll-mt-<number>`      | `scroll-margin-top: calc(var(--spacing) * <number>);` |
| `-scroll-mt-<number>`     | `scroll-margin-top: calc(var(--spacing) * -<number>);`|
| `scroll-mt-(<custom-property>)`| `scroll-margin-top: var(<custom-property>);`        |
| `scroll-mt-[<value>]`     | `scroll-margin-top: <value>;`                   |
| `scroll-mr-<number>`      | `scroll-margin-right: calc(var(--spacing) * <number>);` |
| `-scroll-mr-<number>`     | `scroll-margin-right: calc(var(--spacing) * -<number>);`|
| `scroll-mr-(<custom-property>)`| `scroll-margin-right: var(<custom-property>);`       |
| `scroll-mr-[<value>]`     | `scroll-margin-right: <value>;`                  |
| `scroll-mb-<number>`      | `scroll-margin-bottom: calc(var(--spacing) * <number>);`|
| `-scroll-mb-<number>`     | `scroll-margin-bottom: calc(var(--spacing) * -<number>);`|
| `scroll-mb-(<custom-property>)`| `scroll-margin-bottom: var(<custom-property>);`      |
| `scroll-mb-[<value>]`     | `scroll-margin-bottom: <value>;`                 |
| `scroll-ml-<number>`      | `scroll-margin-left: calc(var(--spacing) * <number>);` |
| `-scroll-ml-<number>`     | `scroll-margin-left: calc(var(--spacing) * -<number>);`|
| `scroll-ml-(<custom-property>)`| `scroll-margin-left: var(<custom-property>);`       |
| `scroll-ml-[<value>]`     | `scroll-margin-left: <value>;`                  |

## [Examples](https://tailwindcss.com/docs/scroll-margin#examples)

### [Basic example](https://tailwindcss.com/docs/scroll-margin#basic-example)

Use the `scroll-mt-<number>`, `scroll-mr-<number>`, `scroll-mb-<number>`, and `scroll-ml-<number>` utilities like `scroll-ml-4` and `scroll-mt-6` to set the scroll offset around items within a snap container:

Scroll in the grid of images to see the expected behavior

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

```html
<div class="snap-x ...">
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-01.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-02.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-03.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-04.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-05.jpg"/>
  </div>
</div>
```

### [Using negative values](https://tailwindcss.com/docs/scroll-margin#using-negative-values)

To use a negative scroll margin value, prefix the class name with a dash to convert it to a negative value:

```html
<div class="snap-start -scroll-ml-6 ...">
  <!-- ... -->
</div>
```

### [Using logical properties](https://tailwindcss.com/docs/scroll-margin#using-logical-properties)

Use the `scroll-ms-<number>` and `scroll-me-<number>` utilities to set the `scroll-margin-inline-start` and `scroll-margin-inline-end` [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), which map to either the left or right side based on the text direction:

Scroll in the grid of images to see the expected behavior

Left-to-right

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

Right-to-left

![image](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![image](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)

```html
<div dir="ltr">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div>
```

For more control, you can also use the [LTR and RTL modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) to conditionally apply specific styles depending on the current text direction.

### [Using a custom value](https://tailwindcss.com/docs/scroll-margin#using-a-custom-value)

Use utilities like `scroll-ml-[<value>]` and `scroll-me-[<value>]` to set the scroll margin based on a completely custom value:

```html
<div class="scroll-ml-[24rem] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `scroll-ml-(<custom-property>)` syntax:

```html
<div class="scroll-ml-(--my-scroll-margin) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `scroll-ml-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/scroll-margin#responsive-design)

Prefix a `scroll-margin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="scroll-m-8 md:scroll-m-0 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/scroll-margin#customizing-your-theme)

The `scroll-m-<number>`,`scroll-mx-<number>`,`scroll-my-<number>`,`scroll-ms-<number>`,`scroll-me-<number>`,`scroll-mt-<number>`,`scroll-mr-<number>`,`scroll-mb-<number>`, and `scroll-ml-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).
