const input = document.getElementById('cmd');
const output = document.getElementById('output');
let isTyping = false;
let x = 0;

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

   const responses =
    [
        "I can't see your messages. I'm far beyond that plane of existence. But I need you to help me. I'm close to fading away... I need you to find out who killed me.",
        "Yes, I know. Why you? Why has this laptop been sitting there? How are you talking to a dead person? These questions are irrelevant. I need you to come back and tell me who killed me. ",
        "Please. Find out who killed me.",
        "Please.         pLease.         PlEASE.         PLEASE.          PLEASE.",
        "All over that stupid pie. I'll get Tex back in the next life, I swear on it. They don't know what's coming for them."
    ];


    let response =  "";
    if(x < responses.length -1)
    {
        response = responses[x];
        x++;
    }
    else if(x == responses.length-1 && lower === ("tex"))
    {
        response = responses[x];
    }
    else
    {
        response = "you need to he,lp mee eeee";
    }
    typeLines(response, () => {});



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
      setTimeout(next,25);
    } else {
      let charIndex = 0;
      const interval = setInterval(() => {
        line.textContent += text.charAt(charIndex++);
        if (charIndex === text.length) {
          clearInterval(interval);
          setTimeout(next, 25);
        }
      }, 20);
    }
  }

  next();
}
