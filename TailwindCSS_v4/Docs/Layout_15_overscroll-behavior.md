# Overscroll Behavior

Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

## Class Utilities

| Class                | Styles                        |
| -------------------- | ----------------------------- |
| `overscroll-auto`    | `overscroll-behavior: auto;`    |
| `overscroll-contain` | `overscroll-behavior: contain;` |
| `overscroll-none`    | `overscroll-behavior: none;`    |
| `overscroll-x-auto`  | `overscroll-behavior-x: auto;`  |
| `overscroll-x-contain`| `overscroll-behavior-x: contain;`|
| `overscroll-x-none`  | `overscroll-behavior-x: none;`  |
| `overscroll-y-auto`  | `overscroll-behavior-y: auto;`  |
| `overscroll-y-contain`| `overscroll-behavior-y: contain;`|
| `overscroll-y-none`  | `overscroll-behavior-y: none;`  |

## Examples

[Examples Documentation](https://tailwindcss.com/docs/overscroll-behavior#examples)

### Preventing parent overscrolling

[Preventing parent overscrolling Documentation](https://tailwindcss.com/docs/overscroll-behavior#preventing-parent-overscrolling)

Use the `overscroll-contain` utility to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve "bounce" effects when scrolling past the end of the container in operating systems that support it:

**Behavior:**

Scroll to see behavior

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

**Code:**

```html
<div class="overscroll-contain ...">Well, let me tell you something, ...</div>
```

### Preventing overscroll bouncing

[Preventing overscroll bouncing Documentation](https://tailwindcss.com/docs/overscroll-behavior#preventing-overscroll-bouncing)

Use the `overscroll-none` utility to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent "bounce" effects when scrolling past the end of the container:

**Behavior:**

Scroll to see behavior

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

**Code:**

```html
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

### Using the default overscroll behavior

[Using the default overscroll behavior Documentation](https://tailwindcss.com/docs/overscroll-behavior#using-the-default-overscroll-behavior)

Use the `overscroll-auto` utility to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area:

**Behavior:**

Scroll to see behavior

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

**Code:**

```html
<div class="overscroll-auto ...">Well, let me tell you something, ...</div>
```

### Responsive design

[Responsive design Documentation](https://tailwindcss.com/docs/overscroll-behavior#responsive-design)

Prefix an `overscroll-behavior` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Code:**

```html
<div class="overscroll-auto md:overscroll-contain ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
