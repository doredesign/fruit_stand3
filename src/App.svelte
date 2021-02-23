<div class="container">
  <div class="row">
    <div class="col-sm">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="home" on:click={handleNavClick}>Fruit Stand</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" href="buy" on:click={handleNavClick}>Buy</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> -->
            </ul>
            <!-- <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
            <div class="col-sm">
              Balance: ${ user.balance } <span class="the-time">{ hours }:{ minutes }:{ seconds }</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="container">
    {#if page == 'home'}
      <Home/>
    {:else if page == 'buy'}
      <Buy/>
    {/if}
  </div>
</div>


<style>
  .the-time {
    font-weight: bold;
    margin-left: 20px;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import Buy from './Buy.svelte'
  import Home from './Home.svelte'

  let realNow = new Date();
  // let page = 'home'
  let page = 'buy'
  let pageStatus = {
    buying: {
      selection: null
    }
  }
  let user = {
    balance: 0,
    inventory: {}
  }
  let error = null
  let today = new Date(Date.parse(`1 May ${realNow.getFullYear()}`))
  let constants = {
    initial_balance: 100
  }

  // let name = 'Anonymous';
  let time = new Date();

  onMount(() => {
    user.balance = constants.initial_balance;

    const timer = setInterval(() => {
      time = new Date();
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  })

  let hours, minutes, seconds;

  $: {
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
  }

  let handleNavClick = function(e){
    e.preventDefault()
    page = this.getAttribute("href")
  }
</script>
