'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  amount: string
}

const Total: React.FC<Props> = ({ amount }) => {
  const [isFixed, setIsFixed] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [initialPosition, setInitialPosition] = useState(0)

  const normalStyle = 'max-sm:initial'
  const fixedStyle =
    'max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:w-full max-sm:z-10'

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const threshold = initialPosition * 1.1
        const scrollY = window.scrollY || document.documentElement.scrollTop

        if (scrollY > threshold) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [initialPosition])

  useEffect(() => {
    const getInitialPosition = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        setInitialPosition(containerRect.top + window.scrollY)
      }
    }

    getInitialPosition()
    window.addEventListener('resize', getInitialPosition)

    return () => {
      getInitialPosition()
      window.removeEventListener('resize', getInitialPosition)
    }
  }, [])

  return (
    <div ref={containerRef} className={isFixed ? fixedStyle : normalStyle}>
      <div className="overflow-x-auto border-b border-gray-600 bg-black py-6 text-center text-6xl  max-sm:py-4 max-sm:text-4xl">
        <p>
          <span className="mb-3 block text-center text-lg max-sm:mb-2 max-sm:text-base">
            合計金額
          </span>
          <span className="flex w-fit min-w-full items-baseline justify-center align-bottom font-bold">
            <span className="mr-1 text-center text-4xl font-medium max-sm:text-2xl">
              ¥
            </span>
            {amount}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Total
