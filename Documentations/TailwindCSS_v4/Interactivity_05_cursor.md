# Interactivity

## cursor

Utilities for controlling the cursor style when hovering over an element.

| Class                 | Styles                     |
|-----------------------|----------------------------|
| `cursor-auto`         | `cursor: auto;`             |
| `cursor-default`      | `cursor: default;`          |
| `cursor-pointer`      | `cursor: pointer;`          |
| `cursor-wait`         | `cursor: wait;`             |
| `cursor-text`         | `cursor: text;`             |
| `cursor-move`         | `cursor: move;`             |
| `cursor-help`         | `cursor: help;`             |
| `cursor-not-allowed`  | `cursor: not-allowed;`      |
| `cursor-none`         | `cursor: none;`             |
| `cursor-context-menu` | `cursor: context-menu;`    |
| `cursor-progress`     | `cursor: progress;`         |
| `cursor-cell`         | `cursor: cell;`             |
| `cursor-crosshair`    | `cursor: crosshair;`        |
| `cursor-vertical-text`| `cursor: vertical-text;`   |
| `cursor-alias`        | `cursor: alias;`            |
| `cursor-copy`         | `cursor: copy;`             |
| `cursor-no-drop`      | `cursor: no-drop;`          |
| `cursor-grab`         | `cursor: grab;`             |
| `cursor-grabbing`     | `cursor: grabbing;`         |
| `cursor-all-scroll`   | `cursor: all-scroll;`       |
| `cursor-col-resize`   | `cursor: col-resize;`       |
| `cursor-row-resize`   | `cursor: row-resize;`       |
| `cursor-n-resize`     | `cursor: n-resize;`         |
| `cursor-e-resize`     | `cursor: e-resize;`         |
| `cursor-s-resize`     | `cursor: s-resize;`         |
| `cursor-w-resize`     | `cursor: w-resize;`         |
| `cursor-ne-resize`    | `cursor: ne-resize;`        |
| `cursor-nw-resize`    | `cursor: nw-resize;`        |
| `cursor-se-resize`    | `cursor: se-resize;`        |
| `cursor-sw-resize`    | `cursor: sw-resize;`        |
| `cursor-ew-resize`    | `cursor: ew-resize;`        |
| `cursor-ns-resize`    | `cursor: ns-resize;`        |
| `cursor-nesw-resize`  | `cursor: nesw-resize;`      |
| `cursor-nwse-resize`  | `cursor: nwse-resize;`      |
| `cursor-zoom-in`      | `cursor: zoom-in;`          |
| `cursor-zoom-out`     | `cursor: zoom-out;`         |
| `cursor-(<custom-property>)` | `cursor: var(<custom-property>);` |
| `cursor-[<value>]`    | `cursor: <value>;`         |

## Examples

For more examples, see the [official Tailwind CSS documentation](https://tailwindcss.com/docs/cursor#examples).

### Basic example

Use utilities like `cursor-pointer` and `cursor-grab` to control which cursor is displayed when hovering over an element:

Hover over each button to see the cursor change

```html
<button class="cursor-pointer ...">Submit</button>
<button class="cursor-progress ...">Saving...</button>
<button class="cursor-not-allowed ..." disabled>Confirm</button>
```

[View basic example on Tailwind CSS documentation](https://tailwindcss.com/docs/cursor#basic-example)

### Using a custom value

Use the `cursor-[<value>]` syntax to set the cursor based on a completely custom value:

```html
<button class="cursor-[url(hand.cur),_pointer] ...">  <!-- ... --></button>
```

For CSS variables, you can also use the `cursor-(<custom-property>)` syntax:

```html
<button class="cursor-(--my-cursor) ...">  <!-- ... --></button>
```

This is just a shorthand for `cursor-[var(<custom-property>)]` that adds the `var()` function for you automatically.

[View custom value example on Tailwind CSS documentation](https://tailwindcss.com/docs/cursor#using-a-custom-value)

### Responsive design

Prefix a `cursor` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<button class="cursor-not-allowed md:cursor-auto ...">  <!-- ... --></button>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

[View responsive design example on Tailwind CSS documentation](https://tailwindcss.com/docs/cursor#responsive-design)
