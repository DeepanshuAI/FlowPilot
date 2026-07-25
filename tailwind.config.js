/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        surface: {
          950: '#07070a',
          900: '#0c0c14',
          850: '#11111d',
          800: '#161626',
          750: '#1c1c30',
          700: '#22223b',
          600: '#2d2d4d',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(124,58,237,0.35) 0%, rgba(139,92,246,0.12) 50%, transparent 100%)',
        'cta-glow': 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.25) 0%, transparent 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
        'gradient-border': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(52,211,153,0.08) 100%)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(124,58,237,0.3)',
        'glow-lg': '0 0 70px -10px rgba(124,58,237,0.4)',
        'glow-emerald': '0 0 35px -5px rgba(16,185,129,0.3)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.5), 0 2px 6px -1px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 30px -5px rgba(124,58,237,0.25)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255,255,255,0.1)',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};

