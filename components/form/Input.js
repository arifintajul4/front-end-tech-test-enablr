const Input = ({
    type = "text",
    name,
    required = false,
    placeholder = "",
    className = "",
    handleChange,
    value = "",
}) => {
    return (
        <input
            name={name}
            type={type}
            className={`w-full rounded-lg border border-gray-300 focus:outline-none px-4 py-2 text-purple ${className}`}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
            value={value}
        />
    );
};

export default Input;
