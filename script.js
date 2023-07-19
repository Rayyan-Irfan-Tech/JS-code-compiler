const code = document.getElementById('code');
const output = document.getElementById('output');

const captureConsoleLog = (message) => {
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }
  output.innerHTML += message + '\n';
};

console.log = captureConsoleLog;

const run = () => {
  output.innerHTML = '';
  try {
    const result = new Function(code.value)();
  } catch (error) {
    output.innerHTML += 'Error: ' + error + '\n';
  }
};
