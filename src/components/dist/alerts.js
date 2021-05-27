/**
 * 
 *  EN:
 *      Alert sub-module
 *  ES:
 *      Submódulo de alertas
 */
module.exports = {
    ".alert": {
        "@apply p-4 f-row justify-between w-full": {},
    },
    ".alert.alert-default": {
        "@apply rounded-md shadow-md font-semibold": {},
    },
    ".alert.alert-plain": {
        "@apply shadow-sm font-semibold": {},
    },
    ".alert > .body": {
        "@apply f-row w-1/2 items-center justify-start": {},
    },
    ".alert > .footer": {
        "@apply flex justify-end items-center": {},
    },
    "span.close": {
        "@apply text-xl font-extrabold": {},
    },
};
