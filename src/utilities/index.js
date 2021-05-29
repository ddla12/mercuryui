/**
 *
 *  EN:
 *       Utilities submodule:
 *          When you create a utility sub-submodule you must add it here.
 *          The property name must be the same as the file.
 *  ES:
 *      Módulo de utilidades:
 *          Cuando crea un submódulo de utilidad, debe agregarlo aquí.
 *          El nombre de la propiedad debe ser el mismo que el del
 *          archivo.
 *
 */
module.exports = {
    typography: {
        submodule: require("./dist/typography"),
        variants: ["responsive", "disabled", "focus", "hover"],
    },
    misc: {
        submodule: require("./dist/misc"),
        variants: [],
    },
    size: {
        submodule: require("./dist/size"),
        variants: ["responsive", "focus", "hover"],
    },
    table: {
        submodule: require("./dist/table"),
        variants: [],
    },
    theme: {
        submodule: require("./dist/theme"),
        variants: [],
    },
    effects: {
        submodule: require("./dist/effects"),
        variants: ["responsive", "focus", "hover"],
    },
    shortcuts: {
        submodule: require("./dist/shortcuts"),
        variants: ["responsive"],
    },
    inherit: {
        submodule: require("./dist/inherit"),
        variants: [],
    },
    hover: {
        submodule: require("./dist/hover"),
        variants: [],
    },
};
