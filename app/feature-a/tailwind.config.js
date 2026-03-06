/** @type {import('tailwindcss').Config} */
import sharedConfig from '@repo/ui/tailwind.config.js';

export default {
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
}
