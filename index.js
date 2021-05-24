const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const components = require('./dist/index');

module.exports = plugin.withOptions((options) => {
    return function({ addComponents }) {
        addComponents(components);
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
      }
});