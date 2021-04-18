const memoizeResultCreator = (...args) => {
  let cache = {};
  const methods = args.slice(0, -1);
  const result = args[args.length - 1];
  return (data) => {
    const dataStr = Object.keys(data).every(
      (elem) => elem in cache && data[elem] === cache[elem]
    );
    if (!dataStr) {
      cache = { ...cache, ...data };
      const methodsWithArgs = methods.map((fn) => fn(cache));
      return result(...methodsWithArgs);
    }
    return cache;
  };
};

module.exports = {
  memoizeResultCreator,
};
