export type UserRole = 'User' | 'Author' | 'Manager' | 'Admin'

export interface User {
  _id: string
  email: string
  name?: string
  date_of_birth?: string
  address?: string
  phone?: string
  roles: UserRole[]
  avatar?: string
  createdAt: string
  updatedAt: string
}
