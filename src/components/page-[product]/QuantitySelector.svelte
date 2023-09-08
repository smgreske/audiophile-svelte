<script>
  import { localStorageKey, updateLocalStorage } from 'src/utilities';
  import { cartStore } from 'src/cartStore';

  export let id =''
  
  const startingValue = 1
  const min = 0
  const max = 9
  let count = startingValue

  const addToCart = () => {
    updateLocalStorage(localStorageKey, id, count)

    cartStore.update((data) => {
      return data.map( (currentObject) => {
        if (id === currentObject.id)
          return {...currentObject, quantity:(currentObject.quantity + count)}
        else 
          return currentObject
      })
    })

    count = startingValue
  }
</script>

<div class='flex'>
  <div  class='grid grid-cols-3 place-items-center h-48 w-120 bg-clr-n3'>
    <button disabled={(count <= min)} on:click={() => count--} >-</button>
    <p class='font-bold text-13'>{count}</p>
    <button disabled={(count >= max)} on:click={() => count++} >+</button>
  </div>
  <button 
    class={(count !== 0)
      ? 'ButtonStyle1 ml-16'
      : 'ButtonStyle1 bg-clr-n3 text-clr-n5 hover:bg-clr-n3 ml-16'}
    disabled={count === 0} on:click={addToCart} >Add to Cart</button>
</div>