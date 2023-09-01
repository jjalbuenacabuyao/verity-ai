const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    supports: {
      clamp: "font-size: clamp(1rem, 0.94rem + 0.33vw, 1.25rem)",
      vh: "height: 100vh",
      dvh: "height: 100dvh",
    },

    extend: {
      colors: {
        header: "hsla(210, 20%, 98%, .8)",
        "off-black": "hsla(240, 6%, 25%, 0.122)",
        "light-blue": "#47caff",
        "light-violet": "#bd34fe",
      },

      padding: {
        fluid: "clamp(1.5rem, -0.8417rem + 9.9914vw, 8.75rem)",
      },

      fontSize: {
        "heading-fluid": "clamp(2.25rem, 1.7655rem + 2.0672vw, 3.75rem)",
        "description-fluid":
          "font-size: clamp(1rem, 0.9482rem + 0.221vw, 1.125rem);",
      },

      boxShadow: {
        "dialog-content":
          "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
      },

      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + 24px))",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        swipeOut: {
          from: {
            transform: "translateX(var(--radix-toast-swipe-end-x))",
          },
          to: {
            transform: "translateX(calc(100% + 24px))",
          },
        },
      },

      animation: {
        overlayShow: "overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [nextui()],
};
