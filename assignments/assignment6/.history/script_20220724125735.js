const peter = {
  firstName: "Peter",
  lastName: "Smith",
  birthYear: 1990,
  jobTitle: "student",
  score: [100, 99, 90, 96],

  calAvgScore: function () {
    this.avgScore =
      (this.score[0] + this.score[1] + this.score[2] + this.score[3]) /
      this.score.length;
    return this.avgScore;
  },

  calHighestScore: function () {
    this.highestScore = Math.max(...this.score);
    return this.highestScore;
  },

  showSummary: function () {
    console.log(
      `${this.lastName} ${this.firstName} has completed ${
        this.score.length
      } task and ${this.firstName} average score is ${this.calAvgScore()}, ${
        this.firstName
      } highest score is ${this.calHighestScore()}`
    );
  },
};

console.log(peter.showSummary());

//Question 2
console.log(`Question 2: `);
function CovertCelsiusToFahrenheit(celsius) {
  while (celsius < -88 || celsius > 55) {
    alert(`Please enter a celsius number between -88 and 55.`);
    celsius = Number(prompt("Enter the celsius temperature again:"));
  }
  fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F";`);
  return celsius;
}
CovertCelsiusToFahrenheit(Number(prompt("Enter the celsius temperature:")));
