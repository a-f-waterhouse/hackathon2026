const input = document.getElementById('cmd');
const output = document.getElementById('output');
let isTyping = false;
let x = 0;
let y = 0;

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
        "I'm sorry for hiding the next apps from you. It's so you check them thoroughly. Tell me my least favourite professor's first name.",

        "You are listening! Thank you. Feel free to check my texts. Now, what animal did Nathan Gold's project feature? ",

        "And what did I do to Tex?",

        "Here's my photos. Hopefully you can work out what happened from that, free me from this place. Who killed me? ",
        "All over that stupid pie. I'll get Tex back in the next life, I swear on it. They don't know what's coming for them."
    ];

    const solutions =
    [
        "ian",
        "duck",
        "pie",
        "tex"
    ];

    document.getElementById("emailButton").style.display="block";

    if(solutions[y] === lower)
    {
        y++;
        if(y == 1)
        {
            document.getElementById("messageButton").style.display="block";
        }
        else if (y ==2)
        {
        }
        else if(y == 3)
        {
            document.getElementById("photoButton").style.display="block";
        }
    }
    let response =  "";
    if(x < responses.length)
    {
        if(x <= 2)
        {
            response = responses[x];
            x++
        }
        else if(x== 3 && y==1)
        {
            response = responses[x];
            x++
        }
        else if (x ==3 )
        {
            response = responses[x-1];
        }
        else if (x == 4 && y == 2)
        {
                response = responses[x];
                x++
        }
        else if (x == 4 )
        {
            response = responses[x-1];
        }
        else if (x == 5 && y == 3)
        {
                response = responses[x];
                x++
        }
        else if (x == 5 )
        {
            response = responses[x-1];
        }
        else if(x == 6 && y == 4)
        {
                            response = responses[x];
                            x++
        }
        else if (x == 6 )
        {
            response = responses[x-1];
        }
        else
        {
            response = responses[x];
        }
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
          setTimeout(next, 0); //!!
        }
      }, 20);
    }
  }

  next();
}
