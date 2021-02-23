<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">${currentPrice}/lb</p>
    <input class=quantity type=text placeholder="qty." on:keyup="{handleQuantity}">
    <div>
      {#if cost > 0}
        <span class=price>Price: ${cost}</span>
        <a href="#" class="btn btn-primary">Buy</a>
      {/if}
    </div>
  </div>
</div>

<style>
  .card {
    margin: 10px;
  }
  input.quantity {
    width: 80px;
    margin-bottom: 10px;
  }
  span.price {
    margin-right: 10px;
  }
</style>

<script>
  export let name = 'Fake fruit!';
  export let minPrice;
  export let maxPrice;
  export let expireAfterDays;

  let difference = maxPrice - minPrice
  console.log(difference)
  let currentPrice = Math.round( 100 * difference * Math.random() + minPrice, 2) / 100
  let cost = 0;

  let handleQuantity = function(){
    let quantity = this.value
    cost = Math.round(100 * quantity * currentPrice) / 100;
  }
</script>
