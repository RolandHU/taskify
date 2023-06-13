<script>
  import Icon from '@iconify/svelte'
  import { navOptions, currentPage } from '../config'

  $: isExpanded = false
  $: currOption = $currentPage
</script>

<nav class={isExpanded ? 'nav__expanded' : 'nav'}>
  <button class="nav-option-icon" on:click={() => isExpanded = !isExpanded}><Icon icon="lucide:menu" inline={true} width={24} height={24} /></button>
  <main class={`${isExpanded ? '' : 'hidden'} md:block py-7`}>
    {#each [...Array(navOptions.length - 1).keys()] as index}
      <a class={`${navOptions[index].title === currOption.title ? 'nav-option__active' : 'nav-option'} ${isExpanded ? '' : 'hidden'} md:flex`} href={navOptions[index].href}>
        <span class="nav-option-icon"><Icon icon={navOptions[index].icon} inline={true} width={24} height={24} /></span>
        <span class="nav-option-text">{navOptions[index].title}</span>
      </a>
    {/each}
  </main>
  <a class={`${navOptions.at(-1).title === currOption.title ? 'nav-option__active' : 'nav-option'} ${isExpanded ? '' : 'hidden'} md:flex`} href={navOptions.at(-1).href}>
    <span class="nav-option-icon"><Icon icon={navOptions.at(-1).icon} inline={true} width={24} height={24} /></span>
    <span class="nav-option-text">{navOptions.at(-1).title}</span>
  </a>
</nav>