import { assert, expect } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("calculateStarAverage Function", () => {
  it('stars average (5+3+1)/3 should equal "3"', () => {
    const result = calculateStarAverage([
      { star: 5 },
      { star: 3 },
      { star: 1 },
    ]);
    assert.equal(result, 3); // 9/3=3
  });

  it('5 single review should equal"5"', () => {
    const result = calculateStarAverage([{ star: 5 }]);
    assert.equal(result, 5); // 5/1=5
  });
});
