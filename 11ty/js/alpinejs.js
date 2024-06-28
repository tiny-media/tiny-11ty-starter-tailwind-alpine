// Dynamically load the AlpineJS library
(async () => {
    await import("./alpinejs/_alpinejs_core.js");

    // Import the other packages
    const [focus, collapse, intersect, ui, persist, morph, mask, anchor, sort] = await Promise.all([
        // import("./alpinejs/_alpinejs_focus.js"),
        // import("./alpinejs/_alpinejs_collapse.js"),
        // import("./alpinejs/_alpinejs_intersect.js"),
        // import("./alpinejs/_alpinejs_ui.js"),
        // import("./alpinejs/_alpinejs_persist.js"),
        // import("./alpinejs/_alpinejs_morph.js"),
        // import("./alpinejs/_alpinejs_mask.js"),
        // import("./alpinejs/_alpinejs_anchor.js"),
        // import("./alpinejs/_alpinejs_sort.js"),
    ]);

    // AlpineJS is attached to `window` so we can access it directly
    const Alpine = window.Alpine;

    // Alpine.plugin(focus.default);
    // Alpine.plugin(collapse.default);
    // Alpine.plugin(intersect.default);
    // Alpine.plugin(ui.default);
    // Alpine.plugin(persist.default);
    // Alpine.plugin(morph.default);
    // Alpine.plugin(mask.default);
    // Alpine.plugin(anchor.default);
    // Alpine.plugin(sort.default);

    Alpine.start();
})();