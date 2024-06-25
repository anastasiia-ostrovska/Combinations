const getArrOfCombinations = (string) => {
  let combinations = [string];

  (function generateCombinations (str = string, dotIndex = 1) {
    for (let i = dotIndex; i < str.length; i++) {
      const beforeDot = str.slice(0, i);
      const afterDot = str.slice(i);
      const combinedStr = `${beforeDot}.${afterDot}`;

      combinations.push(combinedStr);

      generateCombinations(combinedStr, i + 2);
    }
  })();

  return combinations;
};

module.exports = getArrOfCombinations;



