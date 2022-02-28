/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calcTwoNumbers(n1, n2) {
    let sum = n1 + n2
    if (n1 == n2) {
        let triple = 3 * sum
        console.log(triple)
        return triple
    } else {
        console.log(sum)
        return sum
    }
}

calcTwoNumbers(2, 3)
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkNumber(n1, n2) {
    let sum = n1 + n2
    if (n1 == 50 || n2 == 50 || sum == 50) {
        return true
    } else {
        return false
    }
}

checkNumber(30, 20)
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/


function removeString(str, p) {

    let newString = str.split('')

    newString.splice(p, 1)
    newString = newString.join('')
    console.log(newString)
}

removeString("Hi Strive!", 4)

/*

4)
 Create a function to find the largest of three given integers.
*/

function largestOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
        console.log(largest)
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
        console.log(largest)
    }
    else {
        largest = num3;
        console.log(largest)
    }
}

largestOfThree(5, 6, 8)

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function range(n1, n2) {

    if (n1 > 40 & n1 < 60 || n1 > 70 & n1 <= 100) {
        console.log(n1)
    } else if (n2 > 40 & n2 < 60 || n2 > 70 & n2 <= 100) {
        console.log(n2)
    }
}

range(100, 32)
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

function copyString(s, n) {
    let copy = s.repeat(n)
    console.log(copy)
}

copyString("Hi Strive!", 3)
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function startW(string) {
    if (string.startsWith("Los") || string.startsWith("New")) {
        console.log(string)
    } else {
        console.log("")
    }
}

startW("New York")
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function calcArr(arr) {
    let total = 0
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total)
}

calcArr([1, 2, 3])
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function testArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 1 || arr[i] == 3) {
            console.log(arr[i])
        }
    }
}

testArray([1, 0])
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

function testArrayNot(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] !== 1 || arr[i] !== 3) {
            console.log("Does not contain 1 or 3")
        }
    }
}

testArrayNot([1, 3])

/*
11)

Create a function to find the longest string from a given array of strings.*/

function longestArr(arr) {
    let lgth = 0;
    let longest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            let lgth = arr[i].length;
            longest = arr[i];
        }
    }
    console.log(longest)
}

longestArr([
    'first item',
    'second item here',
    'third super long item'
])


/*12) 

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

function angleType(degress) {
    if (degress > 0 & degress < 90) {
        console.log("Acute Angle")
    } else if (degress == 90) {
        console.log("Right Angle")
    } else if (degress > 90 & degress < 180) {
        console.log("Btuse Angle")
    } else if (degress == 180) {
        console.log("Straight Angle")
    }
}

angleType(90)
/*
13)

Create a function to find the index of the greatest element of a given array of integers*/


function indexArr(arr) {
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    console.log(maxIndex)
}

indexArr([6, 20, 8, 9, 55])
/*14)

Create a function to get the largest even number from an array of integers.*/

function evenLargest(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest && arr[i] % 2 == 0) {
            let largest = arr[i]
            console.log("Largest even number:", largest)
        }
    }
}

evenLargest([5, 25, 78, 91, 107])

/*16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/