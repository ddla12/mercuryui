/**
 *  EN:
 *      Tooltip sub-module
 *  ES:
 *      Submódulo de tooltips
 */
module.exports = {
    ".tooltip, .popover": {
        "@apply absolute items-center":
            {},
    },
    ".tooltip * , .popover * ": {
        "@apply relative z-10 p-2 leading-none": {},
    },
    ".has-tooltip:hover > .tooltip": {
        "@apply flex": {},
    },
    ".has-tooltip > .tooltip": {
        "@apply hidden": {},
    },
    ".tooltip > .body": {
        "@apply whitespace-nowrap": {},
    },
    ".tooltip.tooltip-default": {
        "@apply shadow-md rounded-xl text-sm": {},
    },
    ".popover > .body": {
        "@apply w-full h-4/5": {},
    },
    ".popover > .head": {
        "@apply w-full h-1/5": {},
    },
    ".popover.popover-default": {
        "@apply shadow-md rounded-xl text-sm flex-col": {},
    },
    ".arrow": {
        "@apply w-3 h-3 transform rotate-45 bg-inherit":
            {},
    },
    ".float-in-top": {
        "@apply flex-col bottom-0 mb-6": {},
    },
    ".float-in-bottom": {
        "@apply flex-col-reverse top-0 mt-6": {},
    },
    ".float-in-left": {
        "@apply flex-row right-0 mr-6": {},
    },
    ".float-in-right": {
        "@apply flex-row-reverse left-0 ml-6": {},
    },
    //#endregion
    //#region Arrow position
    ".tooltip.float-in-top > .arrow": {
        "@apply -mb-1": {},
    },
    ".tooltip.float-in-bottom > .arrow": {
        "@apply -mt-1": {},
    },
    ".tooltip.float-in-right > .arrow": {
        "@apply -mr-2": {},
    },
    ".tooltip.float-in-left > .arrow": {
        "@apply -ml-2": {},
    },
    ".popover.float-in-top > .arrow": {
        "@apply -mb-4": {},
    },
    ".popover.float-in-bottom > .arrow": {
        "@apply order-first -mt-4": {},
    },
    //#endregion
};
