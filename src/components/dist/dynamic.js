/**
 * 
 *  EN:
 *      Dynamic componentes sub-module:
 *          Components that need logic to function
 *  ES:
 *      Submódulo de componentes dinámicos:
 *          Componentes que necesitan lógica para su función
 */
module.exports = {
    //#region Modal     
    ".modal-dialog": {
        "@apply z-20 fixed top-0 left-0 flex items-center justify-center size-screen bg-black bg-opacity-50":
            {},
    },
    ".modal": {
        "@apply z-30": {},
    },
    //#endregion
    //#region Dropdown
    ".dropdown-component": {
        "@apply relative": {},
    },
    ".dropdown, .dropdown-hover": {
        "@apply relative flex items-center justify-between":
            {},
    },
    ".dropdown.dropdown-default": {
        "@apply px-3 font-semibold rounded-lg shadow-lg clickeable": {},
    },
    ".dropdown-hover.dropdown-default": {
        "@apply px-3 font-semibold rounded-lg shadow-lg": {},
    },
    ".dropdown-component > .dropdown-list": {
        "@apply hidden": {},
    },
    ".dropdown-hover:hover + .dropdown-list": {
        "@apply block": {},
    },
    ".dropdown-list": {
        "@apply absolute inset-x-0 f-col":
            {},
    },
    ".dropdown + .dropdown-list-default": {
        "@apply shadow-lg p-4 rounded-md text-black": {},
    },
    ".dropdown-hover + .dropdown-list-default.dropdown-bottom": {
        "@apply shadow-lg p-4 rounded-b-md text-black": {},
    },
    ".dropdown-hover + .dropdown-list-default.dropdown-top": {
        "@apply shadow-lg p-4 rounded-t-md text-black": {},
    },
    ".dropdown + .dropdown-bottom": {
        "@apply top-12":
            {},
    },
    ".dropdown + .dropdown-top": {
        "@apply bottom-12":
            {},
    },
    ".dropdown-hover + .dropdown-bottom": {
        "@apply top-8":
            {},
    },
    ".dropdown-hover + .dropdown-top": {
        "@apply bottom-8":
            {},
    },
    ".dropdown-list > ul": {
        "@apply list-none f-col gap-y-1": {},
    },
    ".dropdown-item": {
        "@apply p-1 text-lg font-bold cursor-pointer select-none": {},
    },
    //#endregion
    //#region List
    ".list": {
        "@apply size-full list-none": {},
    },
    ".list.list-default": {
        "@apply border-2 rounded-lg": {},
    },
    ".list li": {
        "@apply list-item": {},
    },
    ".list > li.li-default": {
        "@apply border-b-2 last:border-0 p-2": {},
    },
    //#endregion
    //#region Collapse
    ".collapse": {
        "@apply relative": {},
    },
    ".collapse.collapse-default": {
        "@apply border-2 rounded-lg": {},
    },
    ".collapse > .body": {
        "@apply relative overflow-hidden max-h-0":
            {},
    },
    ".collapse > .body.body-default": {
        "@apply transition-all duration-300":
            {},
    },
    ".collapse > .head": {
        "@apply w-full flex items-center justify-between":
            {},
    },
    ".collapse > .head.head-default": {
        "@apply p-4 text-left cursor-pointer":
            {},
    },
    //#endregion
    //#region Slider
    ".slider": {
        "@apply relative size-full flex justify-between bg-cover bg-no-repeat bg-center": {},
    },
    ".slider-control": {
        "@apply absolute inset-y-0 h-full z-10":
            {},
    },
    ".slider-control-default": {
        "@apply w-12 bg-opacity-25 f-col items-center": {},
    },
    ".slider-control-left": {
        "@apply slider-control left-0": {},
    },
    ".slider-control-right": {
        "@apply slider-control right-0": {},
    },
    ".slider-button": {
        "@apply my-auto square-8 rounded-full p-1 clickeable": {},
    },
    ".slider-button > svg": {
        "@apply square-6 cursor-pointer": {},
    },
    //#endregion
};
