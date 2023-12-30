'use client'

import React from 'react'

type Props = {
  onClick: (event: React.MouseEvent) => void
}

const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="rounded-full border border-gray-600 bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:border-gray-600 hover:bg-gray-700 focus:outline-none max-sm:text-sm"
      onClick={onClick}
    >
      ＋ 項目を追加する
    </button>
  )
}

export default AddButton
