'use client'

import { DragEndEvent } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddButton from '@/app/_features/FeeCalculation/_components/Buttons/AddButton'
import InputItems from '@/app/_features/FeeCalculation/_components/InputItems'
import Total from '@/app/_features/FeeCalculation/_components/Total'
import { calculateAmounts } from '@/app/_features/FeeCalculation/_utils/index'

import type { InputItemType } from '@/app/_features/FeeCalculation/_types'

function FeesCalculation() {
  const initialItems: InputItemType[] = [
    { id: uuidv4(), name: '商品１（サンプル）', amount: '700', unit: '円' },
    { id: uuidv4(), name: '商品２（サンプル）', amount: '300', unit: '円' },
    { id: uuidv4(), name: '消費税（サンプル）', amount: '10', unit: '%' },
  ]
  const [inputItems, setInputItems] = useState(initialItems)
  const initialTotal = calculateAmounts(inputItems)
  const [total, setTotal] = useState(initialTotal)

  const addInput = () => {
    const newItem: InputItemType = {
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
    const newTotal = calculateAmounts(newInputItems)
    setTotal(newTotal)
  }

  const handleInputChange = (
    index: number,
    property: keyof InputItemType,
    value: string
  ) => {
    const newInputItems: InputItemType[] = [...inputItems]

    if (property === 'unit' && (value === '円' || value === '%')) {
      newInputItems[index][property] = value
    } else if (property === 'amount' || property === 'name') {
      newInputItems[index][property] = value
    }

    setInputItems(newInputItems)

    const newTotal = calculateAmounts(newInputItems)
    setTotal(newTotal)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    console.log(event)

    if (!over) {
      return
    }

    if (active.id !== over.id) {
      const oldIndex = inputItems.findIndex((v) => v.id === active.id)
      const newIndex = inputItems.findIndex((v) => v.id === over.id)
      setInputItems(arrayMove(inputItems, oldIndex, newIndex))
    }
  }

  return (
    <div className="w-full max-w-3xl">
      <p className="mb-8 text-center text-base font-thin leading-loose max-sm:mb-6 max-sm:text-xs max-sm:leading-loose">
        以下の項目に金額または税率など（※半角数字）と単位を入力してください。
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
        handleDragEnd={handleDragEnd}
      />

      <div className="mt-4 flex justify-end">
        <AddButton onClick={addInput} />
      </div>
    </div>
  )
}

export default FeesCalculation
