function isPalindrome(input) {
  if(typeof input == 'string') {
    const word = input.toLowerCase()
    const length = input.length;
    for (var i = 0; i < length/2 ; i++) {
      if (word[i] != word[length-1-i]) {
        return 'false';
      }
    } 
    return 'true';
        
  } else
      return 'error';
      
}    

isPalindrome(`Civic`)
isPalindrome(100)
isPalindrome(`reg`)
isPalindrome(`uwu`)
isPalindrome(`madam`)