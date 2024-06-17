//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number (n or N followed by 8 digits).
 * Returns true if input validates, otherwise returns false.
 * @param {string} idIn
 */

function checkHumbrId(idIn) {
    "use strict";

   return /^[nN]\d{8}$/.test(idIn);
}

console.log(checkHumbrId("n901652955"));
console.log(checkHumbrId("g01652955"));
console.log(checkHumbrId("N01652955"));