// :)
const smartSearch = (array, value) => array.includes(value);
const uniqArray = (value) => new Set([...value]);

module.exports = {
  smartSearch,
  uniqArray,
};
