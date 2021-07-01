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
        "font-size": "3.25rem",
        "line-height": "3.75rem",
    },

    ".subtitle": {
        "font-size": "1.5rem",
        "line-height": "2rem",
    },

    ".title-sm": {
        "font-size": "2.5rem",
        "line-height": "2.75rem",
    },

    ".subtitle-sm": {
        "font-size": "1rem",
        "line-height": "1.5rem",
    },

    ".title-md": {
        "font-size": "5rem",
        "line-height": "5.5rem",
    },

    ".subtitle-md": {
        "font-size": "2rem",
        "line-height": "2.5rem",
    },

    ".title-lg": {
        "font-size": "7.5rem",
        "line-height": "8.35rem",
    },

    ".subtitle-lg": {
        "font-size": "3rem",
        "line-height": "3.85rem",
    },

    ".title-xl": {
        "font-size": "10rem",
        "line-height": "11.5rem",
    },

    ".subtitle-xl": {
        "font-size": "4rem",
        "line-height": "5rem",
    },

    ".title-2xl": {
        "font-size": "12.5rem",
        "line-height": "14rem",
    },

    ".subtitle-2xl": {
        "font-size": "5rem",
        "line-height": "6rem",
    },
    ".text-responsive": {
        "@apply text-base xl:text-lg 2xl:text-xl": {},
    },
    /**
     *  Basic text utilities / Utilidades básicas de texto
     */
    ".link": {
        "@apply font-semibold no-underline transition-colors inline-flex duration-200":
            {},
    },
    ".quote": {
        "@apply italic font-light tracking-wide": {},
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
