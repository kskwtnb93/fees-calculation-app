import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import React from 'react'

import InputItem from '@/app/_features/FeeCalculation/_components/InputItem'

import type { InputItemType } from '@/app/_features/FeeCalculation/_types'

type Props = {
  items: InputItemType[]
  handleInputChange: (
    index: number,
    property: keyof InputItemType,
    value: string
  ) => void
  removeInput: (index: number) => void
  handleDragEnd: (event: DragEndEvent) => void
}

const InputItems: React.FC<Props> = ({
  items,
  handleInputChange,
  removeInput,
  handleDragEnd,
}) => {
  const options = [
    { text: '円', value: '円' },
    { text: '%', value: '%' },
  ]

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-4 max-sm:grid-cols-11 max-sm:gap-2">
        <div className="col-span-1 flex items-center max-sm:col-span-1">
          <p className="text-base max-sm:text-xs"></p>
        </div>

        <div className="col-span-5 flex items-center max-sm:col-span-3">
          <p className="text-base max-sm:text-xs">項目名</p>
        </div>

        <div className="col-span-4 flex items-center max-sm:col-span-3">
          <p className="text-base max-sm:text-xs">
            金額／税率など
            <br className="hidden max-sm:inline-block" />
            （※半角数字）
          </p>
        </div>

        <div className="col-span-1 flex items-center max-sm:col-span-2">
          <p className="text-base max-sm:text-xs">単位</p>
        </div>

        <div className="col-span-1 flex items-center justify-center max-sm:col-span-2">
          <p className="text-base max-sm:text-xs"></p>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item, index) => (
            <InputItem
              key={item.id}
              item={item}
              index={index}
              handleInputChange={handleInputChange}
              removeInput={removeInput}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default InputItems
