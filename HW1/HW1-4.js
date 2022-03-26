function isPalindrome(input) {
  if(typeof input == 'string') {
    
    const length = input.length;
    for (var i = 0; i < length/2 ; i++) {
      if (input[i] != input[length-1-i]) {
        return 'false';
      }
    } 
    return 'true';
        
  } else
      return 'error';
      
}    

isPalindrome(`civic`)
isPalindrome(100)
isPalindrome(`reg`)
isPalindrome(`uwu`)
isPalindrome(`madam`)