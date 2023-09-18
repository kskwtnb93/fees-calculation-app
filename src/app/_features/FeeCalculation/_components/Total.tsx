import React from 'react'

const Total: React.FC<Props> = ({ amount }) => {
  return (
    <div className="overflow-x-auto border-b border-gray-600 pb-4 text-center text-6xl font-bold max-sm:text-4xl">
      <p className="flex w-fit min-w-full items-baseline justify-center align-bottom">
        <span className="mr-1 text-center text-4xl font-medium max-sm:text-2xl">
          ¥
        </span>
        {amount}
      </p>
    </div>
  )
}

export default Total
