/**
 *  EN:
 *      Shortcuts utilities:
 *          If you find a way to summarize a set of utilities you should place it here.
 *          It may be one that you use frequently. Example: 'flex flex-row'
 * 
 *  ES:
 *      Utilidades de atajos:
 *          Si encuentras una manera de resumir un conjunto de utilidades debes colocarla
 *          aquí. Puede ser una que frecuentemente se utiliza cómo por ejemplo 'flex flex-row'
 * 
 */
module.exports = {
    //#region Display shortcuts
    ".grid-default": {
        "@apply grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3": {},
    },
    ".f-col": {
        "@apply flex flex-col gap-1": {},
    },
    ".f-row": {
        "@apply flex flex-row gap-1": {},
    },
    ".-f-col": {
        "@apply flex flex-col-reverse": {},
    },
    ".-f-row": {
        "@apply flex flex-row-reverse": {},
    },
    //#endregion
    //#region Position shortcuts
    ".middle-center": {
        "@apply my-auto mx-auto": {},
    },
    ".in-top": {
        "@apply absolute inset-x-0 top-0": {},
    },
    ".top-right": {
        "@apply absolute top-0 right-0": {},
    },
    ".top-left": {
        "@apply absolute left-0 top-0": {},
    },
    ".in-bottom": {
        "@apply absolute inset-x-0 bottom-0": {},
    },
    ".bottom-right": {
        "@apply absolute bottom-0 right-0": {},
    },
    ".bottom-left": {
        "@apply absolute left-0 bottom-0": {},
    },
    ".in-left": {
        "@apply absolute inset-y-0 left-0": {},
    },
    ".in-right": {
        "@apply absolute inset-y-0 right-0": {},
    },
    ".in-all": {
        "@apply absolute inset-0": {},
    },
    //#endregion
};