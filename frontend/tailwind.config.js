
import daisyui from "daisyui";
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // this is critical to scan your React files
    ],
    theme: {
      extend: {},
    },
    plugins: [daisyui],
  };
  