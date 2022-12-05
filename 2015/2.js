const fs = require('fs/promises');

// P1
(async () => {
  let example = '2x3x4\n2x3x4'; //58 x 2
  example = '11x4x11';
  const fileInput = await fs.readFile('input', { encoding: 'utf8' });

  const parse = (input) =>
    input
      .trim()
      .split('\n')
      .map((present) => present.trim().split('x'));
  const parsedInput = parse(fileInput);

  const getSurface = (l, w, h) => {

    let extra = [l, w, h].sort((a,b)=>a-b);
    extra = extra[0]*extra[1];
    
    const surface = 2 * (l * w + w * h + l * h);
    const total = surface + extra;

    if (l == 11) console.log(total);
    return total;// in square feet
  };

  const solve = (presents) => {
    const getTotalSurface = (totalSurface, present) => {
      totalSurface += getSurface(...present);

      return totalSurface;
    };

    return presents.reduce(getTotalSurface, 0);
  };

  console.log('solution 1: ', solve(parsedInput));
})();

//P2
(async () => {
  let example = '2x3x4\n2x3x4'; //58 x 2
  example = '11x4x11';
  const fileInput = await fs.readFile('input', { encoding: 'utf8' });

  const parse = (input) =>
    input
      .trim()
      .split('\n')
      .map((present) => present.trim().split('x'));
  const parsedInput = parse(fileInput);

  const ribbenBow = (l, w, h) => {

    let ribben = [l, w, h].sort((a,b)=>a-b);
    let bow = ribben[0]*ribben[1]*ribben[2];
    ribben= ribben[0]*2+ribben[1]*2;
    
    // console.log(ribben)
    const total = ribben + bow;

    return total;
  };

  const solve = (presents) => {
    const getTotalSurface = (totalSurface, present) => {
      totalSurface += ribbenBow(...present);

      return totalSurface;
    };

    return presents.reduce(getTotalSurface, 0);
  };

  console.log('solution 2: ', solve(parsedInput));
})();
