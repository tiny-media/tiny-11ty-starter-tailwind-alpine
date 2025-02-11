# Filters

## filter: invert()

Utilities for applying invert filters to an element.

## Class

### Styles

- `invert`
  ```css
  filter: invert(100%);
  ```
- `invert-<number>`
  ```css
  filter: invert(<number>%);
  ```
- `invert-(<custom-property>)`
  ```css
  filter: invert(var(<custom-property>));
  ```
- `invert-[<value>]`
  ```css
  filter: invert(<value>);
  ```

## [Examples](https://tailwindcss.com/docs/filter-invert#examples)

### [Basic example](https://tailwindcss.com/docs/filter-invert#basic-example)

Use utilities like `invert` and `invert-20` to control the color inversion of an element:

**invert-0**
![invert-0 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**invert-20**
![invert-20 example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**invert**
![invert example](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="invert-0" src="/img/mountains.jpg" />
<img class="invert-20" src="/img/mountains.jpg" />
<img class="invert" src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-invert#using-a-custom-value)

Use the `invert-[<value>]` syntax to set the color inversion based on a completely custom value:

```html
<img class="invert-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `invert-(<custom-property>)` syntax:

```html
<img class="invert-(--my-inversion) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-invert#responsive-design)

Prefix a `filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="invert md:invert-0 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
