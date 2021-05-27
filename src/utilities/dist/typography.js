/**
 * 
 *  EN:
 *      Typography sub-module:
 *          Only utilities for text
 *
 *  ES:
 *      Sub-módulo de tipografía:
 *          Solo utilidades para el texto.
 */
module.exports = {
    ".title": {
        "@apply text-3xl xl:text-4xl 2xl:text-5xl": {},
    },
    ".title-lg": {
        "@apply text-7xl xl:text-8xl 2xl:text-9xl": {},
    },
    ".title-sm": {
        "@apply text-2xl xl:text-3xl 2xl:text-4xl": {},
    },
    ".subtitle": {
        "@apply text-lg xl:text-xl 2xl:text-2xl": {},
    },
    ".subtitle-lg": {
        "@apply text-4xl xl:text-5xl 2xl:text-6xl": {},
    },
    ".subtitle-sm, .text-responsive": {
        "@apply text-base xl:text-lg 2xl:text-xl": {},
    },
    /**
     *  Basic text utilities / Utilidades básicas de texto
     */
    ".link": {
        "@apply font-semibold no-underline transition-colors inline-flex duration-200": {},
    },
    ".quote": {
        "@apply italic font-light tracking-wide": {},
    },
    ".p": {
        "@apply text-base font-normal tracking-normal": {},
    },
    /**
     *  Filters / Filtros
     */
    ".text-darker": {
        "@apply filter brightness-75": {},
    },
    ".text-lighter": {
        "@apply filter brightness-110": {},
    },
};
