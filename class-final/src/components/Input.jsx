
const Input = ({
    onChange,
    value,
    type = "text",
    name = "inputField",
    placeholder = "Input field placeholder"
}) => {
    return (
        <div className='mb-3'>
            <input
                type={type}
                value={value}
                name={name}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                placeholder={placeholder}
                className='w-full h-10 px-2 font-bold border border-emerald-600 rounded-md focus:outline-0'
            />
        </div>
    )
}

export default Input