# Filters

## backdrop-filter

Utilities for applying backdrop filters to an element.

**Classes**

| Class                      | Styles                         |
|----------------------------|--------------------------------|
| `backdrop-filter-none`     | `backdrop-filter: none;`       |
| `backdrop-filter-(<custom-property>)` | `backdrop-filter: var(<custom-property>);` |
| `backdrop-filter-[<value>]` | `backdrop-filter: <value>;`    |

## Examples

### Basic example

Use utilities like `backdrop-blur-xs` and `backdrop-grayscale` to apply filters to an element's backdrop:

**Demonstration:**

*   **backdrop-blur-xs:** (Example image demonstrating backdrop blur xs effect would be here if images could be rendered in markdown in this context)
*   **backdrop-grayscale:** (Example image demonstrating backdrop grayscale effect would be here if images could be rendered in markdown in this context)
*   **combined:** (Example image demonstrating combined backdrop blur xs and grayscale effects would be here if images could be rendered in markdown in this context)

**Code:**

```html
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-grayscale ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs backdrop-grayscale ..."></div>
</div>
```

You can combine the following backdrop filter utilities:

*   [blur](https://tailwindcss.com/docs/backdrop-filter-blur)
*   [brightness](https://tailwindcss.com/docs/backdrop-filter-brightness)
*   [contrast](https://tailwindcss.com/docs/backdrop-filter-contrast)
*   [grayscale](https://tailwindcss.com/docs/backdrop-filter-grayscale)
*   [hue-rotate](https://tailwindcss.com/docs/backdrop-filter-hue-rotate)
*   [invert](https://tailwindcss.com/docs/backdrop-filter-invert)
*   [opacity](https://tailwindcss.com/docs/backdrop-filter-opacity)
*   [saturate](https://tailwindcss.com/docs/backdrop-filter-saturate)
*   [sepia](https://tailwindcss.com/docs/backdrop-filter-sepia)

### Removing filters

Use the `backdrop-filter-none` utility to remove all of the backdrop filters applied to an element:

**Code:**

```html
<div class="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none"></div>
```

### Using a custom value

Use the `backdrop-filter-[<value>]` syntax to set the backdrop filter based on a completely custom value:

**Code:**

```html
<div class="backdrop-filter-[url('filters.svg#filter-id')] ...">
  <!-- ... -->
</div>
```

For CSS variables, you can also use the `backdrop-filter-(<custom-property>)` syntax:

**Code:**

```html
<div class="backdrop-filter-(--my-backdrop-filter) ...">
  <!-- ... -->
</div>
```

This is just a shorthand for `backdrop-filter-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Applying on hover

Prefix a `backdrop-filter` utility with a variant like `hover:*` to only apply the utility in that state:

**Code:**

```html
<div class="backdrop-blur-sm hover:backdrop-filter-none ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### Responsive design

Prefix a `backdrop-filter` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Code:**

```html
<div class="backdrop-blur-sm md:backdrop-filter-none ..."></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
