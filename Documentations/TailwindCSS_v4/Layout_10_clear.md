# Clear

Utilities for controlling the wrapping of content around an element.

## Class Table

| Class         | Styles             |
|---------------|--------------------|
| `clear-left`  | `clear: left;`     |
| `clear-right` | `clear: right;`    |
| `clear-both`  | `clear: both;`    |
| `clear-start` | `clear: inline-start;` |
| `clear-end`   | `clear: inline-end;`   |
| `clear-none`  | `clear: none;`     |

## Examples

### [Clearing left](https://tailwindcss.com/docs/clear#clearing-left)

Use the `clear-left` utility to position an element below any preceding left-floated elements.

**Example Visual:**

The example shows two images floated left and right respectively, followed by a paragraph. Without `clear-left`, the paragraph would wrap around the left-floated image. With `clear-left` applied to the paragraph, it is positioned below the left-floated image.

![Image showing floated left element](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![Image showing floated right element](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)

> Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.

```html
<article>
  <img class="float-left ..." src="/img/snow-mountains.jpg" />
  <img class="float-right ..." src="/img/green-mountains.jpg" />
  <p class="clear-left ...">Maybe we can live without libraries...</p>
</article>
```

### [Clearing right](https://tailwindcss.com/docs/clear#clearing-right)

Use the `clear-right` utility to position an element below any preceding right-floated elements.

**Example Visual:**

The example shows two images floated left and right respectively, followed by a paragraph. Without `clear-right`, the paragraph would wrap around the right-floated image. With `clear-right` applied to the paragraph, it is positioned below the right-floated image.

![Image showing floated right element](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
![Image showing floated left element](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)

> Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.

```html
<article>
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/snow-mountains.jpg" />
  <p class="clear-right ...">Maybe we can live without libraries...</p>
</article>
```

### [Clearing all](https://tailwindcss.com/docs/clear#clearing-all)

Use the `clear-both` utility to position an element below all preceding floated elements, regardless of whether they are floated left or right.

**Example Visual:**

The example shows two images floated left and right respectively, followed by a paragraph. Without `clear-both`, the paragraph would wrap around both floated images. With `clear-both` applied to the paragraph, it is positioned below both floated images.

![Image showing floated left element](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
![Image showing floated right element](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)

> Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.

```html
<article>
  <img class="float-left ..." src="/img/snow-mountains.jpg" />
  <img class="float-right ..." src="/img/green-mountains.jpg" />
  <p class="clear-both ...">Maybe we can live without libraries...</p>
</article>
```

### [Using logical properties](https://tailwindcss.com/docs/clear#using-logical-properties)

Use the `clear-start` and `clear-end` utilities, which use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) to map to either the left or right side based on the text direction. This is useful for internationalization and right-to-left languages.

**Example Visual:**

The example shows two images floated left and right in a right-to-left (RTL) context, followed by a paragraph. `clear-end` is used, which in RTL will clear the 'end' side, which is the left side. Thus, the paragraph is positioned below the left-floated image in RTL.

![Image showing floated left element](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![Image showing floated right element](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)

> ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد، نحن أكبر من أن نغير العالم، ولكن ماذا عن ذلك الطفل الذي يجلس ويفتح كتابًا الآن في أحد فروع المكتبة المحلية ويجد رسومات للتبول والبول على القطة في القبعة والإخوة الصينيون الخمسة؟ ألا يستحق الأفضل؟ ينظر. إذا كنت تعتقد أن الأمر يتعلق بالغرامات المتأخرة والكتب المفقودة، فمن الأفضل أن تفكر مرة أخرى. يتعلق الأمر بحق ذلك الطفل في قراءة كتاب دون أن يتشوه عقله! أو: ربما يثيرك هذا يا سينفيلد؛ ربما هذه هي الطريقة التي تحصل بها على ركلاتك. أنت ورفاقك الطيبين.

```html
<article dir="rtl">
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/green-mountains.jpg" />
  <p class="clear-end ...">...ربما يمكننا العيش بدون مكتبات،</p>
</article>
```

### [Disabling clears](https://tailwindcss.com/docs/clear#disabling-clears)

Use the `clear-none` utility to reset any clears that are applied to an element. This is useful for responsive design or when you want to remove clear behavior in certain contexts.

**Example Visual:**

The example shows two images floated left and right respectively, followed by a paragraph that might have had a clear applied previously. Using `clear-none` on the paragraph removes any clear behavior, and the paragraph wraps around the floated elements as if no clear was ever applied.

![Image showing floated right element](https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)
![Image showing floated left element](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formathttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=90)

> Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.

```html
<article>
  <img class="float-left ..." src="/img/green-mountains.jpg" />
  <img class="float-right ..." src="/img/snow-mountains.jpg" />
  <p class="clear-none ...">Maybe we can live without libraries...</p>
</article>
```

### [Responsive design](https://tailwindcss.com/docs/clear#responsive-design)

Prefix a `clear` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above. This allows you to control clearing behavior based on screen size.

```html
<p class="clear-left md:clear-none ...">
  <!-- ... -->
</p>
```

In this example, `clear-left` is applied by default on smaller screens, and `md:clear-none` overrides it to `clear: none;` on medium screens and above.

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
