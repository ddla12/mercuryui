/**
 * 
 *  EN:
 *      Mockup sub-module
 *  ES:
 *      Submódulo de mockups
 */
module.exports = {
    //#region Phone
    ".phone": {
        "@apply rounded-3xl border-8 f-col relative": {},
    },
    ".phone-md": {
        "@apply w-60 h-100": {},
    },
    ".phone-lg": {
        "@apply w-68 h-128": {},
    },
    ".phone-sm": {
        "@apply w-48 h-88": {},
    },
    ".phone > .headbar": {
        "@apply absolute w-full top-0 f-row justify-center -mt-2": {},
    },
    ".phone > .headbar > .body": {
        "@apply rounded-xl w-28 h-6 f-row gap-x-2 justify-center items-center":
            {},
    },
    ".camera": {
        "@apply h-2 w-2 rounded-full": {},
    },
    //#endregion
    //#region Window
    ".window-sm": {
        "@apply h-36 w-64": {},
    },
    ".window-md": {
        "@apply h-54 w-96": {},
    },
    ".window-lg": {
        "@apply h-72 w-128": {},
    },
    ".window": {
        "@apply flex f-col": {},
    },
    ".window.default": {
        "@apply rounded-lg border-2": {},
    },
    ".titlebar": {
        "@apply h-12/1 w-full f-row justify-between items-center text-lg px-3":
            {},
    },
    ".titlebar > .title": {
        "@apply font-mono": {},
    },
    ".titlebar > .control": {
        "@apply f-row gap-x-2 px-1 items-center": {},
    },
    ".window > .body": {
        "@apply h-88/1 w-full": {},
    },
    //#endregion
};
