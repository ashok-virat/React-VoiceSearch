// ArtyomCommands.js
export default class ArtyomCommandsManager {
  // The ArtyomCommandsManager class expects as argument in the constructor
  // an already declared instance of Artyom.js
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  // Execute the loadCommands method to inject the methods to the instance of Artyom
  loadCommands() {
    let Artyom = this._artyom;

    // Here you can load all the commands that you want to Artyom
    return Artyom.addCommands([
      {
        indexes: ["I am Ashok"],
        action: () => {
          Artyom.say("welcome boss");
        },
      },
      {
        indexes: ["How Are You"],

        action: () => {
          Artyom.say("I'm fine, thanks for asking !");
        },
      },
      {
        indexes: ["Are You Jarvish"],

        action: () => {
          Artyom.say("yes i am jarvish");
        },
      },
      {
        indexes: ["i am bejo"],

        action: () => {
          Artyom.say("hi bejo,ashok did some basic jarvish functionality");
        },
      },
      {
        indexes: ["i am arun"],

        action: () => {
          Artyom.say("hi arun, how about your work");
        },
      },
      {
        indexes: ["i am sethu"],

        action: () => {
          Artyom.say(
            "hi sethu, how about your game.thats game name is pubg.i am i right"
          );
        },
      },
      {
        indexes: ["i am sheik"],

        action: () => {
          Artyom.say("hi sheik,how's going your studies");
        },
      },
      {
        indexes: ["Generate reports of * of this year"],

        action: (i, month) => {
          let year = new Date().getFullYear();

          Artyom.say(`Generating reports of ${month} ${year} `);

          Artyom.say(
            "Ready ! What were you expecting? write some code you lazy bear !"
          );
        },
      },
    ]);
  }
}
