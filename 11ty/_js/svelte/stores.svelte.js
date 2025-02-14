// 11ty/_js/svelte/stores.svelte.js
export const persistentCount = (() => {
  const initial = Number(localStorage.getItem("persistentCount")) || 0;
  const state = $state({ value: initial });

  // Create a dedicated effect root for the store
  const cleanup = $effect.root(() => {
    $effect(() => {
      localStorage.setItem("persistentCount", state.value.toString());
    });
  });

  return {
    get count() {
      return state.value;
    },
    set count(value) {
      state.value = value;
    },
    increment() {
      state.value++;
    },
    // Optional cleanup for future disposal
    destroy() {
      cleanup();
    },
  };
})();
