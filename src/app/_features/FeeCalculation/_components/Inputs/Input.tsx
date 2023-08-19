import React from 'react'

type Props = {
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ type, value, onChange }) => {
  return (
    <input
      className="text-black"
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
