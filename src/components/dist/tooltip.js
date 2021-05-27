/**
 *  EN:
 *      Tooltip sub-module
 *  ES:
 *      Submódulo de tooltips
 */
module.exports = {
    ".tooltip": {
        "@apply visible z-100 select-none transition-opacity duration-100 ease-out opacity-0 w-32 p-2 text-sm leading-tight rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-full":
            {},
    },
    ".tooltip-chart": {
        "@apply text-white absolute z-10 w-6 h-6 transform fill-current stroke-current":
            {},
    },
    ".has-tooltip:hover .tooltip": {
        "@apply opacity-100": {},
    },
    //#region Tooltip position
    ".tooltip-top-left": {
        "@apply top-left -ml-16 -mt-8": {},
    },
    ".tooltip-top-right": {
        "@apply top-right -mr-16 -mt-8": {},
    },
    ".tooltip-bottom-left": {
        "@apply bottom-left -mb-8 -ml-16": {},
    },
    ".tooltip-bottom-right": {
        "@apply bottom-right -mb-8 -mr-16": {},
    },
    //#endregion
    //#region Arrow position
    "div.tooltip-top-left > span > svg": {
        "@apply translate-x-1 -translate-y-1": {},
    },
    "div.tooltip-top-right > span > svg": {
        "@apply translate-x-14 -translate-y-1": {},
    },
    "div.tooltip-bottom-left > span > svg": {
        "@apply translate-x-14 -translate-y-9": {},
    },
    "div.tooltip-bottom-right > span > svg": {
        "@apply translate-x-1 -translate-y-9": {},
    },
    //#endregion
};
