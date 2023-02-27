var operator = document.getElementById('result');
var inputFeild = document.querySelector('.input-2');


function number(digit) {
    // alert(digit);
    // var x= document.getElementById('result').value;
    // document.getElementById('result').value= x+ digit;

    if (operator.value == '0') {
        operator.value = digit;
 
    }
    else {
        operator.value += digit;
    }

}


function clearResult() {
    document.getElementById('result').value = '0';
    inputFeild.value = '0';
}



function delet() {
    // alert('hi');

    del = operator.value;
    if (del.value != '0') {

        operator.value = del.slice(0, -1);
    }
    else {
        operator.value = '0'
    }

}

function sum() {

    solve = operator.value;
    operator.value = eval(solve);
    inputFeild.value = solve + ' =';
}



