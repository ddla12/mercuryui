const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const components = require('./dist/components/index');
const utilities = require('./dist/utilities/index');

module.exports = plugin.withOptions((options) => {
    return function({ addComponents, addUtilities }) {
        addComponents(components);
        addUtilities(utilities);
    }
}, (options) => {
    return {
        theme: {
            extend: {
                colors: {
                    primary   : colors.rose,
                    secondary : colors.fuchsia,
                    warning   : colors.amber,
                    info      : colors.lightBlue,
                    danger    : colors.red,
                    success   : colors.green,
                    darkWhite : colors.warmGray,
                },
            }
        },
        variants: {
            extend: {
              brightness              : ['active'],
              scale                   : ['active'],
              transitionTimingFunction: ['active'],
              transitionDuration      : ['active'],
              borderWidth             : ['hover', 'focus', 'last'],
              borderOpacity           : ['active'],
              ringWidth               : ['hover', 'active'],
              outline                 : ['hover', 'active'],
              display                 : ['checked'],
              backgroundColor         : ['checked', 'active', 'first'],
              textColor               : ['first'],
              fontWeight              : ['first'],
            },
        },
      }
});