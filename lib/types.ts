import { UUID } from 'crypto'

export type Item = {
  id: UUID | number
  name: string
  price: number
  url: string
  brand?: string
  description?: string
  color?: string
  notes?: string
  room_name?: Room
  slug: string
  image?: string
}

export type RoomProps = {
  name: Room
  total: string
}

export type Room = 'Bedroom' | 'Kitchen' | 'Living room' | 'Bathroom' | 'Office'

export type View = 'list' | 'module'
