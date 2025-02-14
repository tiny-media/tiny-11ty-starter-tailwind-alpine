import { mount } from 'svelte'
import Counter from '../_components/svelte/Counter.svelte'

mount(Counter, { target: document.getElementById('svelte-root') })

console.log("Hello from svelte.js");