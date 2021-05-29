/**
 * 
 *  EN:
 *       Components module:
 *          When you create a component sub-module you must add it here. 
 *          The property name must be the same as the file.
 *  ES:
 *      Módulo de componentes:
 *          Cuando crea un submódulo de componentes, debe agregarlo aquí. 
 *          El nombre de la propiedad debe ser el mismo que el del 
 *          archivo.
 * 
 */
module.exports = {
    alerts: require("./dist/alerts"),
    buttons: require("./dist/buttons"),
    cards: require("./dist/cards"),
    dynamic: require("./dist/dynamic"),
    inputs: require("./dist/inputs"),
    mockups: require("./dist/mockups"),
    tooltip: require("./dist/tooltip"),
};
