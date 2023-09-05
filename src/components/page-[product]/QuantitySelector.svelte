<script>
  import { localStorageKey, updateLocalStorage } from 'src/utilities';
  import { cartStore } from 'src/cartStore';

  console.log(cartStore)

  cartStore.subscribe((data) => {
    console.log(data)
  })

  export let id =''
  
  const startingValue = 1
  const min = 0
  const max = 9
  let count = startingValue

  const addToCart = () => {
    if (count > 0) {
      updateLocalStorage(localStorageKey, id, count)
      // cartStore.update()
      count = startingValue
  }}
</script>

<div class='flex'>
  <div  class='grid grid-cols-3 place-items-center h-48 w-120 bg-clr-n3'>
    <button disabled={(count <= min)} on:click={() => count--} >-</button>
    <p class='font-bold text-13'>{count}</p>
    <button disabled={(count >= max)} on:click={() => count++} >+</button>
  </div>
  <button on:click={addToCart} class='ButtonStyle1 ml-16'>Add to Cart</button>
</div>