# Filters

## backdrop-filter: brightness()

Utilities for applying backdrop brightness filters to an element.

| Class                         | Styles                                     |
|-------------------------------|--------------------------------------------|
| `backdrop-brightness-<number>` | `backdrop-filter: brightness(<number>%);`   |
| `backdrop-brightness-(<custom-property>)` | `backdrop-filter: brightness(var(<custom-property>));` |
| `backdrop-brightness-[<value>]` | `backdrop-filter: brightness(<value>);`     |

## Examples

### Basic example

Use utilities like `backdrop-brightness-50` and `backdrop-brightness-100` to control an element's backdrop brightness:

**backdrop-brightness-50**

![Example of backdrop-brightness-50](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**backdrop-brightness-150**

![Example of backdrop-brightness-150](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-150 ..."></div>
</div>
```

[View basic example on Tailwind CSS documentation](https://tailwindcss.com/docs/backdrop-filter-brightness#basic-example)

### Using a custom value

Use the `backdrop-brightness-[<value>]` syntax to set the backdrop brightness based on a completely custom value:

```html
<div class="backdrop-brightness-[1.75] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `backdrop-brightness-(<custom-property>)` syntax:

```html
<div class="backdrop-brightness-(--my-backdrop-brightness) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `backdrop-brightness-[var(<custom-property>)]` that adds the `var()` function for you automatically.

[View using a custom value example on Tailwind CSS documentation](https://tailwindcss.com/docs/backdrop-filter-brightness#using-a-custom-value)

### Responsive design

Prefix a `backdrop-filter: brightness()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="backdrop-brightness-110 md:backdrop-brightness-150 ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

[View responsive design example on Tailwind CSS documentation](https://tailwindcss.com/docs/backdrop-filter-brightness#responsive-design)

[Explore more about backdrop-filter-brightness on Tailwind CSS documentation](https://tailwindcss.com/docs/backdrop-filter-brightness)
