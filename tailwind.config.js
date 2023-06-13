/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif' ]
      },
      colors: {
        'lavender': {
          500: 'hsl(245 50% 50%)',
          400: 'hsl(245 50% 60%)',
          300: 'hsl(245 50% 70%)',
          200: 'hsl(245 50% 80%)',
          100: 'hsl(245 50% 90%)',
        }
      }
    }
  },
  plugins: [],
}

