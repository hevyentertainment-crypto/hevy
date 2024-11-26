import React from 'react'

export default function Inputs({label, type='text', onChange, name, value } : {label: string, type?: string, onChange: (target: { name: string; value: string }) => void, name: string, value: string }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    onChange(e.target)
  }
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor="" className='text-xs font-semibold'>{label}</label>
        <input type={type} name={name} value={value} onChange={handleChange} className='border-2 rounded p-2' />
    </div>
  )
}
