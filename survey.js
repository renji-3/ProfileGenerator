const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};
rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  answers.nickname = answer;
  console.log(`Sweet! So you like to be called ${answer}. Got it`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    answers.activity = answer;
    console.log(`Nice! Sounds fun ${answer}`);
    rl.question(`What do you listen to while doing that? `, (answer) => {
      answers.music = answer;
      console.log(`I'm more into city pop myself but that sounds cool too: ${answer}`);
      rl.question(`Which is your favourite meal of the day? `, (answer) => {
        answers.meal = answer;
        console.log(`Really? Pretty basic if you ask me: ${answer}`);
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          answers.food = answer;
          console.log(`Gross! I mean, uh, cool! ${answer}`);
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            answers.sport = answer;
            console.log(`Yeah I don't really like sports: ${answer}`);
            rl.question(`What is your opinion on Ducks? `, (answer) => {
              answers.ducks = answer;
              console.log(`Good answer. ${answer}`);
              console.log(`My name is ${answers.nickname} and I like to ${answers.activity}. While I do that, I like to listen to ${answers.music}. My favourite meal of the day is ${answers.meal}, and my favourite food for ${answers.meal} is ${answers.food}. My favourite sport is ${answers.sport}, and my opinion on ducks is ${answers.ducks}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

