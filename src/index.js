





module.exports = function check(str, bracketsConfig) {
  const bracketPair = {};
  const openBracket = [];
  //str = '|()|(||)||';
  //bracketsConfig = [['(', ')'], ['|', '|']];
  let k = 2;
  bracketsConfig.forEach((element, index) => {

    bracketPair[element[1]] = element[0]
  })
  for (key in bracketPair) {
    openBracket.push(bracketPair[key])

  }
  //console.log(openBracket);

  let stuck = [];
  //let strr = str.split('')

  for (let i = 0; i < str.length; i++) {
    //console.log(stuck);
    let currentSymbol = str[i];

    if (openBracket.includes(currentSymbol)) {
      if ((bracketPair[currentSymbol]) === currentSymbol) {

        if (stuck[stuck.length - 1] == currentSymbol) {
          stuck.pop()

        } else {
          //if (stuck.length > 0) { return false } else {          }
          stuck.push(currentSymbol)
          k = k + 1;
        }
      } else {



        stuck.push(currentSymbol)
        //console.log(stuck);
        //console.log(stuck);
      }
    }
    else {
      if (stuck.length === 0) { return false }
      let topElem = stuck[stuck.length - 1];
      //console.log(bracketPair);
      // console.log(currentSymbol);
      //onsole.log(bracketPair[currentSymbol]);
      if ((bracketPair[currentSymbol]) === topElem) {
        stuck.pop()
      }
      else {
        // console.log('zapush');
        return false
      }

    }

  }
  for (let i = 0; i < stuck.length; i++) {
    if (stuck[i] = stuck[i + 1]) {
      stuck.splice(i, 2)
    }
  }
  //console.log(stuck.length);
  //console.log(k);

  return (stuck.length === 0)
}


//console.log(module.exports());