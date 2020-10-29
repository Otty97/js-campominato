//Definizione della funzione generale
function isNumberInArray(num, numArr) {
  for (var i = 0; i < numArr.length; i++) {
    if (num === numArr) {
      return true;
    }
    return false;
  }
}
