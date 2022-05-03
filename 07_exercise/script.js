
const reverseNumbers = (numb) =>{
    let convertNumberToString = numb.toString();
    let splitStringNumber = convertNumberToString.split("");
    let reverseSplittedNumbers = splitStringNumber.reverse();
    let joinStringNumbers = reverseSplittedNumbers.join("");
    let convertStringToNumber = parseFloat(joinStringNumbers);
    let addMathSign = convertStringToNumber * Math.sign(numb);

    return addMathSign;
}

console.log(reverseNumbers(-100000000)); // -1

