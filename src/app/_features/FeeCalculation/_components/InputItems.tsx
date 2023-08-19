import React from 'react'
import DeleteButton from '@/app/_features/FeeCalculation/_components/Buttons/DeleteButton.tsx'
import Input from '@/app/_features/FeeCalculation/_components/Inputs/Input.tsx'
import Select from '@/app/_features/FeeCalculation/_components/Inputs/Select.tsx'

import type { InputItem } from '@/app/_features/FeeCalculation/_types'

type Props = {
  items: InputItem[]
  handleInputChange: (
    index: number,
    property: keyof InputItem,
    value: string
  ) => void
  removeInput: (index: number) => void
}

const InputItems: React.FC<Props> = ({
  items,
  handleInputChange,
  removeInput,
}) => {
  const options = [
    { text: '円', value: '円' },
    { text: '%', value: '%' },
  ]

  return (
    <div>
      <div className="flex">
        <p className="mr-4">項目名</p>
        <p className="mr-4">金額やパーセンテージ</p>
        <p className="mr-4">単位</p>
      </div>
      {items.map((item, index) => (
        <div className="mt-4 flex" key={item.id}>
          <div className="mr-4">
            <Input
              type="text"
              value={item.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
          </div>

          <div className="mr-4">
            <Input
              type="text"
              value={item.amount}
              onChange={(e) =>
                handleInputChange(index, 'amount', e.target.value)
              }
            />
          </div>

          <div className="mr-4">
            <Select
              options={options}
              value={item.unit}
              onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
            />
          </div>

          <div className="">
            <DeleteButton onClick={removeInput} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default InputItems
