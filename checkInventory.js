const checkInventory = (I, R) => {
  const ids = [];
  let intersection = [];
  Object.keys(R).forEach(key => {
    R[key] = R[key].replace(/\s/g,'');
  })
  const entries = Object.entries(R);
  entries.forEach(entry => {
    if (I[entry[0]] && I[entry[0]][entry[1]]) {
      ids.push(I[entry[0]][entry[1]]);
    }
  })
  if (ids.length > 1) {
    intersection = ids.reduce((a, b) => a.filter(c => b.includes(c)));
  } else if (ids.length === 1 && entries.length === 1) {
    intersection = [...new Set(...ids)];
  } else {
    intersection = [];
  }
  return intersection;
}

const Inventory = {
  color: {
    blue: [123, 456, 789],
    red: [234, 567, 890]
  },
  size: {
    small: [123, 234],
    medium: [456, 789],
    large: [567, 890]
  }
};
const R1 = { color: 'red ', size: 'small ' }; // should return [234]
const R2 = { color: 'red ' }; // should return [234, 567, 890]
const R3 = { color: 'green' }; // should return []

console.log(checkInventory(Inventory, R1));
console.log(checkInventory(Inventory, R2));
console.log(checkInventory(Inventory, R3));