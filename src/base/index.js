/**
 * 
 *  EN:
 *       Base styles module:
 *          Here are the properties that affect the default style of TailwindCSS, 
 *          be very careful what you add here.
 *  ES:
 *      Módulo de estilos base:
 *          Aqui van las propiedades que afectan el estilo por defecto de TailwindCSS, 
 *          ten mucho cuidado con lo que agregas aqui.
 * 
 */
module.exports = {
    "*:disabled": {
        "@apply transition-none transform-none cursor-not-allowed": {},
    },
}