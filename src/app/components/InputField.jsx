import React from 'react'

const InputField = ({ ...props }) => {
    return (
        <div className='w-full'>
            <input className='w-full rounded-full caret-primary p-2 border-2 border-gray-200 bg-gray-100 outline-primary' {...props} />
        </div>
    )
}

export default InputField
