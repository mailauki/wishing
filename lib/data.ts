import { Room } from './types'

export const rooms = [
  'Bedroom',
  'Kitchen',
  'Living room',
  'Bathroom',
  'Office',
] as Room[]

export const sortLabels = [
  {
    index: 0,
    label: 'Alphabetical',
    slug: 'name',
  },
  {
    index: 1,
    label: 'Creation date',
    slug: 'created_at',
  },
  {
    index: 2,
    label: 'Last edited',
    slug: 'updated_at',
  },
  {
    index: 3,
    label: 'Price',
    slug: 'price',
  },
]
