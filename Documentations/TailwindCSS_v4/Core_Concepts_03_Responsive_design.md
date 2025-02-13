
# Core concepts

## Responsive design

Using responsive utility variants to build adaptive user interfaces.

### Overview ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#overview))

Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it easy to build complex responsive interfaces without leaving your HTML.

First, ensure you've added the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) to the `<head>` of your document:

```html
index.html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

To apply a utility only at a specific breakpoint, prefix the utility with the breakpoint name followed by `:`.

```html
HTML
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

Tailwind provides five default breakpoints, inspired by common device resolutions:

| Breakpoint prefix | Minimum width        | CSS                                  |
| :---------------- | :------------------- | :----------------------------------- |
| `sm`              | 40rem _(640px)_      | `@media (width >= 40rem) { ... }`    |
| `md`              | 48rem _(768px)_      | `@media (width >= 48rem) { ... }`    |
| `lg`              | 64rem _(1024px)_     | `@media (width >= 64rem) { ... }`    |
| `xl`              | 80rem _(1280px)_     | `@media (width >= 80rem) { ... }`    |
| `2xl`             | 96rem _(1536px)_     | `@media (width >= 96rem) { ... }`    |

This applies to **every utility class in the framework**, allowing you to modify anything at a given breakpoint, including letter spacing or cursor styles.

Here's an example of a marketing page component demonstrating stacked layout on small screens and side-by-side layout on larger screens:

```html
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
```

**Explanation of the example:**

*   By default, the outer `div` is `display: block`, but `md:flex` changes it to `display: flex` on medium screens and larger.
*   With flex parent, `md:shrink-0` on the image prevents shrinking on medium screens and up. `shrink-0` alone would also work, but `md:shrink-0` clarifies its purpose for medium screens.
*   On small screens, the image is full width by default. On medium screens and up, `md:h-full md:w-48` sets a fixed width and full height for the image.

This example uses only the `md` breakpoint, but you can use `sm`, `lg`, `xl`, or `2xl` for further customization at different sizes.

### Working mobile-first ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#working-mobile-first))

Tailwind uses a mobile-first breakpoint system, similar to Bootstrap.

Unprefixed utilities (like `uppercase`) apply to all screen sizes. Prefixed utilities (like `md:uppercase`) apply at the specified breakpoint and above.

#### Targeting mobile screens ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#targeting-mobile-screens))

To style for mobile, use unprefixed utilities, not `sm:`. `sm:` means "at the small _breakpoint_", not "on small screens".

**Incorrect usage:**

```html
HTML
<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
```

**Correct usage:**

```html
HTML
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

Implement the mobile layout first, then layer changes for `sm`, `md`, etc.

#### Targeting a breakpoint range ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#targeting-a-breakpoint-range))

Styles from `md:flex` apply at `md` and larger breakpoints by default.

To apply a utility only within a breakpoint range, combine a responsive variant like `md` with a `max-*` variant:

```html
HTML
<div class="md:max-xl:flex">
  <!-- ... -->
</div>
```

Available `max-*` variants:

| Variant   | Media query                     |
| :-------- | :------------------------------ |
| `max-sm`  | `@media (width < 40rem) { ... }` |
| `max-md`  | `@media (width < 48rem) { ... }` |
| `max-lg`  | `@media (width < 64rem) { ... }` |
| `max-xl`  | `@media (width < 80rem) { ... }` |
| `max-2xl` | `@media (width < 96rem) { ... }` |

#### Targeting a single breakpoint ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#targeting-a-single-breakpoint))

To target a single breakpoint, use a responsive variant and the `max-*` variant of the *next* breakpoint:

```html
HTML
<div class="md:max-lg:flex">
  <!-- ... -->
</div>
```

Refer to [targeting breakpoint ranges](#targeting-a-breakpoint-range) for more details.

### Using custom breakpoints ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#using-custom-breakpoints))

#### Customizing your theme ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#customizing-your-theme))

Customize breakpoints using `--breakpoint-*` theme variables in your `app.css`:

```css
app.css
@import "tailwindcss";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
```

This updates `2xl` to `100rem` and adds `xs` and `3xl` breakpoints:

```html
HTML
<div class="grid xs:grid-cols-2 3xl:grid-cols-6">
  <!-- ... -->
</div>
```

See the [theme documentation](https://tailwindcss.com/docs/theme) for more customization options.

#### Removing default breakpoints ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#removing-default-breakpoints))

Remove a default breakpoint by setting its value to `initial`:

```css
app.css
@import "tailwindcss";

@theme {
  --breakpoint-2xl: initial;
}
```

Remove all default breakpoints and define your own:

```css
app.css
@import "tailwindcss";

@theme {
  --breakpoint-*: initial;
  --breakpoint-tablet: 40rem;
  --breakpoint-laptop: 64rem;
  --breakpoint-desktop: 80rem;
}
```

See the [theme documentation](https://tailwindcss.com/docs/theme) for more on removing default theme values.

#### Using arbitrary values ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#using-arbitrary-values))

For one-off breakpoints, use `min` or `max` variants with arbitrary values:

```html
HTML
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- ... -->
</div>
```

Refer to the [arbitrary values documentation](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) for more information.

## Container queries ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#container-queries))

### What are container queries? ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#what-are-container-queries))

[Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) style elements based on the size of a *parent* element, not the viewport. This enhances component portability and reusability as they adapt to their available space.

### Basic example ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#basic-example))

Use `@container` to mark an element as a container. Use variants like `@sm` and `@md` to style children based on the container's size:

```html
HTML
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

Container queries are also mobile-first, applying at the target container size and up.

### Max-width container queries ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#max-width-container-queries))

Use `@max-sm` and `@max-md` to style elements below a container size:

```html
HTML
<div class="@container">
  <div class="flex flex-row @max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Container query ranges ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#container-query-ranges))

Combine regular and max-width container query variants to target a specific range:

```html
HTML
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Named containers ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#named-containers))

For nested containers, name containers with `@container/{name}` and target them with `@sm/{name}`, `@md/{name}`:

```html
HTML
<div class="@container/main">
  <!-- ... -->
  <div class="flex flex-row @sm/main:flex-col">
    <!-- ... -->
  </div>
</div>
```

This allows styling based on distant container sizes.

### Using custom container sizes ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#using-custom-container-sizes))

Customize container sizes using `--container-*` theme variables:

```css
app.css
@import "tailwindcss";

@theme {
  --container-8xl: 96rem;
}
```

This adds an `8xl` container query variant:

```html
HTML
<div class="@container">
  <div class="flex flex-col @8xl:flex-row">
    <!-- ... -->
  </div>
</div>
```

See the [theme documentation](https://tailwindcss.com/docs/theme) for more.

### Using arbitrary values ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#using-arbitrary-container-query-values))

Use `@min-[475px]` and `@max-[960px]` for one-off container query sizes:

```html
HTML
<div class="@container">
  <div class="flex flex-col @min-[475px]:flex-row">
    <!-- ... -->
  </div>
</div>
```

### Using container query units ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#using-container-query-units))

Use [container query length units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) like `cqw` as arbitrary values:

```html
HTML
<div class="@container">
  <div class="w-[50cqw]">
    <!-- ... -->
  </div>
</div>
```

### Container size reference ([link to original documentation](https://tailwindcss.com/docs/box-decoration-break#container-size-reference))

Default container sizes in Tailwind:

| Variant   | Minimum width        | CSS                                     |
| :-------- | :------------------- | :-------------------------------------- |
| `@3xs`    | 16rem _(256px)_      | `@container (width >= 16rem) { … }`     |
| `@2xs`    | 18rem _(288px)_      | `@container (width >= 18rem) { … }`     |
| `@xs`     | 20rem _(320px)_      | `@container (width >= 20rem) { … }`     |
| `@sm`     | 24rem _(384px)_      | `@container (width >= 24rem) { … }`     |
| `@md`     | 28rem _(448px)_      | `@container (width >= 28rem) { … }`     |
| `@lg`     | 32rem _(512px)_      | `@container (width >= 32rem) { … }`     |
| `@xl`     | 36rem _(576px)_      | `@container (width >= 36rem) { … }`     |
| `@2xl`    | 42rem _(672px)_      | `@container (width >= 42rem) { … }`     |
| `@3xl`    | 48rem _(768px)_      | `@container (width >= 48rem) { … }`     |
| `@4xl`    | 56rem _(896px)_      | `@container (width >= 56rem) { … }`     |
| `@5xl`    | 64rem _(1024px)_     | `@container (width >= 64rem) { … }`     |
| `@6xl`    | 72rem _(1152px)_     | `@container (width >= 72rem) { … }`     |
| `@7xl`    | 80rem _(1280px)_     | `@container (width >= 80rem) { … }`     |