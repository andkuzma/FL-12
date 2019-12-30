let max = 8;
let play;
let attempts, random, number, prize, win;
let x1 = 3;
let x2 = 2;
let x3 = 4;
let x4 = 25;
let x5 = 50;
let x6 = 100;
let cash = [x4, x5, x6];
let bye = false;
let z = 1;
let total_prize = 0;
let start = confirm('Do you want to play a game?');
if (start) {
    do {
     attempts = x1;
     win = false;
     while (attempts > 0){   
        prize = cash[attempts-1]*z;
        random = Math.floor(Math.random() * (max + 1));
      if (parseInt(prompt(`Choose a roulette pocket number from 0 to ${max}\n` +
                  `Attempts left: ${attempts}\n` +
                  `Total prize: ${total_prize}$\n` +
                  `Attempts left: ${random}\n` +
                  `Possible prize on current attempt: ${prize}$`, 0), 10) === random){
              win = true;
              break;
            } else {
              attempts--;
          }
      }
      if (win){
        alert(`Congratulation, you won! Your prize is: ${prize} $.`);
        z *= x2;
        total_prize += prize;
        max += x3;
    } 
    
    play = confirm('Do you want to continue?');

  }while (play);
  if (!bye){
    alert(`Thank you for your participation. Your prize is: ${total_prize} $`);
  }

} else {
  alert('You did not become a billionaire, but can.');
}