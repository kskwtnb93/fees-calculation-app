'use client'

import React from 'react'

type Option = {
  text: string
  value: string
}

type Props = {
  options: Option[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Input: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      className="block h-10 w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 px-1.5 py-1.5 text-center text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 max-sm:h-8 max-sm:px-1.5 max-sm:py-0 max-sm:text-base"
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default Input
