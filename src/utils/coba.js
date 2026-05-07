const array = [1, 2, 3];



function setCurrentIndex(prev) {
  if (prev === 0) {
    array.length - 1
  } else {
    prev - 1
  }
  return prev
}


console.log("panjang array: ", array.length);

console.log("Hasil dari setCurrentIndex: ", setCurrentIndex(0))
console.log("Hasil dari setCurrentIndex: ", setCurrentIndex(1))
console.log("Hasil dari setCurrentIndex: ", setCurrentIndex(2))
