/**
 *  EN:
 *      Card sub-module
 *  ES:
 *      Sub-módulo de cartas
 */
module.exports = {
    ".card-lg": {
        "@apply rounded-md p-8 elevation-md": {},
    },
    ".card-md": {
        "@apply rounded-lg p-6 elevation-sm": {},
    },
    ".card, .themed-card": {
        "@apply p-4 rounded-md shadow-md": {},
    },
    ".card > .head": {
        "@apply p-2 w-full": {},
    },
    ".card > .body, .themed-card > .body": {
        "@apply f-col gap-y-2 w-full": {},
    },
    ".topcard, .subcard": {
        "@apply p-2 rounded-md shadow-sm": {},
    },
    ".downcard": {
        "@apply p-4 rounded-md shadow-inner overflow-auto": {},
    },
    ".themed-card > .body > .content": {
        "@apply px-4 py-2 rounded-md w-full": {},
    },
    ".themed-card > .body > .head": {
        "@apply pl-3 w-full": {},
    },
    ".themed-card > .body > .footer": {
        "@apply px-3 py-1": {},
    },
    //#region Image Card
    ".image-card": {
        "@apply overflow-hidden size-full gap-3": {},
    },
    ".image-card.horizontal": {
        "@apply f-col md:f-row": {},
    },
    ".image-card.vertical": {
        "@apply f-col": {},
    },
    ".image-card > .image": {
        "@apply flex justify-center": {},
    },
    ".image-card.horizontal * ": {
        "@apply h-1/2 md:w-1/2": {},
    },
    ".image-card.vertical * ": {
        "@apply h-1/2": {},
    },
    ".image-card > .body": {
        "@apply f-col gap-y-0.5 p-2 max-h-full place-content-center": {},
    },
    //#endregion
};
