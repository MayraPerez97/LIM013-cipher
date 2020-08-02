const cipher = {
  encode: function (offset,string) {
    offset = (offset % 27 + 27) % 27;
    let lowerCaseString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    let newString = '';
    for (let i = 0; i < lowerCaseString.length; i++) {
      let currentLetter = lowerCaseString[i];
      if (alphabet.indexOf(currentLetter) != -1) {
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = (currentIndex + offset) % 27;
        if (string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
            continue;
        } 
        newString += alphabet[newIndex];
      }
      else 
        newString += currentLetter;
    }
  return newString;
  },

  decode: function (offset,string) {
    offset = (offset % 27 - 27) % 27;
    let lowerCaseString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    let newString = '';
    for (let i = 0; i < lowerCaseString.length; i++) {
      let currentLetter = lowerCaseString[i];
      if (alphabet.indexOf(currentLetter) != -1) {
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = (currentIndex - offset) % 27;
        if (string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
            continue;
        } 
        newString += alphabet[newIndex];
      }
      else 
        newString += currentLetter;
    }
  return newString;
  }
}

export default cipher;