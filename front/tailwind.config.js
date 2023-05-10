module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    height: {
      navbar: 'var(--navbar-height)',
      size_m: '24px',
      size_l: '32px',
      size_xl: '40px',
    },
    width: {
      size_m: '24px',
      size_l: '32px',
      size_xl: '40px',
      sidebar: 'var(--sidebar-width)',
      sidebar_collapsed: 'var(--sidebar-width-collapsed)',
      full: '100%',
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      inverted_primary: 'var(--inverted-primary-color)',
      inverted_secondary: 'var(--inverted-secondary-color)',
      red: '#dc2626',
    },
    backgroundColor: {
      color: 'var(--bg-color)',
      inverted: 'var(--inverted-bg-color)',
      black: 'black',
      white: '#ffffff',
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
