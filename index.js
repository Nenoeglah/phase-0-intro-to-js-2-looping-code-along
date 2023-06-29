//Code your solutions in this file

function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }

  return messages;
}


const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";

const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  
  
  
    



