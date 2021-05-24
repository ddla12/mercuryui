module.exports =  {
    ".modal-dialog": {
        "@apply z-20 fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50": {},
    },
    ".modal": {
        "@apply z-30": {},
    },
    ".slider": {
        "@apply relative size-full": {},
    },
    ".slider-item": {
        "@apply size-full flex-none overflow-hidden select-none": {},
    },
    ".slider-item img": {
        "@apply size-full": {},
    },
    ".tabs-control": {
        "@apply -mb-2 h-14 max-w-full overflow-x-auto f-row gap-x-2 pt-1": {},
    },
    ".tab-btn": {
        "@apply z-0 flex-none f-col align-middle text-center px-3 py-2 rounded-lg shadow-lg cursor-pointer": {},
    },
    ".tabs-content": {
        "@apply p-6 z-20 relative font-semibold text-justify rounded-bl-lg rounded-br-lg shadow-lg max-h-96 overflow-y-auto": {},
    },
    ".dropdown": {
        "@apply f-row items-center justify-between px-3 font-semibold rounded-lg shadow-lg clickeable": {},
    },
    ".dropdown-icon": {
        "@apply h-6 w-6 transform duration-150 ease-in-out": {},
    },
    ".dropdown-list": {
        "@apply absolute inset-x-0 shadow-lg p-4 rounded-md text-black f-col": {},
    },
    ".dropdown-list ul": {
        "@apply list-none f-col gap-y-1": {},
    },
    ".dropdown-item": {
        "@apply p-1 text-lg font-bold cursor-pointer select-none": {},
    },
    ".slide-images": {
        "@apply f-row inset-0 size-full absolute overflow-hidden z-0": {},
    },
    ".slide-control": {
        "@apply absolute inset-y-0 h-full w-12 bg-opacity-25 z-10 f-col items-center": {},
    },
    ".slide-button": {
        "@apply my-auto h-8 w-8 rounded-full p-1 clickeable": {},
    },
    ".slide-chevron": {
        "@apply h-6 w-6 cursor-pointer": {},
    },
    ".list": {
        "@apply size-full list-none border-2 rounded-lg": {},
    },
    ".list li": {
        "@apply list-item border-b-2 last:border-0 p-2": {},
    },
    ".collapse": {
        "@apply border-2 rounded-lg relative": {},
    },
    ".collapse .content": {
       "@apply relative overflow-hidden transition-all max-h-0 duration-300": {},
    },
    ".collapse .title": {
        "@apply w-full p-4 text-left cursor-pointer flex items-center justify-between": {},
    },
}