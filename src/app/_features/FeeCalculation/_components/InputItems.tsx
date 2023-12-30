'use client'

import React from 'react'

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
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="w-full">
      <div className="grid grid-cols-11 gap-4 max-sm:hidden max-sm:grid-cols-11 max-sm:gap-2">
        <div className="col-span-1 flex items-center justify-center max-sm:col-span-1">
          <p className="text-center text-sm max-sm:text-xs"></p>
        </div>

        <div className="col-span-4 flex items-center justify-center max-sm:col-span-3">
          <p className="text-center text-sm max-sm:text-xs">項目名</p>
        </div>

        <div className="col-span-2 flex items-center justify-center max-sm:col-span-3">
          <p className="text-center text-sm max-sm:text-xs">
            金額／税率など
            <br />
            （※半角数字）
          </p>
        </div>

        <div className="col-span-1 flex items-center justify-center max-sm:col-span-2">
          <p className="text-center text-sm max-sm:text-xs">単位</p>
        </div>

        <div className="col-span-2 flex items-center justify-center max-sm:col-span-2">
          <p className="text-center text-sm max-sm:text-xs">数量</p>
        </div>

        <div className="col-span-1 flex items-center justify-center max-sm:col-span-2">
          <p className="text-center text-sm max-sm:text-xs"></p>
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
