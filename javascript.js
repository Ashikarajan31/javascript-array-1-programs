//array rotation
function rotatearray(arr, rotateBy) {
    const n = arr.length;
    rotateBy %= n;
 
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [1, 2, 3, 4, 5];
const rotatedarray = rotatearray(originalArray, 2);
console.log(rotatedarray);

//Insert element at the specific position

function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;
arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();

//removing array item by index
let indexForRemoval = 3;
let numArray = [1,4,9,16,25];
numArray.splice(indexForRemoval,1);
console.log("Array Elements After Removing Element At Index: " + indexForRemoval + " is " + numArray);


//finding the longest string in an array
let arr = [
    "I am a fullstack developer",
    "I am learning java",
    "I am learning html"
];
function longestString() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());


//Array spreading
const arr1=[1,2,3,4];
const arr2=[5,6,7,8,];
const combine=[...arr1,...arr2];
console.log(combine);