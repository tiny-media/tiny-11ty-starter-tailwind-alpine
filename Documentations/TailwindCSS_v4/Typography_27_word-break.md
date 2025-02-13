# Typography - word-break

Utilities for controlling word breaks in an element.

## Class | Styles
------- | --------
`break-normal` | `overflow-wrap: normal; word-break: normal;`
`break-words` | `overflow-wrap: break-word;`
`break-all` | `word-break: break-all;`
`break-keep` | `word-break: keep-all;`

## Examples

[Examples Documentation](https://tailwindcss.com/docs/word-break#examples)

### Normal

[Normal Examples Documentation](https://tailwindcss.com/docs/word-break#normal)

Use the `break-normal` utility to only add line breaks at normal word break points:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```html
<p class="break-normal">The longest word in any of the major...</p>
```

**Explanation:**

The `break-normal` class is the default word breaking behavior. It will break words only at their normal break points, typically spaces and hyphens. This is useful for maintaining readability and preventing words from breaking unnecessarily.

### Break Words

[Break Words Examples Documentation](https://tailwindcss.com/docs/word-break#break-words)

Use the `break-words` utility to add line breaks mid-word if needed:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```html
<p class="break-words">The longest word in any of the major...</p>
```

**Explanation:**

The `break-words` class will break words if they are too long to fit within their container, even if it means breaking them in the middle of the word. This is helpful when dealing with very long words or when you need to ensure text wraps within a tight space, even at the cost of potentially less readable word breaks. It uses `overflow-wrap: break-word;` which is generally preferred over the older `word-wrap: break-word;` for better cross-browser compatibility and behavior.

### Break All

[Break All Examples Documentation](https://tailwindcss.com/docs/word-break#break-all)

Use the `break-all` utility to add line breaks whenever necessary, without trying to preserve whole words:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```html
<p class="break-all">The longest word in any of the major...</p>
```

**Explanation:**

The `break-all` class will break words at any point if necessary to fit within the container. It prioritizes fitting the text within the available space above all else, even if it results in words being broken in the middle of characters. This is most commonly used for languages like Chinese, Japanese, and Korean where word boundaries are not always indicated by spaces, but can also be useful in other contexts where strict layout constraints are paramount.

### Break Keep

[Break Keep Examples Documentation](https://tailwindcss.com/docs/word-break#break-keep)

Use the `break-keep` utility to prevent line breaks from being applied to Chinese/Japanese/Korean (CJK) text:

抗衡不屈不挠 (kànghéng bùqū bùnáo) 这是一个长词，意思是不畏强暴，奋勇抗争，坚定不移，永不放弃。这个词通常用来描述那些在面对困难和挑战时坚持自己信念的人， 他们克服一切困难，不屈不挠地追求自己的目标。无论遇到多大的挑战，他们都能够坚持到底，不放弃，最终获得胜利。

```html
<p class="break-keep">抗衡不屈不挠...</p>
```

**Explanation:**

The `break-keep` class aims to preserve words as much as possible, especially for CJK text. For CJK text, it prevents words from breaking even if they overflow their container. For non-CJK text, it behaves the same as `break-normal`. This is useful when you want to ensure that CJK text is not broken unnecessarily and that words are kept together as units.

For non-CJK text the `break-keep` utility has the same behavior as the `break-normal` utility.

### Responsive design

[Responsive design Examples Documentation](https://tailwindcss.com/docs/word-break#responsive-design)

Prefix a `word-break` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="break-normal md:break-all ...">  <!-- ... --></p>
```

**Explanation:**

Tailwind CSS's responsive modifiers allow you to apply word break utilities conditionally based on screen size. In the example above, `break-normal` is applied by default on smaller screens, and `md:break-all` overrides it to `break-all` on medium screens and larger. This is crucial for creating layouts that adapt well to different devices, ensuring optimal text wrapping and readability across various screen sizes.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
