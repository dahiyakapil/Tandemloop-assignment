
function generateOddSeries(a) {
  const result = [];
  let num = 1;
  for (let i = 0; i < a; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}


const a = 4;
console.log("Output:", generateOddSeries(a).join(', '));
