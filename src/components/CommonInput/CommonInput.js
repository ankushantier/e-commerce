
const CommonInput = ({ label, value, placeholder, type = 'text', onChange, ...rest }) => {
    return (
        <div className="common-input">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} {...rest} />
        </div>
    )
}

export default CommonInput