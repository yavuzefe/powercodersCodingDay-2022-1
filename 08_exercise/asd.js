let questionsList = [1, 2, 3, 4, 5];
function randomizeArray(array){
    array.sort(()=> Math.random() - 0.5);
}
let randomNumber = randomizeArray(questionsList);
console.log(randomNumber);
