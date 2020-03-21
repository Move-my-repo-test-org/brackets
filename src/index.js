module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  }
  
  let arrOfStr = [];
  bracketsConfig.forEach(arr => {
    arrOfStr.push(arr.join(''));
  });

  for (let i = 0; i < arrOfStr.length; i++) {
    if (str.includes(arrOfStr[i])) {
      str = str.replace(arrOfStr[i], '');
      i = -1;
    }
  }

  if (str) {
    return false;
  } else {
    return true;
  }

}
