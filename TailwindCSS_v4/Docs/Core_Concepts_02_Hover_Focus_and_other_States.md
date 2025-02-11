
# Core concepts

## Hover, focus, and other states

Using utilities to style elements on hover, focus, and more.

Every utility class in Tailwind can be applied _conditionally_ by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, to apply the `bg-sky-700` class on hover, use the `hover:bg-sky-700` class:

Hover over this button to see the background color change

```html
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

When writing CSS the traditional way, a single class name would do different things based on the current state:

Traditionally the same class name applies different styles on hover

```css
.btn-primary {  background-color: #0ea5e9;}
.btn-primary:hover {  background-color: #0369a1;}
```

In Tailwind, rather than adding the styles for a hover state to an existing class, you add another class to the element that _only_ does something on hover:

In Tailwind, separate classes are used for the default state and the hover state

```css
.bg-sky-500 {  background-color: #0ea5e9;}
.hover\:bg-sky-700:hover {  background-color: #0369a1;}
```

Notice how `hover:bg-sky-700` _only_ defines styles for the `:hover` state? It does nothing by default, but as soon as you hover over an element with that class, the background color will change to `sky-700`.

This is what we mean when we say a utility class can be applied _conditionally_ — by using variants you can control exactly how your design behaves in different states, without ever leaving your HTML.

Tailwind includes variants for just about everything you'll ever need, including:

-   [Pseudo-classes](https://tailwindcss.com/docs/box-decoration-break#pseudo-classes), like `:hover`, `:focus`, `:first-child`, and `:required`
-   [Pseudo-elements](https://tailwindcss.com/docs/box-decoration-break#pseudo-elements), like `::before`, `::after`, `::placeholder`, and `::selection`
-   [Media and feature queries](https://tailwindcss.com/docs/box-decoration-break#media-and-feature-queries), like responsive breakpoints, dark mode, and `prefers-reduced-motion`
-   [Attribute selectors](https://tailwindcss.com/docs/box-decoration-break#attribute-selectors), like `[dir="rtl"]` and `[open]`
-   [Child selectors](https://tailwindcss.com/docs/box-decoration-break#child-selectors), like `& > *` and `& *`

These variants can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:

```html
<button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
```

In this guide you'll learn about every variant available in the framework, how to use them with your own custom classes, and even how to create your own.

## Pseudo-classes

### :hover, :focus, and :active

Style elements on hover, focus, and active using the `hover`, `focus`, and `active` variants:

Try interacting with this button to see the hover, focus, and active states

```html
<button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">  Save changes</button>
```

Tailwind also includes variants for other interactive states like `:visited`, `:focus-within`, `:focus-visible`, and more.

See the [pseudo-class reference](https://tailwindcss.com/docs/box-decoration-break#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :first, :last, :odd, and :even

Style an element when it is the first-child or last-child using the `first` and `last` variants:

-   ![Kristen Ramos](https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    Kristen Ramos

    kristen.ramos@example.com

-   ![Floyd Miles](https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    Floyd Miles

    floyd.miles@example.com

-   ![Courtney Henry](https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    Courtney Henry

    courtney.henry@example.com

-   ![Ted Fox](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    Ted Fox

    ted.fox@example.com

```html
<ul role="list">  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
      </div>
    </li>
  {/each}</ul>
```

You can also style an element when it's an odd or even child using the `odd` and `even` variants:

| Name             | Title                        | Email                       |
| ---------------- | ---------------------------- | --------------------------- |
| Jane Cooper      | Regional Paradigm Technician | jane.cooper@example.com     |
| Cody Fisher      | Product Directives Officer   | cody.fisher@example.com     |
| Leonard Krasner  | Senior Designer              | leonard.krasner@example.com |
| Emily Selman     | VP, Hardware Engineering     | emily.selman@example.com    |
| Anna Roberts    | Chief Strategy Officer       | anna.roberts@example.com    |

```html
<table>
  <!-- ... -->
  <tbody>
    {#each people as person}
      <!-- Use different background colors for odd and even rows -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody></table>
```

Use the `nth-*` and `nth-last-*` variants to style children based on their position in the list:

```html
<div class="nth-3:underline">
  <!-- ... -->
</div>
<div class="nth-last-5:underline">
  <!-- ... -->
</div>
<div class="nth-of-type-4:underline">
  <!-- ... -->
</div>
<div class="nth-last-of-type-6:underline">
  <!-- ... -->
</div>
```

You can pass any number you want to these by default, and use arbitrary values for more complex expressions like `nth-[2n+1_of_li]`.

Tailwind also includes variants for other structural pseudo-classes like `:only-child`, `:first-of-type`, `:empty`, and more.

See the [pseudo-class reference](https://tailwindcss.com/docs/box-decoration-break#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :required and :disabled

Style form elements in different states using variants like `required`, `invalid`, and `disabled`:

Try making the email address valid to see the styles change

|             |             |             |
| ----------- | ----------- | ----------- |
| Username    | Email       | Password    |
|             |             |             |

```html
<input
  type="text"
  value="tbone"
  disabled
  class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
/>
```

Using variants for this sort of thing can reduce the amount of conditional logic in your templates, letting you use the same set of classes regardless of what state an input is in and letting the browser apply the right styles for you.

Tailwind also includes variants for other form states like `:read-only`, `:indeterminate`, `:checked`, and more.

See the [pseudo-class reference](https://tailwindcss.com/docs/box-decoration-break#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :has()

Use the `has-*` variant to style an element based on the state or content of its descendants:

| Payment method |             |
| -------------- | ----------- |
|                | Google PayApple Pay |
|                | Credit Card |

```html
<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
```

You can use `has-*` with a pseudo-class, like `has-[:focus]`, to style an element based on the state of its descendants. You can also use element selectors, like `has-[img]` or `has-[a]`, to style an element based on the content of its descendants.

#### Styling based on the descendants of a group

If you need to style an element based on the descendants of a parent element, you can mark the parent with the `group` class and use the `group-has-*` variant to style the target element:

![Spencer Sharp](https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=80)

Spencer Sharp

Product Designer at [planeteria.tech](https://tailwindcss.com/docs/box-decoration-break#)

![Casey Jordan](https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Casey Jordan

Just happy to be here.

![Alex Reed](https://images.unsplash.com/photo-1590895340509-793cb98788c9?q=80&w=256&h=256&&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Alex Reed

A multidisciplinary designer, working at the intersection of art and technology.

[alex-reed.com](https://tailwindcss.com/docs/box-decoration-break#)

![Taylor Bailey](https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Taylor Bailey

Pushing pixels. Slinging divs.

```html
<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>
```

#### Styling based on the descendants of a peer

If you need to style an element based on the descendants of a sibling element, you can mark the sibling with the `peer` class and use the `peer-has-*` variant to style the target element:

|       |       |
| ----- | ----- |
| Today |       |

```html
<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ..."><!-- ... --></svg>
</div>
```

### :not()

Use the `not-` variant to style an element when a condition is not true.

It's particularly powerful when combined with other pseudo-class variants, for example combining `not-focus:` with `hover:` to only apply hover styles when an element is not focused:

Try focusing on the button and then hovering over it

```html
<button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
  <!-- ... -->
</button>
```

You can also combine the `not-` variant with media query variants like `forced-colors` or `supports` to only style an element when something about the user's environment is not true:

```html
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

### Styling based on parent state

When you need to style an element based on the state of some _parent_ element, mark the parent with the `group` class, and use `group-*` variants like `group-hover` to style the target element:

Hover over the card to see both text elements change color

[

](https://tailwindcss.com/docs/box-decoration-break#)

[

New project

Create a new project from a variety of starting templates.

](https://tailwindcss.com/docs/box-decoration-break#)

```html
<a href="#" class="group ...">
  <div>
    <svg class="stroke-sky-500 group-hover:stroke-white ..." fill="none" viewBox="0 0 24 24">
      <!-- ... -->
    </svg>
    <h3 class="text-gray-900 group-hover:text-white ...">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
</a>
```

This pattern works with every pseudo-class variant, for example `group-focus`, `group-active`, or even `group-odd`.

#### Differentiating nested groups

When nesting groups, you can style something based on the state of a _specific_ parent group by giving that parent a unique group name using a `group/{name}` class, and including that name in variants using classes like `group-hover/{name}`:

-   ![Leslie Abbott](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    [Leslie Abbott](https://tailwindcss.com/docs/box-decoration-break#)

    Co-Founder / CEO

    [Call](https://tailwindcss.com/docs/box-decoration-break#)

![Hector Adams](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

[Hector Adams](https://tailwindcss.com/docs/box-decoration-break#)

VP, Marketing

[Call](https://tailwindcss.com/docs/box-decoration-break#)

![Blake Alexander](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

[Blake Alexander](https://tailwindcss.com/docs/box-decoration-break#)

Account Coordinator

[Call](https://tailwindcss.com/docs/box-decoration-break#)

```html
<ul role="list">
  {#each people as person}
    <li class="group/item ...">
      <!-- ... -->
      <a class="group/edit invisible group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500 ..."><!-- ... --></svg>
      </a>
    </li>
  {/each}</ul>
```

Groups can be named however you like and don’t need to be configured in any way — just name your groups directly in your markup and Tailwind will automatically generate the necessary CSS.

#### Arbitrary groups

You can create one-off `group-*` variants on the fly by providing your own selector as an [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) between square brackets:

```html
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">
    Published
  </div>
</div>
```

For more control, you can use the `&` character to mark where `.group` should end up in the final selector relative to the selector you are passing in:

```html
<div class="group">
  <div class="group-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

#### Implicit groups

The `in-*` variant works similarly to `group` except you don't need to add `group` to the parent element:

```html
<div tabindex="0" class="group">
  <div class="opacity-50 group-focus:opacity-100">
<div tabindex="0">
  <div class="opacity-50 in-focus:opacity-100">
    <!-- ... -->
  </div>
</div>
```

The `in-*` variant responds to state changes in any parent, so if you want more fine-grained control you'll need to use `group` instead.

### Styling based on sibling state

When you need to style an element based on the state of a _sibling_ element, mark the sibling with the `peer` class, and use `peer-*` variants like `peer-invalid` to style the target element:

Try making the email address valid to see the warning disappear

|       |       |
| ----- | ----- |
| Email |       |
|       | Please provide a valid email address. |

```html
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

This makes it possible to do all sorts of neat tricks, like [floating labels](https://www.youtube.com/watch?v=nJzKi6oIvBA) for example without any JS.

This pattern works with every pseudo-class variant, for example `peer-focus`, `peer-required`, and `peer-disabled`.

It's important to note that the `peer` marker can only be used on _previous_ siblings because of how the [subsequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) works in CSS:

Won't work, only previous siblings can be marked as peers

```html
<label>
  <span class="peer-invalid:text-red-500 ...">Email</span>
  <input type="email" class="peer ..." />
</label>
```

#### Differentiating peers

When using multiple peers, you can style something on the state of a _specific_ peer by giving that peer a unique name using a `peer/{name}` class, and including that name in variants using classes like `peer-checked/{name}`:

| Published status |       |
| ---------------- | ----- |
|                  | DraftPublished |
|                  | Drafts are only visible to administrators. |
|                  | Your post will be publicly visible on your site. |

```html
<fieldset>
  <legend>Published status</legend>
  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>
  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>
  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

Peers can be named however you like and don’t need to be configured in any way — just name your peers directly in your markup and Tailwind will automatically generate the necessary CSS.

#### Arbitrary peers

You can create one-off `peer-*` variants on the fly by providing your own selector as an [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) between square brackets:

```html
<form>
  <label for="email">Email:</label>
  <input id="email" name="email" type="email" class="is-dirty peer" required />
  <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
  <!-- ... -->
</form>
```

For more control, you can use the `&` character to mark where `.peer` should end up in the final selector relative to the selector you are passing in:

```html
<div>
  <input type="text" class="peer" />
  <div class="hidden peer-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

## Pseudo-elements

### ::before and ::after

Style the `::before` and `::after` pseudo-elements using the `before` and `after` variants:

|       |       |
| ----- | ----- |
| Email |       |

```html
<label>
  <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
  <input type="email" name="email" class="..." placeholder="you@example.com" />
</label>
```

When using these variants, Tailwind will automatically add `content: ''` by default so you don't have to specify it unless you want a different value:

> When you look annoyed all the time, people think that you're busy.

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
  When you look
  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white dark:text-gray-950">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

It's worth noting that you don't really need `::before` and `::after` pseudo-elements for most things in Tailwind projects — it's usually simpler to just use a real HTML element.

For example, here's the same design from above but using a `<span>` instead of the `::before` pseudo-element, which is a little easier to read and is actually less code:

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic">
  When you look
  <span class="relative">
    <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

Save `before` and `after` for situations where it's important that the content of the pseudo-element is not actually in the DOM and can't be selected by the user.

### ::placeholder

Style the placeholder text of any input or textarea using the `placeholder` variant:

|       |       |
| ----- | ----- |
| Search |       |

```html
<input
  class="placeholder:text-gray-500 placeholder:italic ..."
  placeholder="Search for anything..."
  type="text"
  name="search"
/>
```

### ::file

Style the button in file inputs using the `file` variant:

![Current profile photo](https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80)

|       |       |
| ----- | ----- |
|       | Choose profile photo |

```html
<input
  type="file"
  class="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>
```

### ::marker

Style the counters or bullets in lists using the `marker` variant:

## Ingredients

-   5 cups chopped Porcini mushrooms
-   1/2 cup of olive oil
-   3lb of celery

```html
<ul role="list" class="list-disc marker:text-sky-400 ...">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

We've designed the `marker` variant to be inheritable, so although you can use it directly on an `<li>` element, you can also use it on a parent to avoid repeating yourself.

### ::selection

Style the active text selection using the `selection` variant:

Try selecting some of this text with your mouse

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```html
<div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
  <p>
    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my
    way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all
    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
  </p>
</div>
```

We've designed the `selection` variant to be inheritable, so you can add it anywhere in the tree and it will be applied to all descendant elements.

This makes it easy to set the selection color to match your brand across your entire site:

```html
<html>
  <head>
    <!-- ... -->
  </head>
  <body class="selection:bg-pink-300">
    <!-- ... -->
  </body></html>
```

### ::first-line and ::first-letter

Style the first line in a block of content using the `first-line` variant, and the first letter using the `first-letter` variant:

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

```html
<div class="text-gray-700">
  <p
    class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase"
  >
    Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?
  </p>
  <p class="mt-6">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
</div>
```

### ::backdrop

Style the backdrop of a [native `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) using the `backdrop` variant:

```html
<dialog class="backdrop:bg-gray-50">
  <form method="dialog">
    <!-- ... -->
  </form></dialog>
```

If you're using native `<dialog>` elements in your project, you may also want to read about [styling open/closed states](https://tailwindcss.com/docs/hover-focus-and-other-states#openclosed-state) using the `open` variant.

## Media and feature queries

### Responsive breakpoints

To style an element at a specific breakpoint, use responsive variants like `md` and `lg`.

For example, this will render a 3-column grid on mobile, a 4-column grid on medium-width screens, and a 6-column grid on large-width screens:

```html
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  <!-- ... -->
</div>
```

To style an element based on the width of a parent element instead of the viewport, use variants like `@md` and `@lg`:

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

Check out the [Responsive design](https://tailwindcss.com/docs/responsive-design) documentation for an in-depth look at how these features work.

### prefers-color-scheme

The `prefers-color-scheme` media query tells you whether the user prefers a light theme or dark theme, and is usually configured at the operating system level.

Use utilities with no variant to target light mode, and use the `dark` variant to provide overrides for dark mode:

| Light mode |       |
| ---------- | ----- |
|            | Writes upside-down |
|            | The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space. |
| Dark mode  |       |
|            | Writes upside-down |
|            | The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space. |

```html
<div class="bg-white dark:bg-gray-900 ...">
  <!-- ... -->
  <h3 class="text-gray-900 dark:text-white ...">Writes upside-down</h3>
  <p class="text-gray-500 dark:text-gray-400 ...">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

Check out the [Dark Mode](https://tailwindcss.com/docs/dark-mode) documentation for an in-depth look at how this feature works.

### prefers-reduced-motion

The `prefers-reduced-motion` media query tells you if the user has requested that you minimize non-essential motion.

Use the `motion-reduce` variant to conditionally add styles when the user has requested reduced motion:

Try emulating `prefers-reduced-motion: reduce` in your developer tools to hide the spinner

```html
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin motion-reduce:hidden ..." viewBox="0 0 24 24"><!-- ... --></svg>
  Processing...</button>
```

Tailwind also includes a `motion-safe` variant that only adds styles when the user has _not_ requested reduced motion. This can be useful when using the `motion-reduce` helper would mean having to "undo" a lot of styles:

```html
<!-- Using `motion-reduce` can mean lots of "undoing" styles -->
<button class="transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ...">
  Save changes</button>

<!-- Using `motion-safe` is less code in these situations -->
<button class="motion-safe:transition motion-safe:hover:-translate-x-0.5 ...">Save changes</button>
```

### prefers-contrast

The `prefers-contrast` media query tells you if the user has requested more or less contrast.

Use the `contrast-more` variant to conditionally add styles when the user has requested more contrast:

Try emulating `prefers-contrast: more` in your developer tools to see the changes

|       |       |
| ----- | ----- |
| Social Security Number |       |
|       | We need this to steal your identity. |

```html
<label class="block">
  <span class="block text-sm font-medium text-gray-700">Social Security Number</span>
  <input
    class="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
  />
  <p class="text-gray-600 opacity-10 contrast-more:opacity-100 ...">We need this to steal your identity.</p></label>
```

Tailwind also includes a `contrast-less` variant you can use to conditionally add styles when the user has requested less contrast.

### forced-colors

The `forced-colors` media query indicates if the user is using a forced colors mode. These modes override your site's colors with a user defined palette for text, backgrounds, links and buttons.

Use the `forced-colors` variant to conditionally add styles when the user has enabled a forced color mode:

Try emulating `forced-colors: active` in your developer tools to see the changes

| Choose a theme: |       |       |       |
| --------------- | ----- | ----- | ----- |
|                 | Cyan  | Blue  | Indigo |
|                 | Purple |       |       |

```html
<label>
  <input type="radio" class="appearance-none forced-colors:appearance-auto" />
  <p class="hidden forced-colors:block">Cyan</p>
  <div class="bg-cyan-200 forced-colors:hidden ..."></div>
  <div class="bg-cyan-500 forced-colors:hidden ..."></div></label>
```

Use the `not-forced-colors` variant to apply styles based when the user is _not_ using a forced colors mode:

```html
<div class="not-forced-colors:appearance-none ...">
  <!-- ... -->
</div>
```

Tailwind also includes a [forced color adjust](https://tailwindcss.com/docs/forced-color-adjust) utilities to opt in and out of forced colors.

### orientation

Use the `portrait` and `landscape` variants to conditionally add styles when the viewport is in a specific orientation:

```html
<div>
  <div class="portrait:hidden">
    <!-- ... -->
  </div>
  <div class="landscape:hidden">
    <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
  </div>
</div>
```

### print

Use the `print` variant to conditionally add styles that only apply when the document is being printed:

```html
<div>
  <article class="print:hidden">
    <h1>My Secret Pizza Recipe</h1>
    <p>This recipe is a secret, and must not be shared with anyone</p>
    <!-- ... -->
  </article>
  <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
</div>
```

### @supports

Use the `supports-[...]` variant to style things based on whether a certain feature is supported in the user's browser:

```html
<div class="flex supports-[display:grid]:grid ...">
  <!-- ... -->
</div>
```

Under the hood the `supports-[...]` variant generates [`@supports rules`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) and takes anything you’d use with `@supports (...)` between the square brackets, like a property/value pair, and even expressions using `and` and `or`.

For terseness, if you only need to check if a property is supported (and not a specific value), you can just specify the property name:

```html
<div class="bg-black/75 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:backdrop-blur ...">
  <!-- ... -->
</div>
```

Use the `not-supports-[...]` variant to style things based on whether a certain feature is not supported in the user's browser:

```html
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

You can configure shortcuts for common `@supports` rules you're using in your project by creating a new variant in the `supports-*` namespace:

```css
@custom-variant supports-grid {
  @supports (display: grid) {
    @slot;
  }
}
```

You can then use these custom `supports-*` variants in your project:

```html
<div class="supports-grid:grid">
  <!-- ... -->
</div>
```

### @starting-style

Use the `starting` variant to set the appearance of an element when it is first rendered in the DOM, or transitions from `display: none` to visible:

```html
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="opacity-0 starting:open:opacity-0 ...">
    <!-- ... -->
  </div>
</div>
```

## Attribute selectors

### ARIA states

Use the `aria-*` variant to conditionally style things based on [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes).

For example, to apply the `bg-sky-700` class when the `aria-checked` attribute is set to `true`, use the `aria-checked:bg-sky-700` class:

```html
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700">
  <!-- ... -->
</div>
```

By default we've included variants for the most common boolean ARIA attributes:

| Variant        | CSS                       |
| -------------- | ------------------------- |
| `aria-busy`    | `&[aria-busy="true"]`     |
| `aria-checked` | `&[aria-checked="true"]`  |
| `aria-disabled`| `&[aria-disabled="true"]` |
| `aria-expanded`| `&[aria-expanded="true"]` |
| `aria-hidden`  | `&[aria-hidden="true"]`   |
| `aria-pressed` | `&[aria-pressed="true"]`  |
| `aria-readonly`| `&[aria-readonly="true"]` |
| `aria-required`| `&[aria-required="true"]` |
| `aria-selected`| `&[aria-selected="true"]` |

You can customize which `aria-*` variants are available by creating a new variant:

```css
@custom-variant aria-asc (&[aria-sort="ascending"]);
@custom-variant aria-desc (&[aria-sort="descending"]);
```

If you need to use a one-off `aria` variant that doesn’t make sense to include in your project, or for more complex ARIA attributes that take specific values, use square brackets to generate a property on the fly using any arbitrary value:

| Invoice # | Client                     | Amount      |
| --------- | -------------------------- | ----------- |
| #100      | Pendant Publishing         | $2,000.00   |
| #101      | Kruger Industrial Smoothing| $545.00     |
| #102      | J. Peterman                | $10,000.25  |

```html
<table>
  <thead>
    <tr>
      <th
        aria-sort="ascending"
        class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"
      >
        Invoice #
      </th>
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... --></table>
```

ARIA state variants can also target parent and sibling elements using the `group-aria-*` and `peer-aria-*` variants:

```html
<table>
  <thead>
    <tr>
    <th aria-sort="ascending" class="group">
      Invoice #
      <svg class="group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"><!-- ... --></svg>
    </th>
    <!-- ... -->
    </tr>
  </thead>
  <!-- ... --></table>
```

### Data attributes

Use the `data-*` variant to conditionally apply styles based on [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

To check if a data attribute exists (and not a specific value), you can just specify the attribute name:

```html
<!-- Will apply -->
<div data-active class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>

<!-- Will not apply -->
<div class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>
```

If you need to check for a specific value you may use an arbitrary value:

```html
<!-- Will apply -->
<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>

<!-- Will not apply -->
<div data-size="medium" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

Alternatively, you can configure shortcuts for common data attributes you're using in your project by creating a new variant in the `data-*` namespace:

app.css

```css
@import "tailwindcss";

@custom-variant data-checked (&[data-ui~="checked"]);
```

You can then use these custom `data-*` variants in your project:

```html
<div data-ui="checked active" class="data-checked:underline">
  <!-- ... -->
</div>
```

### RTL support

Use the `rtl` and `ltr` variants to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts:

| Left-to-right |       |
| ------------- | ----- |
|               | ![Tom Cook](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80) |
|               | Tom Cook |
|               | Director of Operations |
| Right-to-left|       |
|               | ![تامر كرم](https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80) |
|               | تامر كرم |
|               | الرئيس التنفيذي |

```html
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  <div class="ltr:ml-3 rtl:mr-3">
    <p class="text-gray-700 group-hover:text-gray-900 ...">...</p>
    <p class="text-gray-500 group-hover:text-gray-700 ...">...</p>
  </div>
</div>
```

Remember, these variants are only useful if you are building a site that needs to support _both_ left-to-right and right-to-left layouts. If you're building a site that only needs to support a single direction, you don't need these variants — just apply the styles that make sense for your content.

### Open/closed state

Use the `open` variant to conditionally add styles when a `<details>` or `<dialog>` element is in an open state:

Try toggling the disclosure to see the styles change

|       |       |
| ----- | ----- |
|       | The mug is round. The jar is round. They should call it Roundtine. |

```html
<details class="border border-transparent open:border-black/10 open:bg-gray-100 ..." open>
  <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">Why do they call it Ovaltine?</summary>
  <div class="mt-3 text-sm leading-6 text-gray-600">
    <p>The mug is round. The jar is round. They should call it Roundtine.</p>
  </div></details>
```

This variant also targets the `:popover-open` pseudo-class for popovers:

```html
<div>
  <button popovertarget="my-popover">Open Popover</button>
  <div popover id="my-popover" class="opacity-0 open:opacity-100 ...">
    <!-- ... -->
  </div>
</div>
```

### Styling inert elements

The `inert` variant lets you style elements marked with the `inert` attribute:

| Notification preferences |       |       |
| ----------------------- | ----- | ----- |
|                         | Custom | Everything |

```html
<form>
  <legend>Notification preferences</legend>
  <fieldset>
    <input type="radio" />
    <label> Custom </label>
    <fieldset inert class="inert:opacity-50">
      <!-- ... -->
    </fieldset>
    <input type="radio" />
    <label> Everything </label>
  </fieldset></form>
```

This is useful for adding visual cues that make it clear that sections of content aren't interactive.

## Child selectors

### Styling direct children

While it's generally preferable to put utility classes directly on child elements, you can use the `*` variant in situations where you need to style direct children that you don’t have control over:

## Categories

|          |          |        |        |
| -------- | -------- | ------ | ------ |
| Sales    | Marketing| SEO    | Analytics |
| Design   | Strategy | Security| Growth |
| Mobile   | UX/UI    |        |        |

```html
<div>
  <h2>Categories<h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul></div>
```

It's important to note that overriding a style with a utility directly on the child itself won't work due to the specificity of the generated child selector:

Won't work, children can't override their own styling.

```html
<ul class="*:bg-sky-50 ...">
  <li class="bg-red-50 ...">Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
  <!-- ... --></ul>
```

### Styling all descendants

Like `*`, the `**` variant can be used to style children of an element. The main difference is that `**` will apply styles to _all_ descendants, not just the direct children. This is especially useful when you combine it with another variant for narrowing the thing you're selecting:

-   ![Leslie Abbott](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    [Leslie Abbott](https://tailwindcss.com/docs/box-decoration-break#)

    Co-Founder / CEO

-   ![Hector Adams](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    [Hector Adams](https://tailwindcss.com/docs/box-decoration-break#)

    VP, Marketing

-   ![Blake Alexander](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

    [Blake Alexander](https://tailwindcss.com/docs/box-decoration-break#)

    Account Coordinator

```html
<ul class="**:data-avatar:size-12 **:data-avatar:rounded-full ...">
  {#each items as item}
    <li>
      <img src={item.src} data-avatar />
      <p>{item.name}</p>
    </li>
  {/each}</ul>
```

## Custom variants

### Using arbitrary variants

Just like [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) let you use custom values with your utility classes, arbitrary variants let you write custom selector variants directly in your HTML.

Arbitrary variants are just format strings that represent the selector, wrapped in square brackets. For example, this arbitrary variant changes the cursor to `grabbing` when the element has the `is-dragging` class:

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
  {/each}</ul>
```

Arbitrary variants can be stacked with built-in variants or with each other, just like the rest of the variants in Tailwind:

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:active:cursor-grabbing">{item}</li>
  {/each}</ul>
```

If you need spaces in your selector, you can use an underscore. For example, this arbitrary variant selects all `p` elements within the element where you've added the class:

```html
<div class="[&_p]:mt-4">
  <p>Lorem ipsum...</p>
  <ul>
    <li>
      <p>Lorem ipsum...</p>
    </li>
    <!-- ... -->
  </ul></div>
```

You can also use at-rules like `@media` or `@supports` in arbitrary variants:

```html
<div class="flex [@supports(display:grid)]:grid">
  <!-- ... -->
</div>
```

With at-rule custom variants the `&` placeholder isn't necessary, just like when nesting with a preprocessor.

### Registering a custom variant

If you find yourself using the same arbitrary variant multiple times in your project, it might be worth creating a custom variant:

```css
@custom-variant pointer-coarse {
  @media (pointer: coarse) {
    @slot;
  }
}
```

Now you can use the `pointer-coarse:<utility>` variant in your HTML:

```html
<button class="pointer-coarse:size-12 ..."></button>
```

You can create variants using the shorthand syntax when nesting isn't required:

```css
@custom-variant pointer-coarse (@media (pointer: coarse));
```

When a custom variant has multiple rules, they can be nested within each other:

```css
@custom-variant any-hover {
  @media (any-hover: hover) {
    &:hover {
      @slot;
    }
  }
}
```

## Appendix

### Quick reference

A quick reference table of every single variant included in Tailwind by default.

| Variant                     | CSS                                   |
| --------------------------- | ------------------------------------- |
| [hover](https://tailwindcss.com/docs/box-decoration-break#hover) | `@media (hover: hover) { &:hover }`   |
| [focus](https://tailwindcss.com/docs/box-decoration-break#focus) | `&:focus`                             |
| [focus-within](https://tailwindcss.com/docs/box-decoration-break#focus-within) | `&:focus-within`                      |
| [focus-visible](https://tailwindcss.com/docs/box-decoration-break#focus-visible) | `&:focus-visible`                     |
| [active](https://tailwindcss.com/docs/box-decoration-break#active) | `&:active`                            |
| [visited](https://tailwindcss.com/docs/box-decoration-break#visited) | `&:visited`                           |
| [target](https://tailwindcss.com/docs/box-decoration-break#target) | `&:target`                            |
| [\*](https://tailwindcss.com/docs/box-decoration-break#styling-direct-children) | `:is(& > *)`                          |
| [\*\*](https://tailwindcss.com/docs/box-decoration-break#styling-all-descendants) | `:is(& *)`                            |
| [has-\[...\]](https://tailwindcss.com/docs/box-decoration-break#has) | `&:has(...)`                          |
| [group-\[...\]](https://tailwindcss.com/docs/box-decoration-break#styling-based-on-parent-state) | `&:is(:where(.group)... *)`            |
| [peer-\[...\]](https://tailwindcss.com/docs/box-decoration-break#styling-based-on-sibling-state) | `&:is(:where(.peer)... ~ *)`          |
| [in-\[...\]](https://tailwindcss.com/docs/box-decoration-break#implicit-groups) | `:where(...) &`                        |
| [not-\[...\]](https://tailwindcss.com/docs/box-decoration-break#not) | `&:not(...)`                          |
| [inert](https://tailwindcss.com/docs/box-decoration-break#styling-inert-elements) | `&:is([inert], [inert] *)`            |
| [first](https://tailwindcss.com/docs/box-decoration-break#first) | `&:first-child`                       |
| [last](https://tailwindcss.com/docs/box-decoration-break#last) | `&:last-child`                        |
| [only](https://tailwindcss.com/docs/box-decoration-break#only) | `&:only-child`                        |
| [odd](https://tailwindcss.com/docs/box-decoration-break#odd) | `&:nth-child(odd)`                    |
| [even](https://tailwindcss.com/docs/box-decoration-break#even) | `&:nth-child(even)`                   |
| [first-of-type](https://tailwindcss.com/docs/box-decoration-break#first-of-type) | `&:first-of-type`                     |
| [last-of-type](https://tailwindcss.com/docs/box-decoration-break#last-of-type) | `&:last-of-type`                      |
| [only-of-type](https://tailwindcss.com/docs/box-decoration-break#only-of-type) | `&:only-of-type`                      |
| [nth-\[...\]](https://tailwindcss.com/docs/box-decoration-break#nth) | `&:nth-child(...)`                    |
| [nth-last-\[...\]](https://tailwindcss.com/docs/box-decoration-break#nth-last) | `&:nth-last-child(...)`               |
| [nth-of-type-\[...\]](https://tailwindcss.com/docs/box-decoration-break#nth-of-type) | `&:nth-of-type(...)`                    |
| [nth-last-of-type-\[...\]](https://tailwindcss.com/docs/box-decoration-break#nth-last-of-type) | `&:nth-last-of-type(...)`             |
| [empty](https://tailwindcss.com/docs/box-decoration-break#empty) | `&:empty`                             |
| [disabled](https://tailwindcss.com/docs/box-decoration-break#disabled) | `&:disabled`                          |
| [enabled](https://tailwindcss.com/docs/box-decoration-break#enabled) | `&:enabled`                           |
| [checked](https://tailwindcss.com/docs/box-decoration-break#checked) | `&:checked`                           |
| [indeterminate](https://tailwindcss.com/docs/box-decoration-break#indeterminate) | `&:indeterminate`                     |
| [default](https://tailwindcss.com/docs/box-decoration-break#default) | `&:default`                           |
| [optional](https://tailwindcss.com/docs/box-decoration-break#optional) | `&:optional`                          |
| [required](https://tailwindcss.com/docs/box-decoration-break#required) | `&:required`                          |
| [valid](https://tailwindcss.com/docs/box-decoration-break#valid) | `&:valid`                             |
| [invalid](https://tailwindcss.com/docs/box-decoration-break#invalid) | `&:invalid`                           |
| [in-range](https://tailwindcss.com/docs/box-decoration-break#in-range) | `&:in-range`                          |
| [out-of-range](https://tailwindcss.com/docs/box-decoration-break#out-of-range) | `&:out-of-range`                      |
| [placeholder-shown](https://tailwindcss.com/docs/box-decoration-break#placeholder-shown) | `&:placeholder-shown`                 |
| [autofill](https://tailwindcss.com/docs/box-decoration-break#autofill) | `&:autofill`                          |
| [read-only](https://tailwindcss.com/docs/box-decoration-break#read-only) | `&:read-only`                         |
| [before](https://tailwindcss.com/docs/box-decoration-break#before-and-after) | `&::before`                           |
| [after](https://tailwindcss.com/docs/box-decoration-break#before-and-after) | `&::after`                            |
| [first-letter](https://tailwindcss.com/docs/box-decoration-break#first-line-and-first-letter) | `&::first-letter`                     |
| [first-line](https://tailwindcss.com/docs/box-decoration-break#first-line-and-first-letter) | `&::first-line`                       |
| [marker](https://tailwindcss.com/docs/box-decoration-break#marker) | `&::marker, & *::marker`              |
| [selection](https://tailwindcss.com/docs/box-decoration-break#selection) | `&::selection`                        |
| [file](https://tailwindcss.com/docs/box-decoration-break#file) | `&::file-selector-button`              |
| [backdrop](https://tailwindcss.com/docs/box-decoration-break#backdrop) | `&::backdrop`                         |
| [placeholder](https://tailwindcss.com/docs/box-decoration-break#placeholder) | `&::placeholder`                      |
| [sm](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= 40rem)`             |
| [md](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= 48rem)`             |
| [lg](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= 64rem)`             |
| [xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= 80rem)`             |
| [2xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= 96rem)`             |
| [min-\[...\]](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width >= ...)`              |
| [max-sm](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < 40rem)`              |
| [max-md](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < 48rem)`              |
| [max-lg](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < 64rem)`              |
| [max-xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < 80rem)`              |
| [max-2xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < 96rem)`              |
| [max-\[...\]](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@media (width < ...)`               |
| [@3xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 16rem)`         |
| [@2xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 18rem)`         |
| [@xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 20rem)`         |
| [@sm](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 24rem)`         |
| [@md](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 28rem)`         |
| [@lg](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 32rem)`         |
| [@xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 36rem)`         |
| [@2xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 42rem)`         |
| [@3xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 48rem)`         |
| [@4xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 56rem)`         |
| [@5xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 64rem)`         |
| [@6xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 72rem)`         |
| [@7xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= 80rem)`         |
| [@min-\[...\]](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width >= ...)`          |
| [@max-3xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 16rem)`          |
| [@max-2xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 18rem)`          |
| [@max-xs](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 20rem)`          |
| [@max-sm](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 24rem)`          |
| [@max-md](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 28rem)`          |
| [@max-lg](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 32rem)`          |
| [@max-xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 36rem)`          |
| [@max-2xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 42rem)`          |
| [@max-3xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 48rem)`          |
| [@max-4xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 56rem)`          |
| [@max-5xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 64rem)`          |
| [@max-6xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 72rem)`          |
| [@max-7xl](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < 80rem)`          |
| [@max-\[...\]](https://tailwindcss.com/docs/box-decoration-break#responsive-breakpoints) | `@container (width < ...)`           |
| [dark](https://tailwindcss.com/docs/box-decoration-break#prefers-color-scheme) | `@media (prefers-color-scheme: dark)` |
| [portrait](https://tailwindcss.com/docs/box-decoration-break#orientation) | `@media (orientation: portrait)`       |
| [landscape](https://tailwindcss.com/docs/box-decoration-break#orientation) | `@media (orientation: landscape)`      |
| [motion-safe](https://tailwindcss.com/docs/box-decoration-break#prefers-reduced-motion) | `@media (prefers-reduced-motion: no-preference)` |
| [motion-reduce](https://tailwindcss.com/docs/box-decoration-break#prefers-reduced-motion) | `@media (prefers-reduced-motion: reduce)` |
| [contrast-more](https://tailwindcss.com/docs/box-decoration-break#prefers-contrast) | `@media (prefers-contrast: more)`     |
| [contrast-less](https://tailwindcss.com/docs/box-decoration-break#prefers-contrast) | `@media (prefers-contrast: less)`     |
| [print](https://tailwindcss.com/docs/box-decoration-break#print) | `@media print`                          |
| [supports-\[…\]](https://tailwindcss.com/docs/box-decoration-break#supports) | `@supports (…)`                        |
| [aria-busy](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-busy="true"]`                  |
| [aria-checked](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-checked="true"]`               |
| [aria-disabled](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-disabled="true"]`              |
| [aria-expanded](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-expanded="true"]`              |
| [aria-hidden](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-hidden="true"]`                |
| [aria-pressed](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-pressed="true"]`               |
| [aria-readonly](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-readonly="true"]`              |
| [aria-required](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-required="true"]`              |
| [aria-selected](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-selected="true"]`              |
| [aria-\[…\]](https://tailwindcss.com/docs/box-decoration-break#aria-states) | `&[aria-…]`                            |
| [data-\[...\]](https://tailwindcss.com/docs/box-decoration-break#data-attributes) | `&[data-...]`                          |
| [rtl](https://tailwindcss.com/docs/box-decoration-break#rtl-support) | `[dir="rtl"] &`                         |
| [ltr](https://tailwindcss.com/docs/box-decoration-break#rtl-support) | `[dir="ltr"] &`                         |
| [open](https://tailwindcss.com/docs/box-decoration-break#openclosed-state) | `&:is([open], :popover-open)`           |
| [forced-colors](https://tailwindcss.com/docs/box-decoration-break#forced-colors) | `@media (forced-colors: active)`       |
| [starting](https://tailwindcss.com/docs/box-decoration-break#starting-style) | `@starting-style`                      |

### Pseudo-class reference

This is a comprehensive list of examples for all the pseudo-class variants included in Tailwind to complement the [pseudo-classes documentation](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes) at the beginning of this guide.

#### :hover

Style an element when the user hovers over it with the mouse cursor using the `hover` variant:

```html
<div class="bg-black hover:bg-white ...">
  <!-- ... -->
</div>
```

#### :focus

Style an element when it has focus using the `focus` variant:

```html
<input class="border-gray-300 focus:border-blue-400 ..." />
```

#### :focus-within

Style an element when it or one of its descendants has focus using the `focus-within` variant:

```html
<div class="focus-within:shadow-lg ...">
  <input type="text" /></div>
```

#### :focus-visible

Style an element when it has been focused using the keyboard using the `focus-visible` variant:

```html
<button class="focus-visible:outline-2 ...">Submit</button>
```

#### :active

Style an element when it is being pressed using the `active` variant:

```html
<button class="bg-blue-500 active:bg-blue-600 ...">Submit</button>
```

#### :visited

Style a link when it has already been visited using the `visited` variant:

```html
<a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 ..."> Inspiration </a>
```

#### :target

Style an element if its ID matches the current URL fragment using the `target` variant:

```html
<div id="about" class="target:shadow-lg ...">
  <!-- ... -->
</div>
```

#### :first-child

Style an element if it's the first child using the `first` variant:

```html
<ul>
  {#each people as person}
    <li class="py-4 first:pt-0 ...">
      <!-- ... -->
    </li>
  {/each}</ul>
```

#### :last-child

Style an element if it's the last child using the `last` variant:

```html
<ul>
  {#each people as person}
    <li class="py-4 last:pb-0 ...">
      <!-- ... -->
    </li>
  {/each}</ul>
```

#### :only-child

Style an element if it's the only child using the `only` variant:

```html
<ul>
  {#each people as person}
    <li class="py-4 only:py-0 ...">
      <!-- ... -->
    </li>
  {/each}</ul>
```

#### :nth-child(odd)

Style an element if it's an oddly numbered child using the `odd` variant:

```html
<table>
  {#each people as person}
    <tr class="bg-white odd:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}</table>
```

#### :nth-child(even)

Style an element if it's an evenly numbered child using the `even` variant:

```html
<table>
  {#each people as person}
    <tr class="bg-white even:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}</table>
```

#### :first-of-type

Style an element if it's the first child of its type using the `first-of-type` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="ml-2 first-of-type:ml-6 ...">
      <!-- ... -->
    </a>
  {/each}</nav>
```

#### :last-of-type

Style an element if it's the last child of its type using the `last-of-type` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mr-2 last-of-type:mr-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :only-of-type

Style an element if it's the only child of its type using the `only-of-type` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 only-of-type:mx-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :nth-child()

Style an element at a specific position using the `nth` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-3:mx-6 nth-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :nth-last-child()

Style an element at a specific position from the end using the `nth-last` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-3:mx-6 nth-last-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :nth-of-type()

Style an element at a specific position, of the same type using the `nth-of-type` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-of-type-3:mx-6 nth-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :nth-last-of-type()

Style an element at a specific position from the end, of the same type using the `nth-last-of-type` variant:

```html
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-of-type-3:mx-6 nth-last-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button></nav>
```

#### :empty

Style an element if it has no content using the `empty` variant:

```html
<ul>
  {#each people as person}
    <li class="empty:hidden ...">{person.hobby}</li>
  {/each}</ul>
```

#### :disabled

Style an input when it's disabled using the `disabled` variant:

```html
<input class="disabled:opacity-75 ..." />
```

#### :enabled

Style an input when it's enabled using the `enabled` variant, most helpful when you only want to apply another style when an element is not disabled:

```html
<input class="enabled:hover:border-gray-400 disabled:opacity-75 ..." />
```

#### :checked

Style a checkbox or radio button when it's checked using the `checked` variant:

```html
<input type="checkbox" class="appearance-none checked:bg-blue-500 ..." />
```

#### :indeterminate

Style a checkbox or radio button in an indeterminate state using the `indeterminate` variant:

```html
<input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." />
```

#### :default

Style an option, checkbox or radio button that was the default value when the page initially loaded using the `default` variant:

```html
<input type="checkbox" class="default:outline-2 ..." />
```

#### :optional

Style an input when it's optional using the `optional` variant:

```html
<input class="optional:border-red-500 ..." />
```

#### :required

Style an input when it's required using the `required` variant:

```html
<input class="required:border-red-500 ..." />
```

#### :valid

Style an input when it's valid using the `valid` variant:

```html
<input class="valid:border-green-500 ..." />
```

#### :invalid

Style an input when it's invalid using the `invalid` variant:

```html
<input class="invalid:border-red-500 ..." />
```

#### :in-range

Style an input when its value is within a specified range limit using the `in-range` variant:

```html
<input min="1" max="5" class="in-range:border-green-500 ..." />
```

#### :out-of-range

Style an input when its value is outside of a specified range limit using the `out-of-range` variant:

```html
<input min="1" max="5" class="out-of-range:border-red-500 ..." />
```

#### :placeholder-shown

Style an input when the placeholder is shown using the `placeholder-shown` variant:

```html
<input class="placeholder-shown:border-gray-500 ..." placeholder="you@example.com" />
```

#### :autofill

Style an input when it has been autofilled by the browser using the `autofill` variant:

```html
<input class="autofill:bg-yellow-200 ..." />
```

#### :read-only

Style an input when it is read-only using the `read-only` variant:

```html
<input class="read-only:bg-gray-100 ..." />
```
