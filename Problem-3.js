function generateConditionalOddSeries(a) {
  const result = [];
  for (let i = 1; i <= 2 * a - 1; i += 2) {
    result.push(i);
  }
  return result;
}

const a = 5;
console.log("Output:", generateConditionalOddSeries(a).join(', '));