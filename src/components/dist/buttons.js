/**
 * 
 *  EN:
 *      Button sub-module
 *  ES:
 *      Submódulo de botones
 */
module.exports = {
    //#region Buttons
    ".button-component": {
        "@apply f-row p-2 justify-center my-auto": {},
    },
    ".button": {
        "@apply select-none text-center w-full": {},
    },
    ".button-default": {
        "@apply font-bold rounded-md clickeable": {},
    },
    ".button > .body, .badge > .body": {
        "@apply f-row gap-x-2 mx-auto justify-center flex-nowrap relative": {},
    },
    ".button-sm": {
        "@apply px-3 py-1 text-sm": {},
    },
    ".button-md": {
        "@apply p-3 text-base": {},
    },
    ".button-lg": {
        "@apply p-4 text-xl": {},
    },
    //#endregion
    //#region Badge
    ".badge": {
        "@apply text-sm px-2": {},
    },
    ".badge-default": {
        "@apply shadow-sm rounded-md font-semibold": {},
    },
    ".badge-component": {
        "@apply f-row my-auto select-none": {},
    },
    //#endregion
};
