export interface RouterLink {
  name: string
  path: string
  title: string
  visible: boolean
}

export const routerLinks: RouterLink[] = [
  { name: 'home', path: '/', title: 'Home', visible: true },
  { name: 'pokemon', path: '/pokemon', title: 'Pokémon', visible: true },
  { name: 'counter', path: '/counter', title: 'Counter Pinia', visible: true },
  { name: 'clients', path: '/clients', title: 'Clients', visible: true },
  { name: 'about', path: '/about', title: 'About', visible: true },
]
