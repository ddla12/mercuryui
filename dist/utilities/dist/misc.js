module.exports = {
    ".f-col": {
        "@apply flex flex-col": {},
    },
    ".f-row": {
        "@apply flex flex-row": {},
    },
    ".clickeable": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-110 focus:outline-none cursor-pointer": {},
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
    ".z-100": {
        "z-index": "100",
    },
    ".-ml-18": {
        "margin-left": "-4.4rem",
    },
    ".-mr-18": {
        "margin-right": "-4.5rem",
    },
    ".-mb-18": {
        "margin-bottom": "-4.5rem",
    },
    ".-translate-y-9": {
        "--tw-translate-y": "-2.15rem",
    },
}