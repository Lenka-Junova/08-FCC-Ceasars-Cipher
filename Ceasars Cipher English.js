function rot13(str) {
  let sentence = str;
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let translated = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    const letter = alphabet.includes(char);

    if (letter === false) {
      translated += char;
    } else {
      let letterIndex = alphabet.findIndex((l) => l === char);
      translated += alphabet[letterIndex + 13] || alphabet[letterIndex - 13];
    }
  }
  return translated;
}
rot13("SERR PBQR PNZC");
