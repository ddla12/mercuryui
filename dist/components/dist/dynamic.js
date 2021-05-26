module.exports = {
    /**
     * Modal
     */
    ".modal-dialog": {
        "@apply z-20 fixed top-0 left-0 flex items-center justify-center size-screen bg-black bg-opacity-50":
            {},
    },
    ".modal": {
        "@apply z-30": {},
    },
    /**
     *  Tabs
     */
    ".tabs-control": {
        "@apply -mb-2 h-14 max-w-full overflow-x-auto f-row gap-x-2 pt-1": {},
    },
    ".tab-btn": {
        "@apply z-0 flex-none f-col align-middle text-center px-3 py-2 rounded-lg shadow-lg cursor-pointer":
            {},
    },
    ".tabs-content": {
        "@apply p-6 z-20 relative font-semibold text-justify rounded-bl-lg rounded-br-lg shadow-lg max-h-96 overflow-y-auto":
            {},
    },
    /**
     *  Dropdown
     */
    ".dropdown": {
        "@apply relative f-row items-center justify-between px-3 font-semibold rounded-lg shadow-lg clickeable":
            {},
    },
    ".dropdown-list": {
        "@apply absolute inset-x-0 shadow-lg p-4 rounded-md text-black f-col":
            {},
    },
    ".dropdown-list-top": {
        "@apply dropdown-list top-12":
            {},
    },
    ".dropdown-list-bottom": {
        "@apply dropdown-list bottom-12":
            {},
    },
    ".dropdown-list > ul": {
        "@apply list-none f-col gap-y-1": {},
    },
    ".dropdown-item": {
        "@apply p-1 text-lg font-bold cursor-pointer select-none": {},
    },
    /**
     *  List
     */
    ".list": {
        "@apply size-full list-none": {},
    },
    ".list.list-default": {
        "@apply border-2 rounded-lg": {},
    },
    ".list li": {
        "@apply list-item": {},
    },
    ".list > li.li-default": {
        "@apply border-b-2 last:border-0 p-2": {},
    },
    /**
     *  Colapse component
     */
    ".collapse": {
        "@apply border-2 rounded-lg relative": {},
    },
    ".collapse > .body": {
        "@apply relative overflow-hidden transition-all max-h-0 duration-300":
            {},
    },
    ".collapse > .head": {
        "@apply w-full p-4 text-left cursor-pointer flex items-center justify-between":
            {},
    },
    /**
     *  Slider component
     */
    ".slider": {
        "@apply relative size-full": {},
    },
    ".slider-item": {
        "@apply size-full flex-none overflow-hidden select-none": {},
    },
    ".slider-item img": {
        "@apply size-full": {},
    },
    ".slider-images": {
        "@apply f-row inset-0 size-full absolute overflow-hidden z-0": {},
    },
    ".slider-control": {
        "@apply absolute inset-y-0 h-full w-12 bg-opacity-25 z-10 f-col items-center":
            {},
    },
    ".slider-control-left": {
        "@apply slider-control left-0": {},
    },
    ".slider-control-right": {
        "@apply slider-control right-0": {},
    },
    ".slide-button": {
        "@apply my-auto h-8 w-8 rounded-full p-1 clickeable": {},
    },
    ".slide-button > svg": {
        "@apply h-6 w-6 cursor-pointer": {},
    },
};
