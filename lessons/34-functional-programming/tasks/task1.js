const createValidation = (...validators) => {
  const fn = (value) => {
    let res = [];
    for (let validItem of validators) {
      res.push(validItem(value));
    }
    return res.includes(null) ? null : res;
  };
  return fn;
};

const createValidator = (validationFunc, expression) => {
  const createdFunc = (value) => {
    validationFunc(value, expression);
  };
  return createdFunc;
};

const hasEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const hasNoEmpty = (expression) => {
  return expression.trim() !== "";
};

const hasAdult = (age) => {
  return age > 17;
};

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
};
