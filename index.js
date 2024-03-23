//page 57 ex4
const products = [
    "Apple iPhone 15 ProMax", //0 swap = Apple iPhone 15 ProMax; arr[0] = arr[8] , arr[8] = swap
    "Samsung Galaxy S21 Ultra", //1
    "Google Pixel 6 Pro", //2
    "Amazon Echo Dot (4th Gen)", //3
    "Sony WH-1000XM4 Wireless Headphones", //4
    "Apple AirPods Pro", //5
    "Samsung Galaxy Tab S7+", //6
    "Microsoft Surface Pro 7", //7
    "Dell XPS 15", //8
    "Logitech MX Master 3", //9
    "Razer DeathAdder V2", //10
    "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 3200MHz", //11
    "Samsung 970 EVO Plus SSD 1TB",
    "Samsung By Harel - order Frame",
    "Samsung By Carfurre",//12
    "Crucial P1 1TB NVMe PCIe M.2 SSD",//13
    "Western Digital My Passport 2TB Portable External Hard Drive",//14
    "Samsung Galaxy Z Fold3 5G"//15
];

function swapArray(arr) {
    if (arr.length % 2 !== 0) return "Non Valid array" + arr.length
    var halfSizeArray = arr.length / 2;
    for (let index = 0; index < halfSizeArray; index++) {
        console.log(`Swap between index: ${index} And index: ${index + halfSizeArray} 
        => swap between values: ${arr[index]} And ${arr[index + halfSizeArray]}`)
        var swap = arr[index]
        arr[index] = arr[index + halfSizeArray]
        arr[index + halfSizeArray] = swap
    }
    return arr;
}
console.log(swapArray(products))

//page 57 ex5 
var numbers = [2, 3, 4, 5, 23, 43, 54, 9, 10, 11 , 12, 13, 14]
console.log(numbers)
function moveEvensToRight(numbers){
    var odd = [];
    var even = [];
    for (let index = 0; index < numbers.length; index++) {
             if(numbers[index] % 2 === 0){
                even.push(numbers[index])
            } else{
                odd.push(numbers[index])
            }  
    }
    return odd.concat(even)
}
console.log(moveEvensToRight(numbers))

//HomeWork exercises 
//page57 ex6
function reverseAlternate(data) {
    var start = 0;
    var end = data.length - 1;
    for (; start < end; start++, end--) {
        var temp = data[start];
        data[start] = data[end];
        data[end] = temp;
    }
    return data;
}
var dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log("Original array:", dataArray);
var reversedArray = reverseAlternate(dataArray.slice());
console.log("Reversed array:", reversedArray);

//page57 ex7
function countCharacters(input) {
    var digitCount = 0;
    var letterCount = 0;
    var otherCount = 0;
    for (var i = 0; i < input.length; i++) {
        if (typeof input[i] === "number") {
            digitCount++;
        } else if (typeof input[i] === "string" && input[i].length === 1 && input[i].match(/[a-z]/i)) {
            letterCount++;
        } else {
            otherCount++;
        }
    }
    console.log("Number of digits:", digitCount);
    console.log("Number of letters:", letterCount);
    console.log("Number of other characters:", otherCount);
}
var input = [true, true, 1, 2, 3, 4, "s", "a", "!", "dkjhfd", () => {}, "aaaaa", 9375, {}, [], {}];
countCharacters(input);

//page57 ex8
function isPolynomial(array) {
    if (array.length !== 10) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return false;
        }
    }
    if (array[9] === 0) {
        return false;
    }
    return true;
}

var polynomial1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var polynomial2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var polynomial3 = [1, 2, 3, 4, "a", 6, 7, 8, 9, 10];

console.log("Is polynomial 1:", isPolynomial(polynomial1));
console.log("Is polynomial 2:", isPolynomial(polynomial2));
console.log("Is polynomial 3:", isPolynomial(polynomial3));
