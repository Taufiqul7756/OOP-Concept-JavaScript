const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer = function () {
    console.log(
      `This computer name is ${this.name} and Model Name is ${this.model}`
    );
  };
};
const dell = new Computer("Dell", "dk12");
const apple = new Computer("Apple", "ap12");
console.log(dell, apple);

dell.aboutComputer();

// const obj = {};
// obj.name = "Code ABC";
// obj.playlist = 20;
// console.log(obj);

//4 rules of function Constructor

//1. create
