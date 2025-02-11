# Typography: line-clamp

Utilities for clamping text to a specific number of lines.

## Class Table

| Class                     | Styles                                                                                               

## Examples

### Basic example

Use `line-clamp-<number>` utilities like `line-clamp-2` and `line-clamp-3` to truncate multi-line text after a specific number of lines:

```html
<article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">
    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
    enim.
  </p>
  <div>
    <img src="/img/lindsay.jpg" />
    Lindsay Walton
  </div>
</article>
```

### Undoing line clamping

Use `line-clamp-none` to undo a previously applied line clamp utility:

```html
<p class="line-clamp-3 lg:line-clamp-none">
  <!-- ... -->
</p>
```

### Using a custom value

Use the `line-clamp-[<value>]` syntax to set the number of lines based on a completely custom value:

```html
<p class="line-clamp-[calc(var(--characters)/100)] ...">
  <!-- ... -->
</p>
```

For CSS variables, you can also use the `line-clamp-(<custom-property>)` syntax:

```html
<p class="line-clamp-(--my-line-count) ...">
  <!-- ... -->
</p>
```

This is just a shorthand for `line-clamp-[var(<custom-property>)]` that adds the `var()` function for you automatically.

## Responsive design

Prefix a `line-clamp` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="line-clamp-3 md:line-clamp-4 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](variants documentation link here). <!-- Replace with actual link if available -->