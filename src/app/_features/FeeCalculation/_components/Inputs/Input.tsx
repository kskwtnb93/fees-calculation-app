'use client'

import React from 'react'

type Props = {
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ type, value, onChange }) => {
  return (
    <input
      className="block h-10 w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 px-1.5 py-1.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 max-sm:h-8 max-sm:px-1.5 max-sm:py-0 max-sm:text-base"
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
