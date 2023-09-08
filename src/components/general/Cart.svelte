<script>
  import { cartStore } from 'src/cartStore';

  let cartItemsArray = []

  cartStore.subscribe( (data) => {
    cartItemsArray = data
  })

  const clearItems = () => {
    localStorage.clear()
  }

</script>

<div>
  {#each cartItemsArray as current}
    {#if (current.quantity)}
      <div>
        <h3>{current.name}</h3>
        <p>{current.price}</p>
        <p>{current.quantity}</p>
      </div>
    {/if}
  {/each}
  <button on:click={clearItems}>remove all</button>
</div>