# Typography - font-variant-numeric

Utilities for controlling the variant of numbers.

## Class Reference

| Class               | Styles                          | Description                                                                 |
| ------------------- | ------------------------------- | --------------------------------------------------------------------------- |
| `normal-nums`       | `font-variant-numeric: normal;`  | Resets numeric font variants to the default.                               |
| `ordinal`           | `font-variant-numeric: ordinal;` | Enables special glyphs for ordinal markers (like "1st", "2nd", etc.).      |
| `slashed-zero`      | `font-variant-numeric: slashed-zero;` | Forces a zero with a slash.                                                |
| `lining-nums`       | `font-variant-numeric: lining-nums;` | Uses numeric glyphs aligned by their baseline.                             |
| `oldstyle-nums`     | `font-variant-numeric: oldstyle-nums;` | Uses numeric glyphs where some numbers have descenders.                    |
| `proportional-nums` | `font-variant-numeric: proportional-nums;` | Uses numeric glyphs with proportional widths.                             |
| `tabular-nums`      | `font-variant-numeric: tabular-nums;` | Uses numeric glyphs with uniform/tabular widths.                            |
| `diagonal-fractions`| `font-variant-numeric: diagonal-fractions;` | Replaces numbers separated by a slash with diagonal fractions.           |
| `stacked-fractions` | `font-variant-numeric: stacked-fractions;` | Replaces numbers separated by a slash with stacked fractions.            |

## Examples

### Using ordinal glyphs

Use the `ordinal` utility to enable special glyphs for the ordinal markers in fonts that support them:

**Example:**

1st

**Code:**

```html
<p class="ordinal ...">1st</p>
```

### Using slashed zeroes

Use the `slashed-zero` utility to force a zero with a slash in fonts that support them:

**Example:**

0

**Code:**

```html
<p class="slashed-zero ...">0</p>
```

### Using lining figures

Use the `lining-nums` utility to use numeric glyphs that are aligned by their baseline in fonts that support them:

**Example:**

1234567890

**Code:**

```html
<p class="lining-nums ...">1234567890</p>
```

### Using oldstyle figures

Use the `oldstyle-nums` utility to use numeric glyphs where some numbers have descenders in fonts that support them:

**Example:**

1234567890

**Code:**

```html
<p class="oldstyle-nums ...">1234567890</p>
```

### Using proportional figures

Use the `proportional-nums` utility to use numeric glyphs that have proportional widths in fonts that support them:

**Example:**

12121

90909

**Code:**

```html
<p class="proportional-nums ...">12121</p>
<p class="proportional-nums ...">90909</p>
```

### Using tabular figures

Use the `tabular-nums` utility to use numeric glyphs that have uniform/tabular widths in fonts that support them:

**Example:**

12121

90909

**Code:**

```html
<p class="tabular-nums ...">12121</p>
<p class="tabular-nums ...">90909</p>
```

### Using diagonal fractions

Use the `diagonal-fractions` utility to replace numbers separated by a slash with common diagonal fractions in fonts that support them:

**Example:**

1/2 3/4 5/6

**Code:**

```html
<p class="diagonal-fractions ...">1/2 3/4 5/6</p>
```

### Using stacked fractions

Use the `stacked-fractions` utility to replace numbers separated by a slash with common stacked fractions in fonts that support them:

**Example:**

1/2 3/4 5/6

**Code:**

```html
<p class="stacked-fractions ...">1/2 3/4 5/6</p>
```

### Stacking multiple utilities

The `font-variant-numeric` utilities are composable so you can enable multiple variants by combining them:

**Example:**

Subtotal

$100.00

Tax

$14.50

Total

$114.50

**Code:**

```html
<dl class="...">
  <dt class="...">Subtotal</dt>
  <dd class="text-right slashed-zero tabular-nums ...">$100.00</dd>
  <dt class="...">Tax</dt>
  <dd class="text-right slashed-zero tabular-nums ...">$14.50</dd>
  <dt class="...">Total</dt>
  <dd class="text-right slashed-zero tabular-nums ...">$114.50</dd>
</dl>
```

### Resetting numeric font variants

Use the `normal-nums` property to reset numeric font variants:

**Code:**

```html
<p class="slashed-zero tabular-nums md:normal-nums ...">
  <!-- ... -->
</p>
```

### Responsive design

Prefix a `font-variant-numeric` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

**Code:**

```html
<p class="proportional-nums md:tabular-nums ...">
  <!-- ... -->
</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).