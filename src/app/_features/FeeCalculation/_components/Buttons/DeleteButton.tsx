import React from 'react'

type Props = {
  onClick: (event: React.onClick) => void
}

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="h-10 w-full rounded-lg border border-red-500 text-center text-sm font-medium text-red-500 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-900 max-sm:text-xs"
      onClick={onClick}
    >
      <span> 削除</span>
    </button>
  )
}

export default DeleteButton
