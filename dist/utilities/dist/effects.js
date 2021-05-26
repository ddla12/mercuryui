module.exports = {
    ".ghost": {
        "@apply transition duration-150 ease-in-out": {},
    },
    ".ghost-outline": {
        "@apply ghost border-2 bg-opacity-0 hover:bg-opacity-100": {},
    },
    ".pill": {
        "@apply text-sm px-3 shadow-sm rounded-full": {},
    },
    ".image-fill": {
        "@apply object-fill size-full": {},
    },
    ".image-center": {
        "@apply object-none object-center": {},
    },
    ".flippable-icon": {
        "@apply h-6 w-6 transform duration-150 ease-in-out": {},
    },
    ".disabled": {
        "@apply filter brightness-75": {},
    },
    ".clickeable": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-110 focus:outline-none cursor-pointer":
            {},
    },
    ".loading": {
        "@apply animate-pulse p-2 mx-auto my-auto cursor-wait": {},
    },
};