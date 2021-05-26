module.exports = {
    ".form-default": {
        "@apply p-3 block": {},
    },
    ".form-control": {
        "@apply w-full p-2": {},
    },
    ".label": {
        "@apply block text-sm font-bold text-gray-900 p-2": {},
    },
    ".input": {
        "@apply w-full p-4 py-2": {},
    },
    ".input-default": {
        "@apply transition duration-500 ease-in-out rounded-xl border-3 outline-none focus:ring focus:outline-none font-bold shadow-lg placeholder-opacity-75":
            {},
    },
    ".input .textarea": {
        "@apply resize-none": {},
    },
    /**
     *  Checkbox input
     */
    ".checkbox": {
        "@apply flex flex-row w-full gap-x-4": {},
    },
    ".checkbox > .body": {
        "@apply border-2 lg:w-8 lg:h-8 w-6 h-6 transition duration-200 ease-in-out text-white relative":
            {},
    },
    ".checkbox > .label": {
        "@apply text-sm font-extrabold": {},
    },
    ".checkbox svg": {
        "@apply z-10 h-5 w-5 lg:h-7 lg:w-7  hidden": {},
    },
    ".checkbox > input[type = 'checkbox']": {
        "@apply absolute lg:w-8 lg:h-8 w-6 h-6 opacity-0 cursor-pointer": {},
    },
    ".checkbox > .body > input[type='checkbox']:checked + svg, input[type = 'radio']:checked + svg":
        {
            "@apply block": {},
        },
    ".color-name": {
        "@apply text-lg font-semibold my-auto": {},
    },
    /**
     *  Toggle component
     */
    ".toggle": {
        "@apply flex items-center justify-center w-full": {},
    },
    ".toggle > .body": {
        "@apply block relative border-2 bg-gray-200 w-14 h-8 rounded-full": {},
    },
    ".toggle > .label": {
        "@apply ml-3 text-gray-700 font-bold": {},
    },
    ".toggle > .body > input[type = 'checkbox']": {
        "@apply absolute opacity-0 z-10 w-14 h-8 cursor-pointer": {},
    },
    ".dot": {
        "@apply absolute top-0.5 left-1 w-6 h-6 rounded-full transition duration-150 ease-out":
            {},
    },
    "input[type = 'checkbox']:checked + .dot": {
        "@apply filter brightness-150": {},
        "transform": "translateX(85%)",
    },
    /**
     *  Radio component
     */
    ".radio": {
        "@apply flex flex-row gap-x-2": {},
    },
    ".radio > .body": {
        "@apply w-6 h-6 relative rounded-lg border-2 shadow-md": {},
    },
    "input[type = 'radio']": {
        "@apply w-6 h-6 opacity-0 absolute cursor-pointer": {},
    },
    "input[type = 'radio'] + svg": {
        "@apply absolute w-5 h-5 hidden transition duration-200 ease-in-out":
            {},
    },
    ".radio > .label": {
        "@apply text-base select-none": {},
    },
    /**
     *  Color onput
     */
    "input[type = 'color'].color-input": {
        "@apply cursor-pointer appearance-none opacity-0 absolute": {},
    },
};
