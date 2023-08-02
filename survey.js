const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionSet = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

let answerSet = [];
const askQuestionsRecursively = (questionSet, i) => {
  if (i === questionSet.length) {
    rl.close();
    console.log(`
    Thank you for your input. Here's what we learned:\n 
    Nice to meet you ${answerSet[0]}. You like to spend time ${answerSet[1]}, especially while listening to ${answerSet[2]}.\n
    Your favorite meal is ${answerSet[3]}, and you absolutely love to eat ${answerSet[4]} for that meal.\n 
    When you're not busy with that, we might catch you enjoying some ${answerSet[5]}.\n 
    By the way, your superpower is ${answerSet[6]}.
  `);
    return;
  }

  rl.question(questionSet[i], answer => {
    answerSet.push(answer);
    askQuestionsRecursively(questionSet, i + 1);
  });
};

askQuestionsRecursively(questionSet, 0);
