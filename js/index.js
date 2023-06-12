atmStart.addEventListener("click", atm);

// This is creating the user classes
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
const ian = new bankUser("ian", 1234);
const james = new bankUser("james", 1234);

// This is creating instances of the object
usersArr.push(tyler);
usersArr.push(ian);
usersArr.push(james);

function atm() {
  // This is getting the username and password to log in and making sure its correct
  let userInputName = prompt("Please input your user name").toLowerCase();
  let userInputPin = Number(prompt("Please input your pin"));
  let currentUser;

  for (const i in usersArr) {
    if (
      usersArr[i].userName === userInputName &&
      usersArr[i].pin === userInputPin
    ) {
      currentUser = usersArr[i];
    }
  }

  // Prints the welcome statement and lets the user pick an option
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

  // Depending on the user input will determine what option they can use and this executes is
  while (quitOption === false) {
    switch (
      (userChoice = Number(
        prompt("Please choose a NUMBER from the list of options")
      ))
    ) {
      case 1:
        let depositAmount = Number(prompt("Please input your deposit amount"));

        currentUser.deposit(depositAmount);
        console.log("$" + currentUser.balance + " is your current balance");

        break;
      case 2:
        console.log("$" + currentUser.balance + " is your current balance");
        let withdrawAmount = Number(
          prompt("Please input your withdraw amount")
        );
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
}
