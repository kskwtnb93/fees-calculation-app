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
    <div className="w-full">
      <div className="grid grid-cols-10 gap-4 max-sm:gap-2">
        <p className="col-span-4 text-base max-sm:col-span-3 max-sm:text-xs">
          項目名
        </p>
        <p className="col-span-4 text-base max-sm:col-span-3 max-sm:text-xs">
          数値
        </p>
        <p className="col-span-1 text-base max-sm:col-span-2 max-sm:text-xs">
          単位
        </p>
        <p className="col-span-1 text-base max-sm:col-span-2 max-sm:text-xs"></p>
      </div>
      {items.map((item, index) => (
        <div
          className="mt-4 grid grid-cols-10 items-center gap-4 max-sm:mt-2 max-sm:gap-2"
          key={item.id}
        >
          <div className="col-span-4 max-sm:col-span-3">
            <Input
              type="text"
              value={item.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
          </div>

          <div className="col-span-4 max-sm:col-span-3">
            <Input
              type="text"
              value={item.amount}
              onChange={(e) =>
                handleInputChange(index, 'amount', e.target.value)
              }
            />
          </div>

          <div className="col-span-1 max-sm:col-span-2">
            <Select
              options={options}
              value={item.unit}
              onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
            />
          </div>

          <div className="col-span-1 flex justify-center max-sm:col-span-2">
            <DeleteButton onClick={() => removeInput(index)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default InputItems
