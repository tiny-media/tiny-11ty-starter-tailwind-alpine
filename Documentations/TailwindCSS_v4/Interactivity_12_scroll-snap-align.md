# scroll-snap-align

Utilities for controlling the scroll snap alignment of an element.

## Class Reference

| Class             | Styles                        |
| ----------------- | ----------------------------- |
| `snap-start`      | `scroll-snap-align: start;`   |
| `snap-end`        | `scroll-snap-align: end;`     |
| `snap-center`     | `scroll-snap-align: center;`  |
| `snap-align-none` | `scroll-snap-align: none;`    |

## Examples

### Snapping to the center

Use the `snap-center` utility to snap an element to its center when being scrolled inside a snap container:

Scroll in the grid of images to see the expected behavior

snap point

<!-- Image placeholders - you would need to replace these with actual image links if needed -->
<!-- In a real Markdown context, these image links would point to your images -->
<!-- For LLM context, descriptive alt text is more important than actual images -->

Example Images:

-  ![Placeholder Image 1](placeholder_image_1.png)
-  ![Placeholder Image 2](placeholder_image_2.png)
-  ![Placeholder Image 3](placeholder_image_3.png)
-  ![Placeholder Image 4](placeholder_image_4.png)
-  ![Placeholder Image 5](placeholder_image_5.png)
-  ![Placeholder Image 6](placeholder_image_6.png)

```html
<div class="snap-x ...">
  <div class="snap-center ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Snapping to the start

Use the `snap-start` utility to snap an element to its start when being scrolled inside a snap container:

Scroll in the grid of images to see the expected behavior

snap point

<!-- Image placeholders - you would need to replace these with actual image links if needed -->
<!-- In a real Markdown context, these image links would point to your images -->
<!-- For LLM context, descriptive alt text is more important than actual images -->

Example Images:

-  ![Placeholder Image 1](placeholder_image_1.png)
-  ![Placeholder Image 2](placeholder_image_2.png)
-  ![Placeholder Image 3](placeholder_image_3.png)
-  ![Placeholder Image 4](placeholder_image_4.png)
-  ![Placeholder Image 5](placeholder_image_5.png)
-  ![Placeholder Image 6](placeholder_image_6.png)

```html
<div class="snap-x ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Snapping to the end

Use the `snap-end` utility to snap an element to its end when being scrolled inside a snap container:

Scroll in the grid of images to see the expected behavior

snap point

<!-- Image placeholders - you would need to replace these with actual image links if needed -->
<!-- In a real Markdown context, these image links would point to your images -->
<!-- For LLM context, descriptive alt text is more important than actual images -->

Example Images:

-  ![Placeholder Image 1](placeholder_image_1.png)
-  ![Placeholder Image 2](placeholder_image_2.png)
-  ![Placeholder Image 3](placeholder_image_3.png)
-  ![Placeholder Image 4](placeholder_image_4.png)
-  ![Placeholder Image 5](placeholder_image_5.png)
-  ![Placeholder Image 6](placeholder_image_6.png)

```html
<div class="snap-x ...">
  <div class="snap-end ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Responsive design

Prefix a `scroll-snap-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="snap-center md:snap-start ...">
  <!-- ... -->
</div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
