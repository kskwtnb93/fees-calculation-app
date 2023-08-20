import React from 'react'

const Total: React.FC<Props> = ({ amount }) => {
  return (
    <p className="text-center text-6xl font-bold max-sm:text-4xl">
      <span className="text-4xl max-sm:text-2xl">¥ </span>
      {amount}
    </p>
  )
}

export default Total
