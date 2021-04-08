const { isValid, sendData, FormHandler } = require("./functions");

describe("valid function", () => {
  test("should return Alex", () => {
    expect(isValid("Alex")).toEqual(true);
    expect(isValid(undefined)).toBe(false);
  });
});

describe("valid send data", () => {
  test("should return undefined", () => {
    function save() {}
    expect(sendData("Ilya", save)).toEqual(undefined);
  });
  test("should return true", () => {
    const myFuncToLowerCase = (elem) => {
      elem.toLowerCase();
    };

    expect(isValid("Alex", myFuncToLowerCase)).toEqual(true);
  });
});

describe("FormHandler", () => {
  const myFuncToUpperCase = (elem) => {
    return elem ? true : null;
  };
  const myFuncToLowerCase = (elem) => {
    elem ? true : undefined;
  };

  test("should return undefined", () => {
    const handler = new FormHandler(myFuncToUpperCase, myFuncToLowerCase);
    expect(handler.onSubmit("true")).toEqual(undefined);
  });

  test("should return undefined", () => {
    const handler = new FormHandler(myFuncToUpperCase, myFuncToLowerCase);
    expect(handler.onSubmit()).toEqual(undefined);
  });
});
