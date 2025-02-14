<script>
    import { persistentCount } from "./stores.svelte.js";
</script>

<button
    on:click={persistentCount.increment}
    class="text-green-500 hover:text-green-700 transition-colors"
>
    Persistent count is {persistentCount.count}
</button>
