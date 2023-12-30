import type { InputItemType } from '@/app/_features/FeeCalculation/_types'

export const calculateAmounts = (inputItems: InputItemType[]): string => {
  let newTotal = 0
  let totalPercentage = 0

  inputItems.forEach((item) => {
    const amount = parseFloat(item.amount)
    const quantity = parseFloat(item.quantity)

    if (!isNaN(amount)) {
      switch (item.unit) {
        case '円':
          newTotal += amount * quantity
          break
        case '%':
          totalPercentage += amount * quantity
          break
        default:
          break
      }
    }
  })

  return (newTotal + (newTotal * totalPercentage) / 100).toLocaleString()
}
