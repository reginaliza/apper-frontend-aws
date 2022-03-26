function convertToVowels(input) {
  if(typeof input == 'string') {
    var output = " "
    const vowels = ['a', 'e', 'i', 'o', 'u']

    
    for (var i in input) {
      if(vowels.includes(input[i])) {
        output += input[i] + ""
      }
    } 
    return output;
        
  } else
      return 'error';
}    

convertToVowels(`regina`)
convertToVowels(`diloy`)
convertToVowels(0)