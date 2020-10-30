//Funzione Generale 
function isInArray (num, numArr) {
  var boolean = false;
  for (var i = 0; i < numArr.length; i++) {
    if(numArr[i]===num){
      var boolean = true;
    }
  }
  return boolean;
}
