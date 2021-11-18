function countWords(message){
  // wirte your code here
  msgArr= message.split(" ")
  return msgArr.length
}
countWords('Good morning, I love JavaScript.'); // should return 5
