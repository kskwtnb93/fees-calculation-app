import React from 'react'

const DragHandleButton: React.FC = () => {
  return (
    <button className="h-10 w-full rounded-lg border border-gray-600 bg-transparent text-sm font-medium hover:border-gray-600 hover:bg-gray-700 focus:outline-none max-sm:text-xs">
      <div className="path-gray-600 flex items-center justify-center">
        {Array.from({ length: 2 }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-mx-1.5 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        ))}
      </div>
    </button>
  )
}

export default DragHandleButton
