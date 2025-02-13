# Columns

Utilities for controlling the number of columns within an element.

## Class and Styles

| Class                  | Styles                                     |
|------------------------|--------------------------------------------|
| `columns-<number>`     | `columns: <number>;`                       |
| `columns-3xs`          | `columns: var(--container-3xs); /* 16rem (256px) */` |
| `columns-2xs`          | `columns: var(--container-2xs); /* 18rem (288px) */` |
| `columns-xs`           | `columns: var(--container-xs); /* 20rem (320px) */` |
| `columns-sm`           | `columns: var(--container-sm); /* 24rem (384px) */` |
| `columns-md`           | `columns: var(--container-md); /* 28rem (448px) */` |
| `columns-lg`           | `columns: var(--container-lg); /* 32rem (512px) */` |
| `columns-xl`           | `columns: var(--container-xl); /* 36rem (576px) */` |
| `columns-2xl`          | `columns: var(--container-2xl); /* 42rem (672px) */` |
| `columns-3xl`          | `columns: var(--container-3xl); /* 48rem (768px) */` |
| `columns-4xl`          | `columns: var(--container-4xl); /* 56rem (896px) */` |
| `columns-5xl`          | `columns: var(--container-5xl); /* 64rem (1024px) */`|
| `columns-6xl`          | `columns: var(--container-6xl); /* 72rem (1152px) */`|
| `columns-7xl`          | `columns: var(--container-7xl); /* 80rem (1280px) */`|
| `columns-auto`         | `columns: auto;`                            |
| `columns-(<custom-property>)` | `columns: var(<custom-property>);`         |
| `columns-[<value>]`    | `columns: <value>;`                         |

## Examples ([Link to Examples in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#examples))

### Setting by number ([Link to Setting by number in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#setting-by-number))

Use `columns-<number>` utilities like `columns-3` to set the number of columns that should be created for the content within an element:

[Example Images - Setting by number](https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
[Example Images - Setting by number](https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)

```html
<div class="columns-3 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... -->
</div>
```

The column width will automatically adjust to accommodate the specified number of columns.

### Setting by width ([Link to Setting by width in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#setting-by-width))

Use utilities like `columns-xs` and `columns-sm` to set the ideal column width for the content within an element:

*Resize the example to see the expected behavior*

[Example Images - Setting by width](https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)
[Example Images - Setting by width](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80)
[Example Images - Setting by width](https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80)
[Example Images - Setting by width](https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80)

```html
<div class="columns-3xs ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... -->
</div>
```

When setting the column width, the number of columns automatically adjusts to ensure they don't get too narrow.

### Setting the column gap ([Link to Setting the column gap in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#setting-the-column-gap))

Use the `gap-<width>` utilities to specify the width between columns:

[Example Images - Setting the column gap](https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
[Example Images - Setting the column gap](https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)

```html
<div class="columns-3 gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... -->
</div>
```

Learn more about the gap utilities in the [gap documentation](https://tailwindcss.com/docs/gap).

### Using a custom value ([Link to Using a custom value in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#using-a-custom-value))

Use the `columns-[<value>]` syntax to set the columns based on a completely custom value:

```html
<div class="columns-[30vw] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `columns-(<custom-property>)` syntax:

```html
<div class="columns-(--my-columns) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `columns-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design ([Link to Responsive design in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#responsive-design))

Prefix a `columns` utility with a breakpoint variant like `sm:` to only apply the utility at small screen sizes and above:

*Resize the example to see the expected behavior*

[Example Images - Responsive design](https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
[Example Images - Responsive design](https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)

```html
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">
  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />
  <img class="aspect-square ..." src="/img/mountains-2.jpg" />
  <img class="aspect-square ..." src="/img/mountains-3.jpg" />
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## Customizing your theme ([Link to Customizing your theme in Tailwind CSS Docs](https://tailwindcss.com/docs/columns#customizing-your-theme))

Use the `--container-*` theme variables to customize the fixed-width column utilities in your project:

```css
@theme {
  --container-4xs: 14rem;
}
```

Now the `columns-4xs` utility can be used in your markup:

```html
<div class="columns-4xs">
  <!-- ... -->
</div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).
