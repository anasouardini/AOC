const fs = require('fs/promises');
const copyLog = require('./copylog');

const fileInput = fs.readFile('input', { encoding: 'utf8' });

// P1
// (async () => {
//   let example = '^v^v^v^v^v';
//
//   // const problemInput = await fileInput;
//   const problemInput = example;
//
//   const parse = (inp) => {
//     const input = inp.trim();
//     const arr = input.split('');
//     return arr;
//   };
//
//   const updateGrid = ([x, y], grid) => {
//     if (grid?.[x]) {
//       if (grid[x]?.[y]) {
//         grid[x][y]++;
//       } else {
//         grid[x][y] = 1;
//       }
//     } else {
//       grid[x] = { [y]: 1 };
//     }
//
//     return grid;
//   };
//
//   const solve = (input) => {
//     // let grid = {1: {5: 3, 6: 3, 7: 3}};
//     let currentCords = [0, 0];
//     console.log('input: ', input);
//     const grid = input.reduce(
//       (grid, move) => {
//         switch (move) {
//           case '^':
//             currentCords[1]++; //y++
//             return updateGrid(currentCords, grid);
//           case '>':
//             currentCords[0]++; //x++
//             return updateGrid(currentCords, grid);
//           case 'v':
//             currentCords[1]--; //y--
//             return updateGrid(currentCords, grid);
//           case '<':
//             currentCords[0]--; //x--
//             return updateGrid(currentCords, grid);
//           default:
//             console.log('unrecognized move!!');
//         }
//       },
//       { 0: { 0: 1 } }
//     );
//
//     console.log('grid: ', JSON.stringify(grid));
//     const out = Object.values(grid).reduce((visitedHouses, yAxis) => {
//       console.log('result: ', Object.entries(yAxis).length);
//       console.log('xaxis: ', yAxis);
//       visitedHouses += Object.entries(yAxis).length;
//       return visitedHouses;
//     }, 0);
//
//     return out;
//   };
//
//   copyLog(solve(parse(problemInput)));
// })();

//P2
(async () => {
  let example = '^v^v^v^v^v';

  // const problemInput = await fileInput;
  const problemInput = example;

  const parse = (inp) => {
    const input = inp.trim();
    const arr = input.split('');
    return arr;
  };

  const updateGrid = ([x, y], grid) => {
    if (grid?.[x]) {
      if (grid[x]?.[y]) {
        grid[x][y]++;
      } else {
        grid[x][y] = 1;
      }
    } else {
      grid[x] = { [y]: 1 };
    }

    return grid;
  };

  const solve = (input) => {
    // the only different thing is that I need two coordinates,
    // one for santa and the other for robo-santa
    const cords = [
      [0, 0],
      [0, 0],
    ];
    let pointer = 0; // 0 means santa, 1 means robo-santa

    console.log('input: ', input);
    const grid = input.reduce(
      (grid, move) => {
        switch (move) {
          case '^':
            cords[pointer][1]++; //y++
            pointer = Number(!pointer);
            return updateGrid(cords[Number(!pointer)], grid);
          case '>':
            cords[pointer][0]++; //x++
            pointer = Number(!pointer);
            return updateGrid(cords[Number(!pointer)], grid);
          case 'v':
            cords[pointer][1]--; //y--
            pointer = Number(!pointer);
            return updateGrid(cords[Number(!pointer)], grid);
          case '<':
            cords[pointer][0]--; //x--
            pointer = Number(!pointer);
            return updateGrid(cords[Number(!pointer)], grid);
          default:
            console.log('unrecognized move!!');
        }
      },
      { 0: { 0: 2 } }
    );

    console.log('grid: ', JSON.stringify(grid));
    const out = Object.values(grid).reduce((visitedHouses, yAxis) => {
      console.log('result: ', Object.entries(yAxis).length);
      console.log('xaxis: ', yAxis);
      visitedHouses += Object.entries(yAxis).length;
      return visitedHouses;
    }, 0);

    return out;
  };

  copyLog(solve(parse(problemInput)));
})();
