/**
 * 
 *  EN:
 *      Theme sub-module
 *  ES:
 *      Sub-módulo de temas
 */
module.exports = {
    //#region Themes
    ".theme-primary": {
        "@apply bg-gradient-to-r from-primary-500 to-primary-600 text-white":
            {},
    },
    ".theme-secondary": {
        "@apply bg-gradient-to-r from-secondary-500 to-secondary-600 text-white":
            {},
    },
    ".theme-danger": {
        "@apply bg-gradient-to-r from-danger-500 to-danger-600 text-white": {},
    },
    ".theme-success": {
        "@apply bg-gradient-to-r from-success-500 to-success-600 text-white":
            {},
    },
    ".theme-warning": {
        "@apply bg-gradient-to-r from-warning-500 to-warning-600 text-black":
            {},
    },
    ".theme-info": {
        "@apply bg-gradient-to-r from-info-500 to-info-600 text-white": {},
    },
    //#endregion
    //#region Text gradients
    /**
     *  Text gradients / Gradientes de texto
     */
    ".text-g": {
        "@apply bg-clip-text text-transparent": {},
    },
    ".text-g-primary": {
        "@apply text-g bg-gradient-to-r from-primary-400 to-primary-500": {},
    },
    ".text-g-secondary": {
        "@apply text-g bg-gradient-to-r from-secondary-400 to-secondary-500": {},
    },
    ".text-g-success": {
        "@apply text-g bg-gradient-to-r from-success-400 to-success-500": {},
    },
    ".text-g-info": {
        "@apply text-g bg-gradient-to-r from-info-400 to-info-500": {},
    },
    ".text-g-danger": {
        "@apply text-g bg-gradient-to-r from-danger-400 to-danger-500": {},
    },
    ".text-g-warning": {
        "@apply text-g bg-gradient-to-r from-warning-400 to-warning-400": {},
    },
    //#endregion
    //#region Backdrops effects
    /**
     *  Backdrops effects / Efectos backdrop
     */
    ".bg-darker": {
        "@apply backdrop-filter backdrop-brightness-75": {},
    },
    ".bg-lighter": {
        "@apply backdrop-filter backdrop-brightness-110": {},
    },
    //#endregion
    //#region Input themes
    /**
     *  Input themes / Temas de inputs
     */
    ".input-primary": {
        "@apply border-primary-400 focus:ring-primary-500 placeholder-primary-400":
            {},
    },
    ".input-secondary": {
        "@apply border-secondary-400 focus:ring-secondary-500 placeholder-secondary-400":
            {},
    },
    ".input-danger": {
        "@apply border-danger-400 focus:ring-danger-500 placeholder-danger-400":
            {},
    },
    ".input-success": {
        "@apply border-success-400 focus:ring-success-500 placeholder-success-400":
            {},
    },
    ".input-warning": {
        "@apply border-warning-400 focus:ring-warning-500 placeholder-warning-400":
            {},
    },
    ".input-info": {
        "@apply border-info-400 focus:ring-info-500 placeholder-info-400": {},
    },
    ".checkbox-primary": {
        "@apply border-primary-400 bg-opacity-0 bg-primary-400": {},
    },
    ".checkbox-secondary": {
        "@apply border-secondary-400 bg-opacity-0 bg-secondary-400": {},
    },
    ".checkbox-success": {
        "@apply border-success-400 bg-opacity-0 bg-success-400": {},
    },
    ".checkbox-info": {
        "@apply border-info-400 bg-opacity-0 bg-info-400": {},
    },
    ".checkbox-danger": {
        "@apply border-danger-400 bg-opacity-0 bg-danger-400": {},
    },
    ".checkbox-warning": {
        "@apply border-warning-400 bg-opacity-0 bg-warning-400": {},
    },
    //#endregion
    //#region Link themes
    /**
     *  Link themes / Temas para los links
     */
    ".link-default": {
        "@apply text-gray-700 hover:text-gray-900": {},
    },
    ".link-white": {
        "@apply text-gray-100 hover:text-gray-300": {},
    },
    ".link-primary": {
        "@apply text-primary-400 hover:text-primary-500": {},
    },
    ".link-secondary": {
        "@apply text-secondary-400 hover:text-secondary-500": {},
    },
    ".link-info": {
        "@apply text-info-400 hover:text-info-500": {},
    },
    ".link-success": {
        "@apply text-success-400 hover:text-success-500": {},
    },
    ".link-danger": {
        "@apply text-danger-400 hover:text-danger-500": {},
    },
    ".link-warning": {
        "@apply text-warning-400 hover:text-warning-500": {},
    },
    //#endregion
};
