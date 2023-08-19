'use client'

import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddButton from '@/app/_features/FeeCalculation/_components/Buttons/AddButton.tsx'
import InputItems from '@/app/_features/FeeCalculation/_components/InputItems.tsx'
import Total from '@/app/_features/FeeCalculation/_components/Total.tsx'

function FeesCalculation() {
  const initialItem = { id: uuidv4(), name: '', amount: '0', unit: '円' }
  const [inputItems, setInputItems] = useState([initialItem])
  const [total, setTotal] = useState(0)

  const addInput = () => {
    setInputItems([...inputItems, initialItem])
  }

  const removeInput = (index: number) => {
    const newInputItems = inputItems.filter((_, i) => i !== index)
    setInputItems(newInputItems)
  }

  const handleInputChange = (
    index: number,
    property: keyof InputItem,
    value: string
  ) => {
    const newInputItems = [...inputItems]
    newInputItems[index][property] = value
    setInputItems(newInputItems)
  }

  const calculateAmounts = (inputItems: InputItem[]) => {
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

    setTotal((newTotal + (newTotal * totalPercentage) / 100).toLocaleString())
  }

  useEffect(() => {
    calculateAmounts(inputItems)
  }, [inputItems])

  return (
    <div>
      <p className="mb-16 text-center text-base font-thin max-sm:text-xs">
        以下の項目に金額と数量を入れてください。
        <br />
        項目名は未入力でも問題ありません。メモとしてお使いください。
      </p>

      <div className="mb-8">
        <Total amount={total} />
      </div>

      <InputItems
        items={inputItems}
        handleInputChange={handleInputChange}
        removeInput={removeInput}
      />

      <div className="mt-4 flex justify-end">
        <AddButton onClick={addInput} />
      </div>
    </div>
  )
}

export default FeesCalculation
