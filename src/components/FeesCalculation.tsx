'use client'

type CalculateItem = {
  id: string
  name: string
  amount: string
  unit: string
}

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function FeesCalculation() {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), name: '', amount: '0', unit: '円' },
  ])
  const [total, setTotal] = useState(0)

  const addInput = () => {
    setInputs([...inputs, { id: uuidv4(), name: '', amount: '0', unit: '円' }])
  }

  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index)
    setInputs(newInputs)
  }

  const calculateAmounts = (calculateItems: CalculateItem[]) => {
    let newTotal = 0
    let totalPercentage = 0

    calculateItems.forEach((item) => {
      const amount = parseFloat(item.amount)

      if (item.unit === '円' && !isNaN(amount)) {
        newTotal += amount
      } else if (item.unit === '%') {
        totalPercentage += amount
      }
    })

    setTotal(newTotal + (newTotal * totalPercentage) / 100)
  }

  const handleInputChange = (
    index: number,
    property: keyof CalculateItem,
    value: string
  ) => {
    const newInputs = [...inputs]
    newInputs[index][property] = value
    setInputs(newInputs)

    calculateAmounts(inputs)
  }

  return (
    <div>
      <p className="text-center text-5xl font-bold">¥{total}</p>

      {inputs.map((input, index) => (
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
