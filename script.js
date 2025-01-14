const convertBtn = document.getElementById('convert-btn');
let outputText = document.getElementById('output');

function convertRoman() {
  const symbols = [
    ['I','IV','V','IX'],
    ['X','XL','L','XC'],
    ['C','CD','D','CM'],
    ['M']
  ];
  const num = document.getElementById('number').value;
  let place = num.toString().length-1;
  let remainder = Number(num);
  let result = [];
  
  if (!num) {
    outputText.innerText = "Please enter a valid number";
  }
  else if (num <= -1) {
    outputText.innerText = "Please enter a number greater than or equal to 1";
  }
  else if (num >= 4000) {
    outputText.innerText = "Please enter a number less than or equal to 3999";
  }
  else {
    while (remainder) {
      if ((remainder/(9*(10**place))) >= 1) {
        result.push(symbols[place][3]);
        remainder %= (9*(10**place));
      }
      else if (remainder/(5*(10**place)) >= 1) {
        result.push(symbols[place][2]);
        remainder %= (5*(10**place));
      }
      else if (remainder/(4*(10**place)) >= 1) {
        result.push(symbols[place][1]);
        remainder %= (4*(10**place));
        place -= 1;
      }
      else if (remainder/10**place >= 1) {
        result.push(symbols[place][0].repeat(Math.floor((remainder/10**place))));
        remainder %= 10**place;
        place -= 1;
      }
      else {
        place -= 1;
      }
    }
    outputText.innerText = result.join("");
  }
}

convertBtn.addEventListener("click", (e)=>{convertRoman(); e.preventDefault();});