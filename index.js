/**
 *      MercuryUI 1.0.0-beta.3
 *  ES:
 *     You should not modify this file for any reason,
 *  EN:
 *      No debes modificar este archivo por ninguna razón
 * 
 */
const plugin        = require("tailwindcss/plugin");
const colors        = require("tailwindcss/colors");
const components    = require("./src/components");
const { utilities, variants } = require("./src/utilities");
const base          = require("./src/base");
const { forEach }   = require("lodash");

module.exports = plugin.withOptions(
    () => {
        return ({ addBase, addUtilities, addComponents }) => {
            addBase(base);
            //#region Utilities
            let i = 0;
            forEach(utilities, (utility) => {
                const name = Object.getOwnPropertyNames(variants)[i];
                addUtilities(utility, {
                    variants: variants[name], //Add the variants that have the same name as the utility
                });
                i++;
            })
            //#endregion
            forEach(components, (component) => {
                addComponents(component);
            });
        };
    },
    /**
     *      Importante
     *  EN:
     *      This function loads the default theme of the plugin. Variants required for how the plugin 
     *      works, but the colors can be modified from your project's tailwind.config.js file, overwriting 
     *      the values ​​of each color.
     *  ES:
     *      Esta función carga el tema por defecto del plugin. las variantes son necesarias para
     *      el funcionamiento del mismo, pero los colores pueden ser modificados desde el archivo
     *      tailwind.config.js de tu proyecto, sobreescribiendo los valores de cada color.
     * 
     */
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
                    brightness: ["active", "hover", "focus"],
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
