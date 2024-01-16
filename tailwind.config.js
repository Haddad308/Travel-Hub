/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import formsPlugin from '@tailwindcss/forms'; // Import the forms plugin separately

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    formsPlugin, // Use the imported forms plugin here
  ],
});
