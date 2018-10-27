function shout(string) {
  return 'hello'.toUpperCase()
}

function whisper(string) {
  return "hello".toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
switch (string) {
  case 'hello':
    return "I can't hear you!"
    break;
    case 'HELLO':
      return "YES INDEED!"
      break;
  default:
    return "I love you, too."
=======
  if ('hello') {
   return "I can't hear you!"
}  else if ('HELLO') {
   return "YES INDEED!"
>>>>>>> 0aaf3c4a93c9d9723c2c9aac847f3acadaece35c
}
}
