/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'media-screen-90rem': '1440px',
        'media-screen-75rem': '1200px',
        'media-screen-62rem': '992px',
        //這邊用px才work用rem他會從最小的開始
      },
      colors: {
        'grandson-hover': '#efefef',
        'info-divider': '#f2f2f2',
        'header-bar': '#CC9D04',
        'nav-font-color': '#422d2d',
        'search-border-color': '#e6d2b3',
        'sidenav-bg-color': '#F4F5F4',
        'sidenav-text': '#6d6c6c',
        'sidenav-text-hover': '#c00',
        'footer-bg-color': '#f1f1f1',
        'footer-text': '#626262',
        'bg-button': '#A12518',
        'footer-list-hover': '#ba1707',
        price2: '#C79F61',
        'show-more-button-hover': '#FE5448',
        'show-more-button': '#fe6c61',
      },
      maxWidth: {
        '90rem': '90rem',
        '80rem': '80rem',
        '73rem': '73rem',
        '60.6rem': '60.6rem',
        '46.8rem': '46.8rem',
      },
    },
  },
  plugins: [],
};
