import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

import DeleteButton from '@/app/_features/FeeCalculation/_components/Buttons/DeleteButton'
import DragHandleButton from '@/app/_features/FeeCalculation/_components/Buttons/DragHandleButton'
import Input from '@/app/_features/FeeCalculation/_components/Inputs/Input'
import Select from '@/app/_features/FeeCalculation/_components/Inputs/Select'

import type { InputItemType } from '@/app/_features/FeeCalculation/_types'

type Props = {
  item: InputItemType
  index: number
  handleInputChange: (
    index: number,
    property: keyof InputItemType,
    value: string
  ) => void
  removeInput: (index: number) => void
}

const InputItem: React.FC<Props> = ({
  item,
  index,
  handleInputChange,
  removeInput,
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

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 0,
    position: 'relative',
  }

  return (
    <div ref={setNodeRef} style={style}>
      <div className="mt-4 grid grid-cols-12 items-center gap-4 max-sm:mt-2 max-sm:grid-cols-11 max-sm:gap-2">
        <div
          className="col-span-1 max-sm:col-span-1"
          {...attributes}
          {...listeners}
        >
          <DragHandleButton />
        </div>

        <div className="col-span-5 max-sm:col-span-3">
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
            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
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
    </div>
  )
}

export default InputItem
