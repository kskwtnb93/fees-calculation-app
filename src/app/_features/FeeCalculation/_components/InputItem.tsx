'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

import DeleteButton from '@/app/_features/FeeCalculation/_components/Buttons/DeleteButton'
import DragHandleButton from '@/app/_features/FeeCalculation/_components/Buttons/DragHandleButton'
import Input from '@/app/_features/FeeCalculation/_components/Inputs/Input'
import Quantity from '@/app/_features/FeeCalculation/_components/Inputs/Quantity'
import Select from '@/app/_features/FeeCalculation/_components/Inputs/Select'

import type { InputItem } from '@/app/_features/FeeCalculation/_types'

type Props = {
  item: InputItem
  index: number
  handleInputChange: (
    index: number,
    property: keyof InputItem,
    value: string
  ) => void
  removeInput: (index: number) => void
  handleDragEnd: (event: DragEndEvent) => void
}

const InputItem: React.FC<Props> = ({
  item,
  index,
  handleInputChange,
  removeInput,
  handleDragEnd,
}) => {
  const options = [
    { text: '円', value: '円' },
    { text: '%', value: '%' },
  ]

  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 0,
    position: 'relative',
  }

  return (
    <div ref={setNodeRef} style={style}>
      <div className="mt-4 grid grid-cols-11 items-center gap-4 max-sm:order-1 max-sm:mt-6 max-sm:grid-cols-7 max-sm:gap-2">
        <div
          className="col-span-1 h-full max-sm:col-span-1 max-sm:row-span-2"
          {...attributes}
          {...listeners}
        >
          <DragHandleButton />
        </div>

        <div className="col-span-4 max-sm:order-2 max-sm:col-span-5">
          <Input
            type="text"
            value={item.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
          />
        </div>

        <div className="col-span-2 max-sm:order-4 max-sm:col-span-2">
          <Input
            type="text"
            value={item.amount}
            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
          />
        </div>

        <div className="col-span-1 max-sm:order-5 max-sm:col-span-1">
          <Select
            options={options}
            value={item.unit}
            onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
          />
        </div>

        <div className="col-span-2 max-sm:order-6 max-sm:col-span-2">
          <Quantity
            value={item.quantity}
            onChange={(e) =>
              handleInputChange(index, 'quantity', e.target.value)
            }
          />
        </div>

        <div className="col-span-1 flex h-full justify-center max-sm:order-3 max-sm:col-span-1 max-sm:row-span-2">
          <DeleteButton onClick={() => removeInput(index)} />
        </div>
      </div>
    </div>
  )
}

export default InputItem
