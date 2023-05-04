module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/*.tsx',
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
    },
    backgroundColor: {
      color: 'var(--bg-color)',
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
