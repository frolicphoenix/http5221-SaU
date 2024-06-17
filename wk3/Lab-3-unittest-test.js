//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========

function test__checkHumbrId(valueIn, expected) {
    "use strict";

    let result = checkHumbrId(valueIn);
    let msg = "";
    let passM = "<span style='color: green'> == PASSED == </span>";   
    let failM = "<span style='color: red;'> == FAILED == </span>";

    if(expected == result) {
        msg = "Value tested: " + valueIn + " Expected result: " + result + passM + "<br />";
    } else {
        msg = "Value tested: " + valueIn + " Expected result: " + result + failM + "<br />";
    }

    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;
}

test__checkHumbrId("n01652955", true);
test__checkHumbrId("N01652955", true);
test__checkHumbrId("N0165297755", false);
test__checkHumbrId("01652955", false);
test__checkHumbrId("G01652955", false);
test__checkHumbrId("N45", true);


