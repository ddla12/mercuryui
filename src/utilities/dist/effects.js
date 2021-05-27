/**
 *  EN:
 *      Effects sub-module:
 *          An effect can be a click-grown, a fade-in effect ...
 *  ES:
 *      Submódulo de efectos:
 *          Un efecto pueden ser un fade-in, o efectos de click.
 */
module.exports = {
    ".ghost": {
        "@apply transition duration-150 ease-in-out": {},
    },
    ".ghost-outline": {
        "@apply ghost border-2 bg-opacity-0 hover:bg-opacity-100": {},
    },
    ".pill": {
        "@apply text-sm px-3 shadow-sm rounded-full": {},
    },
    ".disabled": {
        "@apply filter brightness-75": {},
    },
    ".clickeable": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-110 focus:outline-none cursor-pointer":
            {},
    },
    ".image-fill": {
        "@apply object-fill size-full": {},
    },
    ".flippable-icon": {
        "@apply square-6 transform duration-150 ease-in-out": {},
    },
    ".loading": {
        "@apply animate-pulse p-2 middle-center cursor-wait": {},
    },
    //#region Elevation utilities
    ".elevation-xs": {
        "box-shadow": "0px 1px 2.25px -1px #000000",
    },
    ".elevation-sm": {
        "box-shadow": "0px 3px 3.5px rgba(0,0,0,0.2), 0px 2px 4px rgba(0,0,0,0.2)",
    },
    ".elevation": {
        "box-shadow": "0px 3px 5px 1px rgba(0,0,0,0.2),0px 5px 6px rgba(0,0,0,0.2)",
    },
    ".elevation-md": {
        "box-shadow": "0px 10px 10px rgba(0,0,0,0.2),0px 5px 5px rgba(0,0,0,0.2)",
    },
    ".elevation-lg": {
        "box-shadow": "0px 12px 10px rgba(0,0,0,0.2), 0px 10px 10px rgba(0,0,0,0.2)",
    },
    ".elevation-xl": {
        "box-shadow": "0px 17px 20px rgba(0,0,0,0.3), 0px 20px 25px rgba(0,0,0,0.2)",
    },
    ".elevation-2xl": {
        "box-shadow": "0px 22px 30px rgba(0,0,0,0.4), 0px 15px 20px rgba(0,0,0,0.2)",
    },
    //#endregion
    //#region Hover effects
    ".hover": {
        "@apply transform transition duration-150": {},
    },
    ".hover-filter": {
        "@apply hover filter": {},
    },
    ".hover-grown": {
        "@apply hover hover:scale-110": {},
    },
    ".hover-shrink": {
        "@apply hover hover:scale-90": {},
    },
    ".hover-left": {
        "@apply hover hover:-translate-x-6": {},
    },
    ".hover-right": {
        "@apply hover hover:translate-x-6": {},
    },
    ".hover-up": {
       "@apply hover hover:-translate-y-6": {},
    },
    ".hover-down": {
        "@apply hover hover:translate-y-6": {},
    },
    ".hover-dark": {
        "@apply hover-filter hover:brightness-90": {},
    },
    ".hover-light": {
        "@apply hover-filter hover:brightness-110": {},
    },
    ".hover-skew-up": {
        "@apply hover hover:-skew-y-6": {},
    },
    ".hover-skew-down": {
        "@apply hover hover:skew-y-6": {},
    },
    ".hover-skew-left": {
        "@apply hover hover:-skew-x-12": {},
    },
    ".hover-skew-right": {
        "@apply hover hover:skew-x-6": {},
    },
    ".hover-rotate-left": {
        "@apply hover hover:-rotate-6": {},
    },
    ".hover-rotate-right": {
        "@apply hover hover:rotate-6": {},
    },
    //#endregion
};