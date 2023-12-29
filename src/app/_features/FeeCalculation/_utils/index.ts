import type { InputItemType } from '@/app/_features/FeeCalculation/_types'

export const calculateAmounts = (inputItems: InputItemType[]): string => {
  let newTotal = 0
  let totalPercentage = 0

  inputItems.forEach((item) => {
    const amount = parseFloat(item.amount)

    if (!isNaN(amount)) {
      switch (item.unit) {
        case '円':
          newTotal += amount
          break
        case '%':
          totalPercentage += amount
          break
        default:
          break
      }
    }
  })

  return (newTotal + (newTotal * totalPercentage) / 100).toLocaleString()
}
