<script>
  let count = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment} class="text-green-500">
  count is {count}
</button>
