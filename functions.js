//import data
const { data } = require("./data");

function filterByPopulation() {
  const populationGreaterThan = data.filter((number) => {
    if (number.population < 100000) {
      return number;
    }
  });
  const populationLessThan = data.filter((number) => {
    if (number.population > 100000) {
      return number;
    }
  });
  console.log(populationLessThan, populationGreaterThan);
}
module.exports = { filterByPopulation };
