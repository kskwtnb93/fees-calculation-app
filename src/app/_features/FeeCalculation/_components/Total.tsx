import React from 'react'

const Total: React.FC<Props> = ({ amount }) => {
  return (
    <p className="text-center text-5xl font-bold">
      <span className="text-4xl">¥ </span>
      {amount}
    </p>
  )
}

export default Total
