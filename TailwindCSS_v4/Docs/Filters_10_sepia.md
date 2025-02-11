# Filters

## filter: sepia()

Utilities for applying sepia filters to an element.

## Class

### Styles

*   `sepia`
    ```css
    filter: sepia(100%);
    ```

*   `sepia-<number>`
    ```css
    filter: sepia(<number>%);
    ```

*   `sepia-(<custom-property>)`
    ```css
    filter: sepia(var(<custom-property>));
    ```

*   `sepia-[<value>]`
    ```css
    filter: sepia(<value>);
    ```

## Examples

### Basic example

Use utilities like `sepia` and `sepia-50` to control the sepia effect applied to an element:

**sepia-0**
![Image with sepia-0 class](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**sepia-50**
![Image with sepia-50 class](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

**sepia**
![Image with sepia class](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```html
<img class="sepia-0" src="/img/mountains.jpg" />
<img class="sepia-50" src="/img/mountains.jpg" />
<img class="sepia" src="/img/mountains.jpg" />
```

### Using a custom value

Use the `sepia-[<value>]` syntax to set the sepia amount based on a completely custom value:

```html
<img class="sepia-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `sepia-(<custom-property>)` syntax:

```html
<img class="sepia-(--my-sepia) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Responsive design

Prefix a `filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="sepia md:sepia-0 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
