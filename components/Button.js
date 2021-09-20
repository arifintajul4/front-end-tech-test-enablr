const Primary = ({
    children,
    type = "button",
    className = "",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`rounded-full ${
                disabled ? "bg-gray-500 cursor-not-allowed" : "bg-purple-dark"
            } font-bold text-white py-2 px-4 ${className}`}
        >
            {children}
        </button>
    );
};

export { Primary };
