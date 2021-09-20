const TextArea = ({
    rows = 3,
    required = false,
    placeholder = "",
    className = "",
    name,
    handleChange,
    value = "",
}) => {
    return (
        <textarea
            name={name}
            className={`w-full rounded-lg border border-gray-300 focus:outline-none px-4 py-2 text-purple ${className}`}
            rows={rows}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
            value={value}
        ></textarea>
    );
};

export default TextArea;
