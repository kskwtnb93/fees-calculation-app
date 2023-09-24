'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddButton from '@/app/_features/FeeCalculation/_components/Buttons/AddButton.tsx'
import InputItems from '@/app/_features/FeeCalculation/_components/InputItems.tsx'
import Total from '@/app/_features/FeeCalculation/_components/Total.tsx'
import { calculateAmounts } from '@/app/_features/FeeCalculation/_utils/index.ts'

import type { InputItem } from '@/app/_features/FeeCalculation/_types'

function FeesCalculation() {
  const initialItems = [
    { id: uuidv4(), name: '商品１（サンプル）', amount: '700', unit: '円' },
    { id: uuidv4(), name: '商品２（サンプル）', amount: '300', unit: '円' },
    { id: uuidv4(), name: '消費税（サンプル）', amount: '10', unit: '%' },
  ]
  const [inputItems, setInputItems] = useState(initialItems)
  const initialTotal = calculateAmounts(inputItems)
  const [total, setTotal] = useState(initialTotal)

  const addInput = () => {
    const newItem = {
      id: uuidv4(),
      name: '',
      amount: '',
      unit: '円',
    }
    setInputItems([...inputItems, newItem])
  }

  const removeInput = (targetIndex: number) => {
    const newInputItems = inputItems.filter((_, i) => i !== targetIndex)
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

    const newTotal = calculateAmounts(newInputItems)
    setTotal(newTotal)
  }

  return (
    <div className="w-full max-w-3xl">
      <p className="mb-8 text-center text-base font-thin leading-loose max-sm:mb-6 max-sm:text-xs max-sm:leading-loose">
        以下の項目に金額と数量を入れてください。
        <br />
        項目名は未入力でも問題ありません。
        <br />
        消費税や割引がある場合は、単位で「%」を選択してください。
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
