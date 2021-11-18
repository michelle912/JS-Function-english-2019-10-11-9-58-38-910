function palindrome(str) {
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len-1-i]) {
       return false;
   }
 }
 return true;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
