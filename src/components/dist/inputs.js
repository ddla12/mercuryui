/**
 * 
 *  EN:
 *      Inputs submodule
 *  ES:
 *      Submódulo de inputs
 */
module.exports = {
    ".form-default": {
        "@apply p-3 block": {},
    },
    ".form-control": {
        "@apply w-full p-2": {},
    },
    ".label": {
        "@apply block text-sm font-bold text-gray-900 p-2": {},
    },
    ".input": {
        "@apply w-full p-4 py-2": {},
    },
    ".input-default": {
        "@apply transition duration-500 ease-in-out rounded-xl border-3 outline-none focus:ring-2 focus:outline-none font-medium shadow-lg":
            {},
    },
    ".input.textarea": {
        "@apply resize-none": {},
    },
    "input[type = 'color'].color-input": {
        "@apply cursor-pointer appearance-none opacity-0 absolute": {},
    },
    //#region Checkbox
    ".checkbox": {
        "@apply flex flex-row w-full gap-x-2 items-center": {},
    },
    ".checkbox > .body": {
        "@apply border-2 lg:square-9 square-8 transition-colors duration-200 ease-in-out text-white relative flex items-center justify-center":
            {},
    },
    ".checkbox.checkbox-default > .body": {
        "@apply rounded-full shadow-md":
            {},
    },
    ".checkbox > .body > svg": {
        "@apply z-10 hidden transition duration-200 ease-in-out": {},
    },
    ".checkbox > .body > input[type = 'checkbox']": {
        "@apply absolute lg:square-8 square-6 opacity-0 cursor-pointer z-20": {},
    },
    "input[type='checkbox']:checked + svg, input[type = 'radio']:checked + svg":
        {
            "@apply block": {},
        },
    //#endregion
    //#region Toggle
    ".toggle": {
        "@apply flex items-center gap-2 p-1 w-full": {},
    },
    ".toggle > .body": {
        "@apply block relative border-2 w-14 h-8 rounded-full": {},
    },
    ".toggle > .label, .checkbox > .label, .radio > .label": {
        "@apply tracking-wider font-bold text-lg": {},
    },
    ".toggle > .body > input[type = 'checkbox']": {
        "@apply absolute opacity-0 z-10 w-14 h-8 cursor-pointer": {},
    },
    ".dot": {
        "@apply absolute top-0.5 left-1 square-6 rounded-full transition duration-150 ease-out":
            {},
    },
    "input[type = 'checkbox']:checked + .dot": {
        "@apply filter brightness-200": {},
        "transform": "translateX(85%)",
    },
    //#endregion
    //#region Radio
    ".radio": {
        "@apply flex flex-row gap-x-2 items-center": {},
    },
    ".radio > .body": {
        "@apply square-6 relative border-2": {},
    },
    ".radio.radio-default > .body": {
        "@apply rounded-lg shadow-md": {},
    },
    "input[type = 'radio'].default": {
        "@apply square-6 opacity-0 absolute cursor-pointer z-10": {},
    },
    "input[type = 'radio'] + svg": {
        "@apply absolute square-5 hidden transition duration-200 ease-in-out":
            {},
    },
    //#endregion 
};
