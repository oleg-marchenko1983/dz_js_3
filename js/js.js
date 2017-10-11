
/* First Task*/

var arr =[];

var el = document.querySelector('#new');

function arrView (){

// var index = +document.querySelector('#index');

// var value = +document.querySelector('#value');

// var array = ['one', 'two', 'three', 'four', 'five']; 
 
  
   el.innerHTML = arr;

    }
var button = document.querySelector('button');

button.addEventListener("click", arrView);


/* next task submit*/

// var arr = [];

var submitButton = document.querySelector('#submitButton');

submitButton.addEventListener("click", submitForm);

function submitForm (){

var index = document.querySelector('#index');

var value = document.querySelector('#value');

var ReadyIndex = parseInt(index.value);

arr[ReadyIndex] = value.value;

el.innerHTML = arr;

// alert(arr);

}

/*next task pop*/



var popButton = document.querySelector('#popButton');

popButton.addEventListener("click", popAray);

function popAray (){

arr.pop();

el.innerHTML = arr;

// alert(arr);

}

/* next task push*/

var pushButton = document.querySelector('#pushButton');

pushButton.addEventListener("click", pushAray);

function pushAray (){

arr.push(value.value);

el.innerHTML = arr;

// alert(arr);

}

/* next task shift */ 


var shiftButton = document.querySelector('#shiftButton');

shiftButton.addEventListener("click", shiftAray);

function shiftAray (){

arr.shift();

el.innerHTML = arr;

// alert(arr);

}

/* next task unshift */

var unshiftButton = document.querySelector('#unshiftButton');

unshiftButton.addEventListener("click", unshiftAray);

function unshiftAray (){

arr.unshift(value.value);

el.innerHTML = arr;

// alert(arr);

}