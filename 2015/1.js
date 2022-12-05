const fs = require('fs/promises');

// P1
(async ()=>{

  const example = '((())))))';

  const fileInput = await fs.readFile('input', {encoding: 'utf8'});

  const parse = (input) => input.trim().split('');

  const parsedInput = parse(example);
  const finalFloor = parsedInput.reduce((floor, step) => {
    if (step == '(') {
      return floor + 1;
    } else {
      return floor - 1;
    }
  }, 0);

  console.log('current floor is: ', finalFloor);

  //nothing to do with the problem, just messing around
  console.log('number of steps is: ', parsedInput.length);
  const half = (parsedInput.length-Math.abs(finalFloor))/2;
  console.log('number of ups is: ', finalFloor>0 ? half+finalFloor : half);
  console.log('number of downs is: ', finalFloor<0 ? half-finalFloor : half);

})()

// P2
console.log('-______________________________________________________________-')
(async ()=>{

  const example = '((())))))'; //-1

  // const fileInput = await fs.readFile('input', {encoding: 'utf8'});

  const parse = (input) => input.trim().split('');

  let firstEnter2Basement = 0;
  let firstTime = 1;
  const parsedInput = parse(example);
  parsedInput.reduce((floor, step, index) => {
    if (step == '(') {
      floor += 1;
    } else {
      floor -= 1;
    }

    if(firstTime && floor == -1){firstEnter2Basement=index+1; firstTime=0}

      return floor;
  }, 0);

  console.log('first enter is: ', firstEnter2Basement);
})()
