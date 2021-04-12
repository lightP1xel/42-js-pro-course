const quickSort = (array) => {
  const arr = [...array];
  if (arr.length < 2) {
    return arr;
  }
  const startValue = arr[0];
  const lowValue = arr.filter((value) => value.order < startValue.order);
  const highValue = arr.filter((value) => value.order > startValue.order);
  return [...quickSort(lowValue), startValue, ...quickSort(highValue)];
};

const toFlat = (array) => {
  const res = [];
  const arr = [...array];
  while (arr.length) {
    let nextValue = arr.pop();
    if (Array.isArray(nextValue)) {
      arr.push(...nextValue);
    } else {
      res.push(nextValue);
    }
  }
  return res.reverse();
};

const binarySearch = (array, searchValue) => {
  let start = 0;
  let end = array.length;
  let middle;
  let pos = -1;
  let found = false;
  while (found === false && start <= end) {
    middle = Math.floor((end + start) / 2);

    if (array[middle].amount === searchValue) {
      pos = middle;
      found = true;

      return array[pos];
    }
    if (searchValue < array[middle].amount) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return pos;
};

class HashTable {
  static getKeyByName(name) {
    return name.charCodeAt(0);
  }

  constructor() {
    this.map = new Map();
  }
  add(value) {
    const key = HashTable.getKeyByName(value.name);
    if (!this.map.has(key)) {
      this.map.set(key, new Map());
    }
    this.map.get(key).set(key, value);
    return key;
  }
  find(name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);
    if (!employeesMap) {
      return;
    }
    return Array.from(employeesMap.values()).find((item) => item.name === name);
  }
  removeByName(name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);
    if (!employeesMap) {
      return;
    }
    this.map.set(
      key,
      employeesMap.filter((item) => {
        item.name !== name;
      })
    );
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
};
