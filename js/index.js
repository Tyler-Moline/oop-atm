// Due: Monday 6/12/2023
// Project 2: Virtual ATM Machine (OOP Project)
// -Build a console app that mimics an atm Machine
// -Persistent balance ( make it adaptable [add remove, null, get])
// -Main Menu that routes to other menus
// **********
// WELCOME
// view balance etc..
// ***********
// -redirect back to the main menu
// -Error handling for withdrawals
// -Deposit
// -Exit the program via selection
// -Receipt (edited)

class bankUser {
  constructor(userName, pin) {
    this.userName = userName;
    this.pin = pin;
    this.balance = 1000;
  }

  deposit(money) {
    this.balance += money;
    return this.balance;
  }

  withdraw(money) {
    this.balance -= money;
    return this.balance;
  }

  balance() {
    return this.balance;
  }
}
usersArr = [];

const tyler = new bankUser("tyler", 1234);
const ian = new bankUser("Ian", 1234);
const james = new bankUser("James", 1234);

usersArr.push(tyler);
usersArr.push(ian);
usersArr.push(james);

let userInputName = prompt("Please input your user name");
let userInputPin = Number(prompt("Please input your pin"));
let currentUser;

for (const i in usersArr) {
  if (
    usersArr[i].userName === userInputName &&
    usersArr[i].pin === userInputPin
  ) {
    currentUser = usersArr[i];
    //console.log(currentUser);
  }
}

console.log(
  "Welcome " +
    currentUser.userName +
    " to the bank of Devpipeline!\n------------------------------------\nPlease select from the options below:"
);

let options = ["Deposit", "Withdraw", "Print receipt", "Quit"];

for (let i = 0; i < options.length; i++) {
  console.log(i + 1, options[i]);
}

let userChoice;
let quitOption = false;

while (quitOption === false) {
  switch (
    (userChoice = Number(
      prompt("Please choose a NUMBER from the list of options")
    ))
  ) {
    case 1:
      let depositAmount = Number(prompt("Please input your deposit amount"));
      currentUser.deposit(depositAmount);
      console.log(currentUser.balance);
      break;
    case 2:
      let withdrawAmount = Number(prompt("Please input your withdraw amount"));
      if (withdrawAmount > currentUser.balance) {
        console.log("Insufficient balance");
      } else {
        currentUser.withdraw(withdrawAmount);
        console.log(currentUser.balance);
      }
      break;
    case 3:
      console.log("Your current balance is " + currentUser.balance);
      break;

    case 4:
      console.log("Thanks for using our bank!");
      quitOption = true;
      break;
  }
}
