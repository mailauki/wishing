import { Item } from '../types'
import { formatCurrencyShort } from './format-currency'

export function totalItems(items: Item[]) {
  return formatCurrencyShort(
    items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0),
  )
}
