const mouseRight = '~M';
const mouseLeft = 'M~';
const cheese = 'C';

const blindMice = (_miceAndCheese) => {
  let blinds = 0;
  const miceAndCheese = _miceAndCheese.replace(/\s/g,'');
  const [left, right] = miceAndCheese.split(cheese);

  for (let i = 0; i < left.length; i += 2) {
    if (left.slice(i, i + 2) === mouseLeft) {
      blinds += 1;
    }
  }

  for (let i = 0; i < right.length; i += 2) {
    if (right.slice(i, i + 2) === mouseRight) {
      blinds += 1;
    }
  }
  return blinds
}


const test1 = 'M~~M ~MM~C~MM~M~';
const test2 = '~M~M~MC M~~M';
const test3 = '~M   CM~~M~M';

console.log(blindMice(test1));
console.log(blindMice(test2));
console.log(blindMice(test3));