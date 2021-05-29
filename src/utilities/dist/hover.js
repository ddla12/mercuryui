/**
 *  EN:
 *      Hover effects
 *  ES:
 *      Efectos hover
 */
module.exports = {
    ".hover-grown": {
        "@apply transform transition duration-150 hover:scale-110": {},
    },
    ".hover-shrink": {
        "@apply transform transition duration-150 hover:scale-90": {},
    },
    ".hover-left": {
        "@apply transform transition duration-150 hover:-translate-x-6": {},
    },
    ".hover-right": {
        "@apply transform transition duration-150 hover:translate-x-6": {},
    },
    ".hover-up": {
       "@apply transform transition duration-150 hover:-translate-y-6": {},
    },
    ".hover-down": {
        "@apply transform transition duration-150 hover:translate-y-6": {},
    },
    ".hover-dark": {
        "@apply transform transition duration-150 filter hover:brightness-90": {},
    },
    ".hover-light": {
        "@apply transform transition duration-150 filter hover:brightness-110": {},
    },
    ".hover-skew-up": {
        "@apply transform transition duration-150 hover:-skew-y-6": {},
    },
    ".hover-skew-down": {
        "@apply transform transition duration-150 hover:skew-y-6": {},
    },
    ".hover-skew-left": {
        "@apply transform transition duration-150 hover:-skew-x-12": {},
    },
    ".hover-skew-right": {
        "@apply transform transition duration-150 hover:skew-x-6": {},
    },
    ".hover-rotate-left": {
        "@apply transform transition duration-150 hover:-rotate-6": {},
    },
    ".hover-rotate-right": {
        "@apply transform transition duration-150 hover:rotate-6": {},
    },
};