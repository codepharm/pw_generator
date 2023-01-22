const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const generatePassword = () => {
  // init password holder array
  const password = [];
  
  // loop through 15 characters
  for(let i = 0; i < 15; i++) {
    // init random num
    const random = Math.floor(Math.random() * characters.length)
    
    // push a random char to password[]
    password.push(characters[random])
  }

  return password.join('');
}

console.info(generatePassword(), generatePassword())
