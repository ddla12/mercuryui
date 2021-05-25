module.exports = {
    ".phone": {
        "@apply rounded-3xl border-8 f-col w-68 h-100 relative": {},
    },
    ".phone .headbar": {
        "@apply absolute w-full top-0 f-row justify-center -mt-2": {},
    },
    ".phone .headbar .body": {
        "@apply rounded-xl w-28 h-6 f-row gap-x-2 justify-center items-center":
            {},
    },
    "#camera": {
        "@apply h-2 w-2 rounded-full": {},
    },
    ".window-sm": {
        "@apply h-36 w-64": {},
    },
    ".window-md": {
        "@apply h-54 w-96": {},
    },
    ".window-lg": {
        "@apply h-72 w-128": {},
    },
    ".window": {
        "@apply rounded-lg overflow-hidden flex f-col": {},
    },
    ".titlebar": {
        "@apply h-12/1 w-full f-row justify-between items-center text-lg px-3":
            {},
    },
    ".titlebar div:last-child": {
        "@apply f-row gap-x-2 px-1 items-center": {},
    },
    ".window .body": {
        "@apply h-88/1 w-full": {},
    },
};
