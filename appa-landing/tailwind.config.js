/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bottom-curve': "url('/src/assets/images/bottom-curve.svg')",
        'bottom-right-curve': "url('/src/assets/images/bottom-right-curve.svg')",
        'bottom-curve-light': "url('/src/assets/images/bottom-curve-light.svg')",
        'bottom-curve-left-light': "url('/src/assets/images/bottom-curve-left-light.svg')",
        'bottom-curve-light-shade': "url('/src/assets/images/bottom-curve-light-shade.svg')",
        'swerving-curve': "url('/src/assets/images/swerving-curve.svg')",
        'swerving-curve-light': "url('/src/assets/images/swerving-curve-light.svg')",
        'login-side-image': "url('/src/assets/images/login-side-image.svg')",
        'signup-side-image': "url('/src/assets/images/signup-side-image.svg')",
      }
    },
  },
  plugins: [],
  compilerOptions: {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}

