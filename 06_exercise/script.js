let numbers = [2, 4, 5, 1, 3]
const weekNumbersToWords = (list) => {
    outputList = []
    for (dayNumber of list) {
        switch (dayNumber) {
            case 1:
                outputList.push("Monday")
                break;
            case 2:
                outputList.push("Tueasday")
                break;
            case 3:
                outputList.push("Wednesday")
                break;
            case 4:
                outputList.push("Thursday")
                break;
            case 5:
                outputList.push("Friday")
                break;
            case 6:
                outputList.push("Saturday")
                break;
            case 7:
                outputList.push("Sunday")
                break;
            default:
                break;
        }
    }
    return outputList;
}

console.log(weekNumbersToWords(numbers));
// [ 'Tueasday', 'Thursday', 'Friday', 'Monday', 'Wednesday' ]