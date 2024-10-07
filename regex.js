let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."

//1
console.log(numberLength2Or3(text));
//2
console.log(startsWithEven(text));
//3
console.log(startsWithNumber(text));
//4
console.log(capitalized(text));
//5
console.log(capitalizedLengthMin3(text));
//6
console.log(startsWithVowel(text));



function numberLength2Or3(text){
    let regex = /\b[0-9]{2,3}\b/g;
    let result = text.match(regex)
    return result;
}

function startsWithEven(text){
    let regex = /\b[2|4|6|8]\d*/g;
    let result = text.match(regex)
    return result;
}

function startsWithNumber(text){
    let regex = /\b\d+[a-z]\w*\b/g;
    let result = text.match(regex);
    return result
}

function capitalized(text){
    let regex = /\b[A-Z]*\w\b/g;
    let result = text.match(regex);
    return result
}

function capitalizedLengthMin3(text){
    let regex = /\b[A-Z][a-zA-Z]*\w/g;
    let result = text.match(regex);
    return result
}

function startsWithVowel(text){
    let regex = /\b[aeuioAEUIO]\w*/g;
    let result = text.match(regex);
    return result
}