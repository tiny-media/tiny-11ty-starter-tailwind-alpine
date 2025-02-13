# Box Shadow Utilities

Utilities for controlling the box shadow of an element.

## Shadow Classes

| Class                 | Styles                                                                 |
| --------------------- | ---------------------------------------------------------------------- |
| `shadow-2xs`          | `box-shadow: var(--shadow-2xs);` /* 0 1px rgb(0 0 0 / 0.05) */        |
| `shadow-xs`           | `box-shadow: var(--shadow-xs);` /* 0 1px 2px 0 rgb(0 0 0 / 0.05) */   |
| `shadow-sm`           | `box-shadow: var(--shadow-sm);` /* 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) */ |
| `shadow-md`           | `box-shadow: var(--shadow-md);` /* 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) */ |
| `shadow-lg`           | `box-shadow: var(--shadow-lg);` /* 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) */ |
| `shadow-xl`           | `box-shadow: var(--shadow-xl);` /* 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) */ |
| `shadow-2xl`          | `box-shadow: var(--shadow-2xl);` /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */ |
| `shadow-none`         | `box-shadow: 0 0 #0000;`                                              |
| `shadow-(<custom-property>)` | `box-shadow: var(<custom-property>);`                               |
| `shadow-(color:<custom-property>)` | `--tw-shadow-color var(<custom-property>);`                      |

## Examples

### Basic example

Use utilities like `shadow-sm` and `shadow-lg` to apply different sized outer box shadows to an element:

- `shadow-md`
- `shadow-lg`
- `shadow-xl`

```html
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
```

### Setting the shadow color

Use utilities like `shadow-indigo-500` and `shadow-cyan-500/50` to change the color of a box shadow:

- `shadow-cyan-500/50`
- `shadow-blue-500/50`
- `shadow-indigo-500/50`

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
```

By default colored shadows have an opacity of 100% but you can adjust this using the opacity modifier (e.g., `shadow-cyan-500/25`).

### Adding an inset shadow

Use utilities like `inset-shadow-xs` and `inset-shadow-sm` to apply an inset box shadow to an element:

- `inset-shadow-2xs`
- `inset-shadow-xs`
- `inset-shadow-sm`

```html
<div class="inset-shadow-2xs ..."></div>
<div class="inset-shadow-xs ..."></div>
<div class="inset-shadow-sm ..."></div>
```

These utilities can be useful for things like form controls or wells.

### Setting the inset shadow color

Use utilities like `inset-shadow-indigo-500` and `inset-shadow-cyan-500/50` to change the color of an inset box shadow:

- `inset-shadow-indigo-500`
- `inset-shadow-indigo-500/50`

```html
<div class="inset-shadow-sm inset-shadow-indigo-500 ..."></div>
<div class="inset-shadow-sm inset-shadow-indigo-500/50 ..."></div>
```

By default colored inset shadows have an opacity of 100% but you can adjust this using the opacity modifier.

### Adding a ring

Use `ring` and `ring-<number>` utilities like `ring-2` and `ring-4` to apply a solid box-shadow (ring) to an element:

- `ring`
- `ring-2`
- `ring-4`

```html
<button class="ring ...">Subscribe</button>
<button class="ring-2 ...">Subscribe</button>
<button class="ring-4 ...">Subscribe</button>
```

By default rings match the `currentColor` of the element they are applied to.

### Setting the ring color

Use utilities like `ring-indigo-500` and `ring-cyan-500/50` to change the color of a ring:

- `ring-blue-500`
- `ring-blue-500/50`

```html
<button class="ring-2 ring-blue-500 ...">Subscribe</button>
<button class="ring-2 ring-blue-500/50 ...">Subscribe</button>
```

By default rings have an opacity of 100% but you can adjust this using the opacity modifier.

### Adding an inset ring

Use `inset-ring` and `inset-ring-<number>` utilities like `inset-ring-2` and `inset-ring-4` to apply a solid inset box-shadow (inset ring) to an element:

- `inset-ring`
- `inset-ring-2`
- `inset-ring-4`

```html
<button class="inset-ring ...">Subscribe</button>
<button class="inset-ring-2 ...">Subscribe</button>
<button class="inset-ring-4 ...">Subscribe</button>
```

By default inset rings match the `currentColor` of the element they are applied to.

### Setting the inset ring color

Use utilities like `inset-ring-indigo-500` and `inset-ring-cyan-500/50` to change the color of an inset ring:

- `inset-ring-blue-500`
- `inset-ring-blue-500/50`

```html
<button class="inset-ring-2 inset-ring-blue-500 ...">Subscribe</button>
<button class="inset-ring-2 inset-ring-blue-500/50 ...">Subscribe</button>
```

By default inset rings have an opacity of 100% but you can adjust this using the opacity modifier.

### Removing a box shadow

Use the `shadow-none`, `inset-shadow-none`, `ring-0`, and `inset-ring-0` utilities to remove an existing box shadow from an element:

- `shadow-none`

```html
<div class="shadow-none ..."></div>
```

## Using a custom value

Use utilities like `shadow-[<value>]`, `inset-shadow-[<value>]`, `ring-[<value>]`, and `inset-ring-[<value>]` to set the box shadow based on a completely custom value:

```html
<div class="shadow-[0_35px_35px_rgba(0,0,0,0.25)] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `shadow-(<custom-property>)` syntax:

```html
<div class="shadow-(--my-shadow) ...">  <!-- ... --></div>
```

This is just a shorthand for `shadow-[var(<custom-property>)]` that adds the `var()` function for you automatically.

## Responsive design

Prefix a box-shadow utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="shadow-none md:shadow-lg ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](link-to-variants-documentation). *(Replace `link-to-variants-documentation` with the actual link if available)*

## Customizing your theme

### Customizing shadows

Use the `--shadow-*` theme variables to customize the box shadow utilities in your project:

```css
@theme {
  --shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25);
}
```

Now the `shadow-3xl` utility can be used in your markup:

```html
<div class="shadow-3xl">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](link-to-theme-documentation). *(Replace `link-to-theme-documentation` with the actual link if available)*

### Customizing inset shadows

Use the `--inset-shadow-*` theme variables to customize the inset box shadow utilities in your project:

```css
@theme {
  --inset-shadow-md: inset 0 2px 3px rgba(0, 0, 0, 0.25);
}
```

Now the `inset-shadow-md` utility can be used in your markup:

```html
<div class="inset-shadow-md">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](link-to-theme-documentation). *(Replace `link-to-theme-documentation` with the actual link if available)*

### Customizing shadow colors

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

Now utilities like `shadow-regal-blue`, `inset-shadow-regal-blue`, `ring-regal-blue`, and `inset-ring-regal-blue` can be used in your markup:

```html
<div class="shadow-regal-blue">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](link-to-theme-documentation). *(Replace `link-to-theme-documentation` with the actual link if available)*
