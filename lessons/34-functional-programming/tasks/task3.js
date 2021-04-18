const compose = (...args) => (value) =>
  args.reduce((acc, func) => func(acc), value);
const withProps = (func) => (value) => Object.assign(value, func(value));
const branch = (pred, fn1, fn2) => (value) =>
  pred(value) ? fn1(value) : fn2(value);

module.exports = {
  compose,
  withProps,
  branch,
};
