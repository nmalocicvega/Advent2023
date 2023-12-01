const input = require('./input3.js');


function parseInput(values) {
    return values.split('\n');
}

function calculateSolution(values) {
    return parseInput(values).map(convertWordToNumber).map(getNumbers).reduce( (sum, current) => sum+current, 0);
}

function getNumbers(value) {
    let first = undefined;
    let last = undefined;
    for (let i =0; i < value.length;i++) {
        if (/\d/.test(value.charAt(i))) {
            if(!first) {
                first = value.charAt(i);
            }
            last = value.charAt(i);
        }
    }
    return parseInt(first+last);
}

const convertWordToNumber = (input) => {
    for(const [key, value] of Object.entries(numberMap)) {
        input = input.replace(key, value);
    }
    return input;
}

const numberMap = {
    "one": "o1ne",
    "two": "t2wo",
    "three": "t3hree",
    "four": "f4our",
    "five": "f5ive",
    "six": "s6ix",
    "seven": "s7even",
    "eight": "e8ight",
    "nine": "n9ine",
}
console.log(calculateSolution(input));