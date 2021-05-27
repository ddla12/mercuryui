/**
 * 
 *  EN:
 *      Table sub-module:
 *          Table utilities only
 *  ES:
 *      Sub-módulo de tablas:
 *          Sólo utilidades para tablas
 */
module.exports = {
    ".table-default": {
        "@apply relative table-auto w-full": {},
    },
    ".table-responsive": {
        "@apply flex-grow min-w-full px-2 overflow-auto": {},
    },
    ".tbody": {
        "@apply table-row-group align-middle": {},
    },
    ".td": {
        "@apply whitespace-nowrap": {},
    },
    ".th": {
        "@apply top-0 whitespace-nowrap": {},
    },
    ".thead": {
        "@apply table-header-group align-middle": {},
    },
};
