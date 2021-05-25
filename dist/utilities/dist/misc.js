module.exports = {
    ".f-col": {
        "@apply flex flex-col": {},
    },
    ".f-row": {
        "@apply flex flex-row": {},
    },
    ".-f-col": {
        "@apply flex flex-col-reverse": {},
    },
    ".-f-row": {
        "@apply flex flex-row-reverse": {},
    },
    ".clickeable": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-110 focus:outline-none cursor-pointer":
            {},
    },
    ".has-tooltip": {
        "@apply inline-flex cursor-default relative": {},
    },
    ".has-popover": {
        "@apply relative inline-flex": {},
    },
    ".has-tooltip:hover .tooltip": {
        "@apply opacity-100": {},
    },
    ".-z-10": {
        "z-index": "-10",
    },
    ".-z-20": {
        "z-index": "-20",
    },
    ".-z-30": {
        "z-index": "-30",
    },
    ".-z-40": {
        "z-index": "-40",
    },
    ".-z-50": {
        "z-index": "-50",
    },
    ".-z-60": {
        "z-index": "-60",
    },
    ".-z-70": {
        "z-index": "-70",
    },
    ".-z-80": {
        "z-index": "-80",
    },
    ".-z-90": {
        "z-index": "-90",
    },
    ".-z-100": {
        "z-index": "-100",
    },
    ".z-60": {
        "z-index": "60",
    },
    ".z-70": {
        "z-index": "70",
    },
    ".z-80": {
        "z-index": "80",
    },
    ".z-90": {
        "z-index": "90",
    },
    ".z-100": {
        "z-index": "100",
    },
    ".-translate-y-9": {
        "--tw-translate-y": "-2.15rem",
    },
    ".ghost": {
        "@apply transition-colors duration-150 ease-in-out": {},
    },
    ".ghost-outline": {
        "@apply ghost border-2 hover:border-0": {},
    },
    ".pill": {
        "@apply text-sm px-3 shadow-sm rounded-full": {},
    },
    "image-fill": {
        "@apply object-fill size-full": {},
    },
    "image-center": {
        "@apply object-none object-center": {},
    },
    ".flippable-icon": {
        "@apply h-6 w-6 transform duration-150 ease-in-out": {},
    },
    ".border-3": {
        "border-width": "3px",
    }
};
