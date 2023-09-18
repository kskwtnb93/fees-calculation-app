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
      className="block h-10 w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 p-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 max-sm:text-xs"
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default Input
