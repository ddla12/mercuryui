module.exports = {
    "form": {
        "@apply p-3 block": {},
    },
    ".form-control": {
        "@apply w-full p-2": {},
    },
    ".label": {
        "@apply block text-sm font-bold text-gray-900 p-2": {},
    },
    ".input": {
        "@apply transition duration-500 ease-in-out w-full p-4 py-2 rounded-xl border-3 outline-none focus:ring-3 focus:outline-none font-bold shadow-lg": {},
    },
    "textarea": {
        "@apply resize-none": {},
    },
    ".checkbox-div": {
        "@apply rounded-full border-2 w-6 h-6 transition duration-200 ease-in-out text-white relative": {},
    },
    ".checkbox": {
        "@apply flex flex-row w-full gap-x-4": {},
    },
    ".checkbox .label": {
        "@apply text-sm font-extrabold": {},
    },
    ".checkbox svg": {
        "@apply z-10 h-5 w-5 hidden": {},
    },
    ".checkbox-input": {
        "@apply absolute w-6 h-6 opacity-0 cursor-pointer": {},
    },
    ".color-name": {
        "@apply text-lg font-semibold my-auto": {},
    },
    ".input-color": {
        "@apply flex flex-col gap-y-3 bg-gray-300 shadow-lg rounded-lg p-2": {},
    },
    ".input-color .label": {
        "@apply bg-gray-100 py-1 px-3 rounded-lg text-lg font-semibold text-black": {},
    },
    ".input-color .body":  {
        "@apply bg-gray-200 rounded-lg flex flex-row p-4 gap-x-2": {},
    },
    ".input-color .body .color": {
        "@apply w-12 h-12 rounded-full relative": {},
    },
    ".input-color .body .color input[type = 'color']": {
        "@apply cursor-pointer appearance-none opacity-0 absolute w-12 h-12": {},
    },
    ".checkbox .body input[type='checkbox']:checked + svg, input[type = 'radio']:checked + svg": {
        "@apply block": {},
    },
    ".toggle label .body": {
        "@apply relative": {},
    },
    ".toggle": {
        "@apply flex items-center justify-center w-full": {},
    },
    ".toggle label": {
        "@apply flex items-center cursor-pointer": {},
    },
    ".toggle label .label": {
        "@apply ml-3 text-gray-700 font-bold": {},
    },
    ".toggle-bg": {
        "@apply block relative border-2 bg-gray-200 w-14 h-8 rounded-full": {},
    },
    ".dot": {
        "@apply absolute top-1 left-1 w-6 h-6 rounded-full transition duration-150 ease-out": {},
    },
    ".radio": {
        "@apply flex flex-row gap-x-2": {},
    },
    ".radio .body": {
        "@apply w-6 h-6 relative rounded-lg border-2 shadow-md": {},
    },
    "input[type = 'radio']": {
        "@apply w-6 h-6 opacity-0 absolute cursor-pointer": {},
    },
    "input[type = 'radio'] + svg": {
        "@apply absolute w-5 h-5 hidden transition duration-200 ease-in-out": {},
    },
    ".radio .label": {
        "@apply text-base text-gray-800 font-bold select-none": {},
    },
};