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
    <select value={value} className="text-black" onChange={onChange}>
      {options.map((option, index) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default Input
