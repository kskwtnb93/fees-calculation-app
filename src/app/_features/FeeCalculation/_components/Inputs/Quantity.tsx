'use client'

import React, { useEffect, useState } from 'react'

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Quantity: React.FC<Props> = ({ value, onChange }) => {
  const [quantity, setQuantity] = useState(value)

  // valueが変更されたらコンポーネント内のquantityも同じ値に更新する
  useEffect(() => {
    setQuantity(value)
  }, [value])

  const handleIncrement = () => {
    setQuantity((prevQuantity) => (Number(prevQuantity) + 1).toString())
    onChange(createFakeEvent((Number(quantity) + 1).toString()))
  }

  const handleDecrement = () => {
    if (Number(quantity) > 1) {
      setQuantity((prevQuantity) => (Number(prevQuantity) - 1).toString())
      onChange(createFakeEvent((Number(quantity) - 1).toString()))
    }
  }

  // onChangeイベントオブジェクトを手動で生成
  const createFakeEvent = (newValue: string) => {
    return {
      target: {
        value: newValue,
      },
    } as React.ChangeEvent<HTMLInputElement>
  }

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-600 bg-transparent text-sm font-medium hover:border-gray-600 hover:bg-gray-700 focus:outline-none max-sm:h-6 max-sm:w-6 max-sm:text-xs"
        type="button"
        onClick={handleDecrement}
      >
        -
      </button>

      <input
        type="text"
        className="block h-10 w-full flex-1 appearance-none rounded-lg border border-gray-600 bg-gray-700 px-1.5 py-1.5 text-center text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 max-sm:h-8 max-sm:px-1.5 max-sm:py-0 max-sm:text-base"
        value={quantity}
        onChange={onChange}
      />

      <button
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-600 bg-transparent text-sm font-medium hover:border-gray-600 hover:bg-gray-700 focus:outline-none max-sm:h-6 max-sm:w-6 max-sm:text-xs"
        type="button"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}

export default Quantity
