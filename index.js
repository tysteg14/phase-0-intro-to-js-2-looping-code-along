

function writeCards(names, message) {
    let messageArray = []
    for (let i = 0; i < names.length; i++) {
       messageArray.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }

    return messageArray;
    
}

console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], "surprise"));



function countDown(num) {
  let i = num;
  while (i >= 0 ) {
    console.log(i);
    i--;
  }
  return countDown;
}

countDown(10);