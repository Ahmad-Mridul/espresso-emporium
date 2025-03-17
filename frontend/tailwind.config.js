/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rancho: ["Rancho", "sans-serif"],
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
