'use client'

type InputItem = {
  id: string
  name: string
  amount: string
  unit: '円' | '%'
}

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function FeesCalculation() {
  const [InputItems, setInputItems] = useState([
    { id: uuidv4(), name: '', amount: '0', unit: '円' },
  ])
  const [total, setTotal] = useState(0)

  const addInput = () => {
    setInputItems([
      ...InputItems,
      { id: uuidv4(), name: '', amount: '0', unit: '円' },
    ])
  }

  const removeInput = (index: number) => {
    const newInputItems = InputItems.filter((_, i) => i !== index)
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

    setTotal(newTotal + (newTotal * totalPercentage) / 100)
  }

  const handleInputChange = (
    index: number,
    property: keyof InputItem,
    value: string
  ) => {
    const newInputItems = [...InputItems]
    newInputItems[index][property] = value
    setInputItems(newInputItems)
    calculateAmounts(InputItems)
  }

  return (
    <div>
      <p className="text-center text-5xl font-bold">
        <span className="text-4xl">¥ </span>
        {total}
      </p>

      {InputItems.map((input, index) => (
        <div className="mt-4 first:mt-0" key={input.id}>
          <input
            className="text-black"
            type="text"
            value={input.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
          />

          <input
            className="ml-4 text-black"
            type="text"
            value={input.amount}
            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
          />

          <select
            value={input.unit}
            className="ml-4 text-black"
            onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
          >
            <option value="円">円</option>
            <option value="%">%</option>
          </select>

          <button className="ml-4" onClick={() => removeInput(index)}>
            削除
          </button>
        </div>
      ))}

      <div className="mt-4 flex justify-end">
        <button onClick={addInput}>追加</button>
      </div>
    </div>
  )
}

export default FeesCalculation
