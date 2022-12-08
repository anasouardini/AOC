const { exec } = require('child_process');

const copyLog = (input) => {
  const cmd = `echo ${input} | xclip -sel clip;`;
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      return console.log('error executing command');
    }
    // console.log(stdout)
  });

  console.log('result is: ', input);
};

module.exports = copyLog;
