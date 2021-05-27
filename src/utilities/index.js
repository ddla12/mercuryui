/**
 * 
 *  EN:
 *       Utilities module:
 *          When you create a utility sub-module you must add it here. 
 *          The property name must be the same as the file.
 *  ES:
 *      Módulo de utilidades:
 *          Cuando crea un submódulo de utilidad, debe agregarlo aquí. 
 *          El nombre de la propiedad debe ser el mismo que el del 
 *          archivo.
 * 
 */
module.exports = {
    typography: require("./dist/typography"),
    misc: require("./dist/misc"),
    size: require("./dist/size"),
    table: require("./dist/table"),
    theme: require("./dist/theme"),
    effects: require("./dist/effects"),
    shortcuts: require("./dist/shortcuts")
};
