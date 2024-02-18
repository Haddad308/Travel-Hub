import withMT from "@material-tailwind/react/utils/withMT";
import '@tailwindcss/forms';
import { nextui } from "@nextui-org/react"; // Import nextui config

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Include nextui content
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  darkMode: "class", // Include dark mode config
  plugins: [
    nextui(), // Include nextui plugin
  ],
});
