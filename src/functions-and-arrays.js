// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  let maior;
  if (number1>number2){
    maior = number1;
  }else{
    maior = number2;
  }
  return maior;
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordList) {
  let maisLonga = wordList[0];
  if (!wordList.length){
    return null;
  }
  for(i in wordList){
    if (maisLonga.length < wordList[i].length){
      maisLonga = wordList[i];
    }
  }
  return maisLonga;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberList) {
  let soma=0;
  if(!numberList.length){
    return 0;
  }else{
    for(i in numberList){
      soma += numberList[i];
    }
    return soma;
  }
}



// Iteration #3.1 Bonus:
const test = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}];
// should return: 57
function sum(listaQualquer) {
  let soma=0;
  let tamanhoString;
  if(!listaQualquer.length){
    return 0;
  }else{
    for(i in listaQualquer){
      if (typeof(listaQualquer[i]) === 'string'){
        tamanhoString = listaQualquer[i].length;
        listaQualquer.splice(i,1,tamanhoString);
      }else if (typeof(listaQualquer[i]) === 'boolean'){
        if (listaQualquer[i] === true){
          listaQualquer[i] = 1;
        }else{
          listaQualquer[i] = 0;
        }
      }
      try{
        if (typeof(listaQualquer[i]) === 'object'|| listaQualquer[i] === 'array'){
          throw new Error (`Unsupported data type sir or ma'am`);
        }
      }
      catch(erro){
        
      }
      soma += listaQualquer[i];
    }
    return soma;
  }
}
sum(test);




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberList) {
  let soma=0;
  if(!numberList.length){
    return null;
  }else{
    for(i in numberList){
      soma += numberList[i];
    }
  return soma/numberList.length
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordList) {
  let tamanhoString;
  let soma=0;
  if(!wordList.length){
    return null;
  }else{
    for(i in wordList){
      tamanhoString = wordList[i].length;
      soma+=tamanhoString;
    }
  }
  return soma / wordList.length;
}

// Bonus - Iteration #4.1
function avg(listaQualquer) {
  let soma=0;
  let tamanhoString;
  if(!listaQualquer.length){
    return null;
  }else{
    for(i in listaQualquer){
      if (typeof(listaQualquer[i]) === 'string'){
        tamanhoString = listaQualquer[i].length;
        listaQualquer.splice(i,1,tamanhoString);
      }else if (typeof(listaQualquer[i]) === 'boolean'){
        if (listaQualquer[i] === true){
          listaQualquer[i] = 1;
        }else{
          listaQualquer[i] = 0;
        }
      }
      soma += listaQualquer[i];
    }
    return soma / listaQualquer.length;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'iPhone',
  'Samsung',
  'Android',
  'iOS',
  'iPhone',
  'Samsung',
  'Nokia',
  'Blackberry',
  'Android'];

function uniquifyArray(array) {
  const arrayUnique = [];
  const arrayUniqueArranj = [];
  let valorAtual;
  if(!array.length){
    return null;
  }else{
    for(let i = 0; i < array.length; i++){
      valorAtual = array[i];
      if(array.includes(valorAtual, i+1)===false){
        arrayUnique.push(array[i]);
      }
    }
  }
  for(let i = 0; i < arrayUnique.length; i++){
    arrayUniqueArranj.push("");
  }
  for(let i = 0; i < arrayUnique.length; i++){
    arrayUniqueArranj.splice(array.indexOf(arrayUnique[i]), 1, arrayUnique[i]);
  }
  for(let i = 0; i < arrayUniqueArranj.length; i++){
    if(arrayUniqueArranj[i]===''){
      arrayUniqueArranj.splice(i,1);
      i--;
    }
  }

  return arrayUniqueArranj;
}
console.log (uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  if (!array.length){
    return null;
  }
  if(array.includes(word)){
    return true;
  }else{
    return false;
  }

}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word) {
  let tamanhoOriginal = array.length;
  if (!array.length){
    return 0;
  }
  if(array.includes(word)){
    for(let i = 0; i < array.length; i++){
      if(array[i]===word){
         array.splice(array[i],1);
         i--;
      }
     }
    return tamanhoOriginal - array.length;
    }else{
      return 0;
    }
}
console.log(howManyTimes([
  'basketball',
  'football',
  'tennis',
  'rugby',
  'rugby',
  'ping pong',
  'rugby',
  'basketball',
  'rugby',
  'handball',
  'rugby'
],
'rugby'))



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
