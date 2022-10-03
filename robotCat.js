const catRobot = {
    _name: "Billie",
    _weight: "6kg",
    _colour: "Snow White",
    _Age: 2,
    _zoomies() {
      console.log("Zoom Zoom!");
    },
    _introduction() {
      console.log(
        `Hi, my name is ${this._name}. I like crunchies, napping and sitting at the bottom of the garden!`
      );
    },
    _favouriteFood: 'Lick-E-Licks',
    _foodBowlLevel: 100,
    feedMe() {
      if (this._foodBowlLevel <= 50) {
        console.log(
          `I am so hungry, I think I deserve a ${this._favouriteFood}`
        );
      } else {
        console.log("Thank you for my crunchies, I love you so much!");
      }
    },
    get name() {
      if (typeof this._name === "string") return this._name;
      else {
        return "Please enter a valid name";
      }
    },
    set name(newName) {
      if (typeof newName === "string" && newName.length > 1) this._name = newName;
      else {
        console.log("Please enter a name that is longer than one character");
      }
    },
  };
  
  catRobot._zoomies();
  //catRobot._name = 12
  catRobot._foodBowlLevel = 60;
  catRobot.feedMe();
  catRobot.name = "Billie";
  catRobot._introduction();
  