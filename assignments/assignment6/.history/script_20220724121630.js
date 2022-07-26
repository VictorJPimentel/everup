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

  showSummary: function () {
    this.avgScore =
      (this.score[0] + this.score[1] + this.score[2] + this.score[3]) /
      this.score.length;
    console.log(
      `${this.lastName} ${this.firstName} has completed ${this.score.length} task`
    );
  },
};

console.log(peter.showSummary());

//: FirstName LastName has completed ? tasks, and FirstName’s
// average score is ? , FirstName’s highest score is ?
