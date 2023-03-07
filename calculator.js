var operator = document.getElementById('result');
var inputFeild = document.querySelector('.input-2');


function number(digit) {
    // alert(digit);
    // var x= document.getElementById('result').value;
    // document.getElementById('result').value= x+digit;

    // if (operator.value == '0') {
    //     operator.value = digit;

    // }
    // else {
    //     operator.value += digit;
    // }

    
    if (inputFeild.value == '0') {
        inputFeild.value = digit;

    }
    else {
        inputFeild.value += digit;
    }

}


function clearResult() {
    document.getElementById('result').value = '0';
    inputFeild.value = '0';
}



function delet() {
    // alert('hi');

    // del = operator.value

    // if (del.length != 1) {

    //     operator.value = del.slice(0, -1);
    // }
    // else {
    //     operator.value = '0';
    // }

    del = inputFeild.value

    if (del.length != 1) {

        inputFeild.value = del.slice(0, -1);
    }
    else {
        inputFeild.value = '0';
    }

}

function sum() {

    solve = inputFeild.value;
    // operator.value = eval(solve);
    // inputFeild.value = solve + ' =';

    inputFeild.value = eval(solve);
    operator.value = solve + '=';

    // let his = document.getElementById('history');
    // his.innerHTML=sovle+'='+ solve +'<br>';
    // console.log(his);
}

function cal_history() {
    let his = document.getElementById('history');
    his.innerHTML += inputFeild.value + '<br>' + solve + '=' + '<br>';


}

// function CalHis() {
//     // alert('hii')
//     document.getElementById('history1 history').value = '0';

// }




