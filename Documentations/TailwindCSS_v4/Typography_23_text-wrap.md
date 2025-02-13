# Typography

## text-wrap

Utilities for controlling how text wraps within an element.

| Class         | Styles                |
|---------------|-----------------------|
| `text-wrap`   | `text-wrap: wrap;`    |
| `text-nowrap` | `text-wrap: nowrap;` |
| `text-balance`| `text-wrap: balance;` |
| `text-pretty` | `text-wrap: pretty;`  |

## Examples ([Link to Examples on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#examples))

### Allowing text to wrap ([Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#allowing-text-to-wrap))

Use the `text-wrap` utility to wrap overflowing text onto multiple lines at logical points in the text:

**Example Text:**

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

**Code:**

```html
<article class="text-wrap">
  <h3>Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

### Preventing text from wrapping ([Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#preventing-text-from-wrapping))

Use the `text-nowrap` utility to prevent text from wrapping, allowing it to overflow if necessary:

**Example Text:**

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

**Code:**

```html
<article class="text-nowrap">
  <h3>Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

### Balanced text wrapping ([Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#balanced-text-wrapping))

Use the `text-balance` utility to distribute the text evenly across each line:

**Example Text:**

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

**Code:**

```html
<article>
  <h3 class="text-balance">Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

**Note:** For performance reasons browsers limit text balancing to blocks that are ~6 lines or less, making it best suited for headings.

### Pretty text wrapping ([Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#pretty-text-wrapping))

Use the `text-pretty` utility to prevent orphans (a single word on its own line) at the end of a text block:

**Example Text:**

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

**Code:**

```html
<article>
  <h3 class="text-pretty">Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

### Responsive design ([Link to Example on Tailwind CSS Docs](https://tailwindcss.com/docs/text-wrap#responsive-design))

Prefix a `text-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Code:**

```html
<h1 class="text-pretty md:text-balance ...">
  <!-- ... -->
</h1>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
