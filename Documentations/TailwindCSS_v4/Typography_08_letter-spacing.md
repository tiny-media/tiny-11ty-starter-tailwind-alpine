# Typography

## letter-spacing

Utilities for controlling the tracking, or letter spacing, of an element.

| Class                  | Styles                                      |
| ---------------------- | ------------------------------------------- |
| `tracking-tighter`     | `letter-spacing: var(--tracking-tighter); /* -0.05em */` |
| `tracking-tight`       | `letter-spacing: var(--tracking-tight); /* -0.025em */`  |
| `tracking-normal`      | `letter-spacing: var(--tracking-normal); /* 0em */`     |
| `tracking-wide`        | `letter-spacing: var(--tracking-wide); /* 0.025em */`   |
| `tracking-wider`       | `letter-spacing: var(--tracking-wider); /* 0.05em */`    |
| `tracking-widest`      | `letter-spacing: var(--tracking-widest); /* 0.1em */`     |
| `tracking-(<custom-property>)` | `letter-spacing: var(<custom-property>);`          |
| `tracking-[<value>]`   | `letter-spacing: <value>;`                   |

## Examples

### Basic example

Use utilities like `tracking-tight` and `tracking-wide` to set the letter spacing of an element:

tracking-tight

The quick brown fox jumps over the lazy dog.

tracking-normal

The quick brown fox jumps over the lazy dog.

tracking-wide

The quick brown fox jumps over the lazy dog.

```html
<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>
```

[Examples on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#examples)

[Basic example on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#basic-example)

### Using negative values

Using negative values doesn't make a ton of sense with the named letter spacing scale Tailwind includes out of the box, but if you've customized your scale to use numbers it can be useful:

```css
@theme {
  --tracking-1: 0em;
  --tracking-2: 0.025em;
  --tracking-3: 0.05em;
  --tracking-4: 0.1em;
}
```

To use a negative letter spacing value, prefix the class name with a dash to convert it to a negative value:

```html
<p class="-tracking-2">The quick brown fox ...</p>
```

[Using negative values on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#using-negative-values)

### Using a custom value

Use the `tracking-[<value>]` syntax to set the letter spacing based on a completely custom value:

```html
<p class="tracking-[.25em] ...">
  <!-- ... -->
</p>
```

For CSS variables, you can also use the `tracking-(<custom-property>)` syntax:

```html
<p class="tracking-(--my-tracking) ...">
  <!-- ... -->
</p>
```

This is just a shorthand for `tracking-[var(<custom-property>)]` that adds the `var()` function for you automatically.

[Using a custom value on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#using-a-custom-value)

### Responsive design

Prefix a `letter-spacing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="tracking-tight md:tracking-wide ...">
  <!-- ... -->
</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

[Responsive design on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#responsive-design)

## Customizing your theme

Use the `--tracking-*` theme variables to customize the letter spacing utilities in your project:

```css
@theme {
  --tracking-tightest: -0.075em;
}
```

Now the `tracking-tightest` utility can be used in your markup:

```html
<p class="tracking-tightest">
  <!-- ... -->
</p>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).

[Customizing your theme on Tailwind CSS website](https://tailwindcss.com/docs/letter-spacing#customizing-your-theme)