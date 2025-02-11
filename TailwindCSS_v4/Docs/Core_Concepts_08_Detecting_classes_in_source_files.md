
# Core concepts

## Detecting classes in source files

Understanding and customizing how Tailwind scans your source files.

## Overview ([🔗 overview](https://tailwindcss.com/docs/detecting-classes-in-source-files#overview))

Tailwind works by scanning your project for utility classes, then generating all of the necessary CSS based on the classes you've actually used.

This makes sure your CSS is as small as possible, and is also what makes features like [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) possible.

### How classes are detected ([🔗 How classes are detected](https://tailwindcss.com/docs/detecting-classes-in-source-files#how-classes-are-detected))

Tailwind treats all of your source files as plain text, and doesn't attempt to actually parse your files as code in any way.

Instead it just looks for any tokens in your file that could be classes based on which characters Tailwind is expecting in class names:

```jsx
export function Button({ color, children }) {
  const colors = {
    black: "bg-black text-white",
    blue: "bg-blue-500 text-white",
    white: "bg-white text-black",
  };
  return (
    <button className={`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow`}>
      {children}
    </button>
  );
}
```

Then it tries to generate the CSS for all of these tokens, throwing away any tokens that don't map to a utility class the framework knows about.

### Dynamic class names ([🔗 Dynamic class names](https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names))

Since Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation in the programming language you're using.

**Don't construct class names dynamically**

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

In the example above, the strings `text-red-600` and `text-green-600` do not exist, so Tailwind will not generate those classes.

Instead, make sure any class names you’re using exist in full:

**Always use complete class names**

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

If you're using a component library like React or Vue, this means you shouldn't use props to dynamically construct classes:

**Don't use props to build class names dynamically**

```jsx
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

Instead, map props to complete class names that are statically detectable at build-time:

**Always map props to static class names**

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

This has the added benefit of letting you map different prop values to different color shades for example:

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

As long as you always use complete class names in your code, Tailwind will generate all of your CSS perfectly every time.

### Which files are scanned ([🔗 Which files are scanned](https://tailwindcss.com/docs/detecting-classes-in-source-files#which-files-are-scanned))

Tailwind will scan every file in your project for class names, except in the following cases:

-   Files that are in your `.gitignore` file
-   Binary files like images, videos, or zip files
-   CSS files
-   Common package manager lock files

If you need to scan any files that Tailwind is ignoring by default, you can [explicitly register](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources) those sources.

## Explicitly registering sources ([🔗 Explicitly registering sources](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources))

Use `@source` to explicitly register source paths that Tailwind ignores by default:

```css
@import "tailwindcss";
@source "../node_modules/@acmecorp/ui-lib";
```

This is especially useful when you need to scan an external library that is built with Tailwind, since dependencies are usually listed in your `.gitignore` file and ignored by Tailwind.

### Setting your base path ([🔗 Setting your base path](https://tailwindcss.com/docs/detecting-classes-in-source-files#setting-your-base-path))

Tailwind uses the current working directory as its starting point when scanning for class names by default.

To set the base path for source detection explicitly, use the `source()` function when importing Tailwind in your CSS:

```css
@import "tailwindcss" source("../src");
```

This can be useful when working with monorepos where your build commands run from the root of the monorepo instead of the root of each project.

### Disabling automatic detection ([🔗 Disabling automatic detection](https://tailwindcss.com/docs/detecting-classes-in-source-files#disabling-automatic-detection))

Use `source(none)` to completely disable automatic source detection if you want to register all of your sources explicitly:

```css
@import "tailwindcss" source(none);
@source "../admin";
@source "../shared";
```

This can be useful in projects that have multiple Tailwind stylesheets where you want to make sure each one only includes the classes each stylesheet needs.
