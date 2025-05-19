export interface MenuItem {
  name: string
  path: string
  desc?: string
  children?: MenuItem[]
}
