const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            blue: colors.blue,
            green: colors.green,
            purple: {
                dark: "#3E2E83",
                DEFAULT: "#8984A1",
                light: "#776FC4",
            },
        },
        zIndex: {
            "-10": "-10",
        },
        extend: {
            backgroundImage: {
                rectangle: "url('/bg-img.svg')",
            },
        },
        fontFamily: {
            sans: ["Helvetica", "system-ui", "Arial", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
