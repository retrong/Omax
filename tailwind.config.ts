import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: '#201a1c',
        secondary: '#332e2f',
        dimWhite: '#efefef',
        dimAsh: '#595856',
        green: '#af69ef',
        white: "#fff",

        dark: '#0a0a0a',
        darkText: '#fff',
        black: "#000000"
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif']
      }
    },
    screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
    },
  },
  plugins: [],
}
export default config
