<script>
  import { page } from '$app/stores'
  import '../app.css'
  import Navbar from '../components/Navbar.svelte'
  import { navOptions, currentPage } from '../config'

  $: currentPage.set(navOptions.find(o => o.href === $page.url.pathname))
</script>

<svelte:head>
  <title>{$currentPage.title} | Taskify</title>
</svelte:head>

<Navbar/>
<main class="w-full p-6">
  <div class="p-6 rounded-md bg-white"><slot/></div>
</main>