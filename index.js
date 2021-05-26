const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const components = require("./dist/components");
const utilities = require("./dist/utilities");
const base = require("./dist/base");
const { forEach } = require("lodash");

module.exports = plugin.withOptions(
    () => {
        return ({ addBase, addUtilities, addComponents }) => {
            addBase(base);
            forEach(utilities, (utility) => {
                addUtilities(utility, {
                    variants: [
                        'responsive',
                        'hover',
                        'focus',
                        'disabled',
                    ]
                });
            });
            forEach(components, (component) => {
                addComponents(component);
            });
        };
    },
    () => {
        return {
            theme: {
                extend: {
                    colors: {
                        primary: colors.rose,
                        secondary: colors.fuchsia,
                        warning: colors.amber,
                        info: colors.lightBlue,
                        danger: colors.red,
                        success: colors.green,
                        darkWhite: colors.warmGray,
                    },
                },
            },
            variants: {
                extend: {
                    brightness: ["active"],
                    scale: ["active"],
                    transitionTimingFunction: ["active"],
                    transitionDuration: ["active"],
                    borderWidth: ["hover", "focus", "last"],
                    borderOpacity: ["active"],
                    ringWidth: ["hover", "active"],
                    outline: ["hover", "active"],
                    display: ["checked"],
                    backgroundColor: ["checked", "active", "first"],
                    textColor: ["first"],
                    fontWeight: ["first"],
                },
            },
        };
    }
);
