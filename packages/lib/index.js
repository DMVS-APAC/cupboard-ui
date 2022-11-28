const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
  () =>
    ({ addComponents }) => {
      const buttons = {
        '.btn': {
          '@apply dm__py-5 dm__px-11 dm__bg-gradient-to-r dm__from-[#DA77F2] dm__to-[#BE4BDB] dm__rounded-[33px] dm__text-2xl dm__text-white dm__font-retina hover:dm__from-[#BE4BDB] hover:dm__to-[#DA77F2]':
            {},
        },
        '.btn-small': {
          '@apply dm__text-base dm__py-2 dm__px-4': '',
        },
      }

      addComponents(buttons)
    },
  () => {
    return {
      prefix: 'dm__',
      theme: {
        extend: {
          fontFamily: {
            retina: ['Retina', 'Arial', 'Helvetica', 'sans-serif'],
          },
          fontSize: {
            '6xl': ['3.563rem', '68.4px'], //57
            '5xl': ['2.875rem', '55.2px'], //46
            '4xl': ['2.313rem', '44.4px'], //37
            '3xl': ['1.813rem', '34.8px'], //29
            '2xl': ['1.438rem', '27.6px'], //23
            lg: ['1.188rem', '22.8px'], //19
            base: ['0.938rem', '18px'], //15
            sm: ['0.75rem', '14.4px'], //12
            xs: ['0.625rem', '12px'], //10
          },
          textColor: {
            general: '#4F596A',
            grape: '#AE3EC9',
          },
          boxShadow: {
            '3xl': '0px 32px 44px #818A8C',
          },
          colors: {
            primary: '#001A49',
          },
        },
      },
    }
  }
)
