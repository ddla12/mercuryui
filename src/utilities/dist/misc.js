/**
 *  These utilities are necessary for the operation of the plugin
 *  Estas utilidades son necesarias para el funcionamiento del plugin
 */
module.exports = {
    ".has-tooltip, .has-popover": {
        "@apply relative f-col items-center group": {},
    },
    //#region Z-index utilities
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
    //#endregion
    //#region Extra utilities
    ".-translate-y-9": {
        "--tw-translate-y": "-2.15rem",
    },
    ".border-3": {
        "border-width": "3px",
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
    ".ghost": {
        "@apply transition duration-150 ease-in-out": {},
    },
    ".ghost-outline": {
        "@apply ghost border-2 bg-opacity-0 hover:bg-opacity-100": {},
    },
    ".pill": {
        "@apply px-4 rounded-full": {},
    },
    ".disabled": {
        "@apply filter brightness-75": {},
    },
    ".clickeable": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-110 focus:outline-none cursor-pointer":
            {},
    },
    ".clickeable-shrink": {
        "@apply filter active:brightness-90 transition-transform transform active:scale-90 focus:outline-none cursor-pointer":
            {},
    },
    ".image-fill": {
        "@apply object-fill size-full": {},
    },
    ".flippable-icon": {
        "@apply square-6 transition-transform transform duration-150 ease-in-out": {},
    },
    ".loading": {
        "@apply animate-pulse p-2 middle-center cursor-wait": {},
    },
    ".copyable": {
        "@apply clickeable select-all": {},
    },
    ".flip-y": {
        transform: 'scaleY(-1)',
    },
    ".flip-x": {
        transform: 'scaleX(-1)',
    },
    //#endregion
    //#region Gradients animations
    ".animate-gradient-x": {
        animation: "gradient-x 10s ease-in-out infinite",
    },
    ".animate-gradient-y": {
        animation: "gradient-y 10s ease-in-out infinite",
    },
    ".animate-gradient-xy": {
        animation: "gradient-xy 10s ease-in-out infinite",
    },
    "@keyframes gradient-y": {
        "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
        },
        "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
        }
    },
    
    "@keyframes gradient-x": {
        "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
        },
        "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
        }
    },
    "@keyframes gradient-xy": {
        "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left top",
        },
        "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
        }
    },
    //#endregion
};
