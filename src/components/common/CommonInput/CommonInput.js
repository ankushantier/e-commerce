
const CommonInput = ({ label, value, placeholder, type = 'text', name,onChange, ...rest }) => {
    return (
        <div className="common-input">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={onChange} {...rest} />
        </div>
    )
}

export default CommonInput