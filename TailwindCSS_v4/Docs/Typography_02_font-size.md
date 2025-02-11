
# Typography - font-size

Utilities for controlling the font size of an element.

## Class Styles

| Class                     | Styles                                                                 |
| ------------------------- | ---------------------------------------------------------------------- |
| `text-xs`                 | `font-size: var(--text-xs); /* 0.75rem (12px) */`<br>`line-height: var(--text-xs--line-height); /* calc(1 / 0.75) */` |
| `text-sm`                 | `font-size: var(--text-sm); /* 0.875rem (14px) */`<br>`line-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) */` |
| `text-base`               | `font-size: var(--text-base); /* 1rem (16px) */`<br>`line-height: var(--text-base--line-height); /* calc(1.5 / 1) */`   |
| `text-lg`                 | `font-size: var(--text-lg); /* 1.125rem (18px) */`<br>`line-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) */` |
| `text-xl`                 | `font-size: var(--text-xl); /* 1.25rem (20px) */`<br>`line-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) */` |
| `text-2xl`                | `font-size: var(--text-2xl); /* 1.5rem (24px) */`<br>`line-height: var(--text-2xl--line-height); /* calc(2 / 1.5) */`    |
| `text-3xl`                | `font-size: var(--text-3xl); /* 1.875rem (30px) */`<br>`line-height: var(--text-3xl--line-height); /* calc(2.25 / 1.875) */` |
| `text-4xl`                | `font-size: var(--text-4xl); /* 2.25rem (36px) */`<br>`line-height: var(--text-4xl--line-height); /* calc(2.5 / 2.25) */`  |
| `text-5xl`                | `font-size: var(--text-5xl); /* 3rem (48px) */`<br>`line-height: var(--text-5xl--line-height); /* 1 */`                  |
| `text-6xl`                | `font-size: var(--text-6xl); /* 3.75rem (60px) */`<br>`line-height: var(--text-6xl--line-height); /* 1 */`                  |
| `text-7xl`                | `font-size: var(--text-7xl); /* 4.5rem (72px) */`<br>`line-height: var(--text-7xl--line-height); /* 1 */`                  |
| `text-8xl`                | `font-size: var(--text-8xl); /* 6rem (96px) */`<br>`line-height: var(--text-8xl--line-height); /* 1 */`                  |
| `text-9xl`                | `font-size: var(--text-9xl); /* 8rem (128px) */`<br>`line-height: var(--text-9xl--line-height); /* 1 */`                  |
| `text-(length:<custom-property>)` | `font-size: var(<custom-property>);`                               |
| `text-[<value>]`          | `font-size: <value>;`                                                  |

## Examples

### Basic example

Use utilities like `text-sm` and `text-lg` to set the font size of an element:

**Code:**

```html
<p class="text-sm ...">The quick brown fox jumps over the lazy dog.</p>
<p class="text-base ...">The quick brown fox jumps over the lazy dog.</p>
<p class="text-lg ...">The quick brown fox jumps over the lazy dog.</p>
<p class="text-xl ...">The quick brown fox jumps over the lazy dog.</p>
<p class="text-2xl ...">The quick brown fox jumps over the lazy dog.</p>
```

**Preview:**

text-sm

The quick brown fox jumps over the lazy dog.

text-base

The quick brown fox jumps over the lazy dog.

text-lg

The quick brown fox jumps over the lazy dog.

text-xl

The quick brown fox jumps over the lazy dog.

text-2xl

The quick brown fox jumps over the lazy dog.

### Setting the line-height

Use utilities like `text-sm/6` and `text-lg/7` to set the font size and line-height of an element at the same time:

**Code:**

```html
<p class="text-sm/6 ...">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
<p class="text-sm/7 ...">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
<p class="text-sm/8 ...">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
```

**Preview:**

text-sm/6

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

text-sm/7

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

text-sm/8

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

### Using a custom value

Use the `text-[<value>]` syntax to set the font size based on a completely custom value:

**Code:**

```html
<p class="text-[14px] ...">  <!-- ... --></p>
```

### Using CSS variables

For CSS variables, you can also use the `text-(length:<custom-property>)` syntax:

**Code:**

```html
<p class="text-(length:--my-text-size) ...">  <!-- ... --></p>
```

This is a shorthand for `text-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

## Responsive design

Prefix a font-size utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Code:**

```html
<p class="text-sm md:text-base ...">  <!-- ... --></p>
```

Learn more about using variants in the [variants documentation](variants documentation link - replace with actual link if available).

## Customizing your theme

Use the `--text-*` theme variables to customize the font size utilities in your project:

```css
@theme {
  --text-tiny: 0.625rem;
}
```

Now the `text-tiny` utility can be used in your markup:

**Code:**

```html
<div class="text-tiny">  <!-- ... --></div>
```

You can also provide default line-height, letter-spacing, and font-weight values for a font size:

```css
@theme {
  --text-tiny: 0.625rem;
  --text-tiny--line-height: 1.5rem;
  --text-tiny--letter-spacing: 0.125rem;
  --text-tiny--font-weight: 500;
}
```

Learn more about customizing your theme in the [theme documentation](theme documentation link - replace with actual link if available).
