module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "header": "hsla(210, 20%, 98%, .8)",
        "off-black": "hsla(240, 6%, 25%, 0.122)",
      },
      fontFamily: {
        "inter": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        "work-sans": ["Work Sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    },
  },
  plugins: [],
}