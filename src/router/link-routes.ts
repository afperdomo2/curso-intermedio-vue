export interface RouterLink {
  name: string
  path: string
  title: string
}

export const routerLinks: RouterLink[] = [
  { name: 'home', path: '/', title: 'Home' },
  { name: 'pokemon', path: '/pokemon', title: 'Pokémon' },
  { name: 'about', path: '/about', title: 'About' },
]
