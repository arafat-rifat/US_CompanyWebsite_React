/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-background.png')",
        'other-bg': "url('/src/assets/OtherHero.png')",
        'CRM-bg1': "url('/src/assets/CRM1.png')",
        'CRM-bg2': "url('/src/assets/CRM2.png')",
        'CRM-bg3': "url('/src/assets/CRM3.png')",
      },
      screens: {
        mob: '300px',
        // => @media (min-width: 640px) { ... }

        tab: '667px',
        // => @media (min-width: 768px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1500px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
