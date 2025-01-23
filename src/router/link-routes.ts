export interface RouterLink {
  name: string
  path: string
  title: string
  visible: boolean
}

export const routerLinks: RouterLink[] = [
  { name: 'home', path: '/', title: 'Home', visible: true },
  { name: 'pokemon', path: '/pokemon', title: 'Pokémon', visible: true },
  { name: 'about', path: '/about', title: 'About', visible: true },
]
