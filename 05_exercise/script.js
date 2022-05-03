let input = ["Monday","Thursday","Saturday","Wednesday","Tuesday", "Friday", "Saturday"]

const getLastValue = (list) => {
    let sortedList = list.sort();
    return list[list.length-1];
}
console.log(getLastValue(input)); //Wednesday