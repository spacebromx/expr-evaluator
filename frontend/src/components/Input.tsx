import React from 'react'

interface InputProps {
  label: string
  name: string
  placeholder?: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({label, name, placeholder, value, onChange}: InputProps) {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={name}
        type="number"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default Input
