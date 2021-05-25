module.exports = {
    ".card, .themed-card": {
        "@apply p-4 rounded-md shadow-md": {},
    },
    ".card-border": {
        "@apply border-2": {},
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
    ".themed-card > .body > .title": {
        "@apply pl-3 w-full": {},
    },
    ".themed-card > .body > .footer": {
        "@apply px-3 py-1": {}, 
    },
    ".image-card": {
        "@apply rounded-md shadow-md overflow-hidden size-full gap-3": {},
    },
    ".image-card .horizontal": {
        "@apply f-row": {},
    },
    ".image-card .vertical": {
        "@apply f-col": {},
    },
    ".image-card > .image": {
        "@apply flex justify-center": {},
    },
    ".image-card > .horizontal > .body, .image-card > .horizontal > .image": {
        "@apply w-1/2": {},
    },
    ".image-card > .body": {
        "@apply f-col gap-y-0.5 p-2 max-h-full place-content-center": {},
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
};