<div class="row">
  {#each availableToBuy as crop}
    <Crop
      name={crop.name}
      minPrice={crop.minPrice}
      maxPrice={crop.maxPrice}
      expireAfterDays={crop.expireAfterDays}
    />
  {/each}
</div>

<script>
  import Crop from './Crop.svelte'

  let availableToBuy = [
    {
      name: "Blueberries",
      minPrice: 2,
      maxPrice: 5,
      expireAfterDays: 8
    },
    {
      name: "Raspberries",
      minPrice: 3,
      maxPrice: 6,
      expireAfterDays: 4
    },
    {
      name: "Strawberries",
      minPrice: 0.5,
      maxPrice: 1.5,
      expireAfterDays: 6
    }
  ]
</script>
