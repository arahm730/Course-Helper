import React from 'react'
import "./Stats.css"

const Stats = ({ xAxisLabels, allData }) => {
  const difficulties = allData[1]
  const average = (array) =>
    (array.reduce((a, b) => a + b) / array.length).toFixed(2);

  let dict = {};
  for (let number = 0; number < difficulties.length; number++) {
    dict[difficulties[number]] = xAxisLabels[number];
  }

  const averageDifficulty = average(difficulties);
  const lowestDifficulty = Math.min(...difficulties).toFixed(2);
  const lowestDifficultYear = dict[Math.min(...difficulties)];
  const highestDifficulty = Math.max(...difficulties).toFixed(2);
  const highestDifficultyYear = dict[Math.max(...difficulties)];
  console.log(allData[0]);
  let total = 0;
  for (let num of allData[0]) {
    total += num.aggregate.count;
  }
  // const numberResponses = dict[0].reduce(function (accumulator, curValue) {return accumulator + curValue}, 0)
  return (
    <div className="stats">
      <p>Average Difficulty: {averageDifficulty}</p>
      <p>Lowest Difficulty: {lowestDifficulty}</p>
      <p>Highest Difficulty: {highestDifficulty}</p>
      <p>Easiest Time Period: {lowestDifficultYear}</p>
      <p>Hardest Time Period: {highestDifficultyYear}</p>
      <p>Number of Responses: {total}</p>
    </div>
  );
};

export default Stats