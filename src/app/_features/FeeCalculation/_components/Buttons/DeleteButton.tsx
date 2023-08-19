import React from 'react'

type Props = {
  onClick: (event: React.onClick) => void
}

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>削除</button>
}

export default DeleteButton
