module.exports = {
    ".card, .themed-card": {
        "@apply p-4 rounded-md shadow-md": {},
    },
    ".card-title": {
        "@apply text-2xl xl:text-4xl font-semibold p-2 w-full": {},
    },
    ".themed-card .card-body": {
        "@apply f-col gap-y-2": {},
    },
    ".themed-card .card-body .body": {
        "@apply px-4 py-2 rounded-md text-base text-justify font-medium w-full": {},
    },
    ".themed-card .card-body .head": {
        "@apply pl-3 text-4xl text-left font-semibold w-full": {},
    },
    ".themed-card .card-body .footer": {
        "@apply border-t-2 px-3 py-1 font-light text-left text-sm": {}, 
    },
    ".card-border, .image-card-border, .topcard-border, .subcard-border": {
        "@apply border-2": {},
    },
    ".topcard, .subcard": {
        "@apply p-2 rounded-md shadow-sm": {},
    },
    ".card-default": {
        "@apply text-black": {},
    },
    ".image-card-h": {
        "@apply rounded-md shadow-md f-col md:flex-row gap-3 overflow-hidden size-full": {},
    },
    ".image-box": {
        "@apply size-full f-row justify-center": {},
    },
    ".image-card-v": {
        "@apply rounded-md shadow-md f-col gap-3 overflow-hidden size-full md:w-3/4 md:mx-auto": {},
    },
    ".image-card-h > div:first-child, .image-card-h > div:last-child": {
        "@apply md:w-1/2": {},
    },
    ".rounded-box": {
        "@apply rounded-full h-32 w-32 flex items-center justify-center overflow-hidden": {},
    },
    ".image-card-body": {
       "@apply f-col gap-y-0.5 p-2 max-h-full place-content-center w-full": {},
    },
    ".image-card-body .head": {
        "@apply text-4xl sm:text-lg lg:text-2xl 2xl:text-5xl text-left font-extrabold w-full": {},
    },
    ".image-card-body .body": {
        "@apply px-3 rounded-md text-base sm:text-xs lg:text-base 2xl:text-2xl w-full text-justify": {},
    },
    ".card-primary": {
        "@apply theme-primary": {},
    },
    ".card-secondary": {
        "@apply theme-secondary": {},
    },
    ".card-success": {
        "@apply theme-success": {},
    },
    ".card-danger": {
        "@apply theme-danger": {},
    },
    ".card-info": {
        "@apply theme-info": {},
    },
    ".card-warning": {
        "@apply theme-warning": {},
    },
    ".downcard": {
        "@apply p-4 rounded-md shadow-inner overflow-auto": {},
    },
};