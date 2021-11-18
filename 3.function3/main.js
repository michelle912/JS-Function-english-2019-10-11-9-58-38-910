function alphabetSort(message){
  // wirte your code here
  msgArr = message.split("");
  msgArr = msgArr.sort((a, b) => a.localeCompare(b))
  return msgArr.join("")
}
alphabetSort('hello'); // should return 'ehllo'
