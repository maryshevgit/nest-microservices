module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/*.tsx',
  ],
  theme: {
    height: {
      navbar: 'var(--navbar-height)',
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
    },
    fontSize: {
      size_m: '16px',
      size_l: '24px',
    },
    lineHeight: {
      line_m: '24px',
      line_l: '32px',
    },
    fontFamily: {
      main: ['Consolas', 'sans-serif'],
    },
  },
  plugins: [],
};
