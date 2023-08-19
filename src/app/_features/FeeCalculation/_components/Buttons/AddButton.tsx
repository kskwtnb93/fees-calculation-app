import React from 'react'

type Props = {
  onClick: (event: React.onClick) => void
}

const AddButton: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>追加</button>
}

export default AddButton
