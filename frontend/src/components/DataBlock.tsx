import React from 'react'

interface DataBlockProps {
  value: string | number
  description: string
}

function DataBlock({value, description}: DataBlockProps) {
  return (
    <div className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
      <div>
        <p className="text-3xl font-semibold text-center text-gray-800 overflow-x-scroll">{value}</p>
        <p className="text-lg text-center text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default DataBlock
