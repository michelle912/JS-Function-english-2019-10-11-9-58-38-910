function reverseString(message){
  // wirte your code here
  arr = message.split("")
  reverseArray = arr.reverse();
  result = reverseArray.join(""); 
  return result;
}
reverseString('hello'); // should return 'olleh'
