

const InputField = ({ divClasses, Icon, showHide, ...props }) => {
    return (
        <div className={`w-full ${divClasses}`}>
            <input className='w-full disabled:cursor-progress disabled:bg-gray-300 rounded-full caret-primary p-2 border-2 border-gray-200 bg-gray-100 outline-primary' {...props} />
            {Icon && <Icon onClick={showHide} className='absolute w-6 h-6 top-[50%] -translate-y-[50%] right-10 text-gray-300 hover:text-black cursor-pointer ' />}
        </div>
    )
}

export default InputField
