import { writable } from 'svelte/store'

export const currentPage = writable(0)

export const navOptions = [
  { title: 'News', href: '/', icon: 'lucide:newspaper' },
  { title: 'Tasks', href: '/tasks', icon: 'lucide:clipboard-list' },
  { title: 'Tags', href: '/tags', icon: 'lucide:tags' },
  { title: 'Account', href:'/account', icon: 'lucide:user' }
]