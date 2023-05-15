module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      textShadow: {
        primary: '0 0 0 var(--primary-color)',
      },
      transitionProperty: {
        width: 'width',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.1 },
          '100%': { opacity: 100 },
        },
      },
      animation: {
        blink: 'blink 0.7s forwards infinite',
      },
      dropShadow: {
        primary: '0 0 0 var(--primary-color)',
      },
    },
    zIndex: {
      modal: 'var(--modal-z-index)',
      overlay: 'var(--overlay-z-index)',
    },
    height: {
      navbar: 'var(--navbar-height)',
      size_m: '24px',
      size_l: '32px',
      size_xl: '40px',
      3: '3px',
    },
    width: {
      size_m: '24px',
      size_l: '32px',
      size_xl: '40px',
      sidebar: 'var(--sidebar-width)',
      sidebar_collapsed: 'var(--sidebar-width-collapsed)',
      full: '100%',
      9: '9px',
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      inverted_primary: 'var(--inverted-primary-color)',
      inverted_secondary: 'var(--inverted-secondary-color)',
      red_light: 'var(--red-light)',
      red_dark: 'var(--red-dark)',
      transparent: 'transparent',
    },
    backgroundColor: {
      color: 'var(--bg-color)',
      inverted: 'var(--inverted-bg-color)',
      black: 'black',
      white: '#ffffff',
      transparent: 'transparent',
    },
    fontSize: {
      size_m: '16px',
      size_l: '24px',
      size_xl: '32px',
    },
    lineHeight: {
      line_m: '24px',
      line_l: '32px',
      line_xl: '40px',
    },
    fontFamily: {
      main: ['Consolas', 'sans-serif'],
    },
  },
  plugins: [],
};
