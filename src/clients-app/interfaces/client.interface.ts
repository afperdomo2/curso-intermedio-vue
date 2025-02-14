export interface Client {
  id: number
  isActive: boolean
  picture: string
  age: number
  eyeColor: EyeColor
  name: string
  gender: Gender
  company: string
  email: string
  phone: string
  address: string
}

export enum EyeColor {
  Blue = 'blue',
  Brown = 'brown',
  Green = 'green',
}

export enum Gender {
  Female = 'female',
  Male = 'male',
}
