export interface RouterLink {
  name: string
  path: string
  title: string
}

export const routerLinks: RouterLink[] = [
  { name: 'home', path: '/', title: 'Home' },
  { name: 'about', path: '/about', title: 'About' },
]
