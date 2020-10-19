const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
    
  function convertBinToLetter(bin) {
    if(bin === '10') return '.';
    if(bin === '11') return '-';
  }

  function decodeMorseLetter(str) {
    const idx = str.indexOf('1');
    const bin = str.substring(idx, idx + str.length);
    let letter = '';

    for(let i = 0; i < bin.length; i+=2) {
        letter += convertBinToLetter(bin[i] + bin[i+1]);
    }

    return MORSE_TABLE[letter];
  }

  function decodeMorseWord(word) {
    const size = 10;
    const numChunks = Math.ceil(word.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = word.substr(o, size);
    }
    return chunks.map(decodeMorseLetter).join("");
  }

  return expr.trim().split("**********").map(decodeMorseWord).join(" ");
}

module.exports = {
  decode,
};
