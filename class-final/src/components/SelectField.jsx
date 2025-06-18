

const SelectField = ({
    name,
    value,
    onChange,
    children
}) => {
    return (
        <div className='mb-3'>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className='w-full h-10 px-2 font-bold border border-emerald-600 rounded-md focus:outline-0'
            >
                {children}
            </select>
        </div>
    )
}

export default SelectField