# Appearance

Utilities for suppressing native form control styling.

## Class and Styles

| Class             | Styles              |
| ----------------- | ------------------- |
| `appearance-none` | `appearance: none;` |
| `appearance-auto` | `appearance: auto;` |

## Examples

### Removing default appearance

Use `appearance-none` to reset any browser specific styling on an element:

**Default browser styles applied**
```html
<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>
```

**Remove default browser styles**
```html
<div class="grid">
  <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>
  <svg class="pointer-events-none col-start-1 row-start-1 ...">
    <!-- ... -->
  </svg>
</div>
```

This utility is often used when creating custom form components.

### Restoring default appearance

Use `appearance-auto` to restore the default browser specific styling on an element:

Try emulating `forced-colors: active` in your developer tools to see the difference

```html
<label>
  <div>
    <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." />
    <svg class="invisible peer-checked:visible forced-colors:hidden ...">
      <!-- ... -->
    </svg>
  </div>
  Falls back to default appearance
</label>
<label>
  <div>
    <input type="checkbox" class="appearance-none ..." />
    <svg class="invisible peer-checked:visible ...">
      <!-- ... -->
    </svg>
  </div>
  Keeps custom appearance
</label>
```

This is useful for reverting to the standard browser controls in certain accessibility modes.

### Responsive design

Prefix an `appearance` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<select class="appearance-auto md:appearance-none ...">
  <!-- ... -->
</select>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).
