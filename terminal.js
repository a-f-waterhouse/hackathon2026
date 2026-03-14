const input = document.getElementById('cmd');
const output = document.getElementById('output');
let isTyping = false;
let count = 0;

// Terminal Input Handling
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !isTyping) {
    const command = input.value.trim();
    input.value = '';
    if (command) {
      executeCommand(command);
    }
  }
});

// Print line
function printLine(text) {
  const line = document.createElement('p');
  line.textContent = text;
  output.appendChild(line);
}


function executeCommand(cmd) {
  printLine(`> ${cmd}`);
  const lower = cmd.toLowerCase();

    const response = 'hello';


    typeLines(response, () => {});

    count++;

}

function typeLines(lines, callback = () => {}) {
  isTyping = true;
  let index = 0;

  function next() {
    if (index >= lines.length) {
      isTyping = false;
      callback();
      return;
    }

    const text = lines[index++];
    const line = document.createElement('span');
    output.appendChild(line);

    if (text === '') {
      line.innerHTML = '&nbsp;';
      setTimeout(next, 200);
    } else {
      let charIndex = 0;
      const interval = setInterval(() => {
        line.textContent += text.charAt(charIndex++);
        if (charIndex === text.length) {
          clearInterval(interval);
          setTimeout(next, 100);
        }
      }, 20);
    }
  }

  next();
}
