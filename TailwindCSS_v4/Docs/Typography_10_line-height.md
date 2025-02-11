# Typography - line-height

Utilities for controlling the leading, or line height, of an element.

## Class and Styles

| Class                     | Styles                                                                 |
| :------------------------ | :--------------------------------------------------------------------- |
| `text-<size>/<number>`    | `font-size: <size>; line-height: calc(var(--spacing) * <number>);`   |
| `text-<size>/(<custom-property>)` | `font-size: <size>; line-height: var(<custom-property>);`          |
| `text-<size>/[<value>]`   | `font-size: <size>; line-height: <value>;`                            |
| `leading-none`            | `line-height: 1;`                                                      |
| `leading-<number>`         | `line-height: calc(var(--spacing) * <number>)`                        |
| `leading-(<custom-property>)` | `line-height: var(<custom-property>);`                               |
| `leading-[<value>]`        | `line-height: <value>;`                                                |

## Examples ([🔗 Examples](https://tailwindcss.com/docs/line-height#examples))

### Basic example ([🔗 Basic example](https://tailwindcss.com/docs/line-height#basic-example))

Use font size utilities like `text-sm/6` and `text-lg/7` to set the font size and line-height of an element at the same time:

**text-sm/6**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

**text-sm/7**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

**text-sm/8**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/8 ...">So I started to walk into the water...</p>
```

Each font size utility also sets a default line height when one isn't provided. You can learn more about these values and how to customize them in the [font-size documentation](https://tailwindcss.com/docs/font-size).

### Setting independently ([🔗 Setting independently](https://tailwindcss.com/docs/line-height#setting-independently))

Use `leading-<number>` utilities like `leading-6` and `leading-7` to set the line height of an element independent of the font-size:

**leading-6**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

**leading-7**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

**leading-8**

> So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<p class="text-sm leading-6">So I started to walk into the water...</p>
<p class="text-sm leading-7">So I started to walk into the water...</p>
<p class="text-sm leading-8">So I started to walk into the water...</p>
```

### Removing the leading ([🔗 Removing the leading](https://tailwindcss.com/docs/line-height#removing-the-leading))

Use the `leading-none` utility to set the line height of an element equal to its font size:

> The quick brown fox jumps over the lazy dog.

```html
<p class="text-2xl leading-none ...">The quick brown fox...</p>
```

### Using a custom value ([🔗 Using a custom value](https://tailwindcss.com/docs/line-height#using-a-custom-value))

Use the `leading-[<value>]` syntax to set the line height based on a completely custom value:

```html
<p class="leading-[1.5] ...">  <!-- ... --></p>
```

For CSS variables, you can also use the `leading-(<custom-property>)` syntax:

```html
<p class="leading-(--my-line-height) ...">  <!-- ... --></p>
```

This is just a shorthand for `leading-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design ([🔗 Responsive design](https://tailwindcss.com/docs/line-height#responsive-design))

Prefix a `line-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="leading-5 md:leading-6 ...">  <!-- ... --></p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## Customizing your theme ([🔗 Customizing your theme](https://tailwindcss.com/docs/line-height#customizing-your-theme))

The `leading-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).
