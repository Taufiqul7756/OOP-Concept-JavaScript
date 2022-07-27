const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  //   this.aboutComputer = function () {
  //     console.log(
  //       `This computer name is ${this.name} and Model Name is ${this.model}`
  //     );
  //   };
};
Computer.prototype.aboutComputer = function () {
  console.log(
    `This computer name is ${this.name} and Model Name is ${this.model}`
  );
};

const dell = new Computer("Dell", "dk12");
const apple = new Computer("Apple", "ap12");
console.log(dell);
console.log(apple);

dell.aboutComputer();

// const arr = [2, 3, 4, 5, 66, 78, 55];
// const evenNumber = arr.filter((element) => element % 2 === 0);

// console.log(Array.prototype);
// console.log(evenNumber);
