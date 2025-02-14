// 11ty/_js/svelte.js
import { mount } from "svelte";
import Counter from "./svelte/Counter.svelte";

// Mount on all pages with matching root elements
if (document.getElementById("svelte-root")) {
  mount(Counter, { target: document.getElementById("svelte-root") });
}

if (document.getElementById("about-svelte-root")) {
  mount(Counter, { target: document.getElementById("about-svelte-root") });
}

console.log("Hello from svelte.js");
