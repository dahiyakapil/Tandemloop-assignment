
class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : NaN;
      default:
        return NaN;
    }
  }
}

// Example usage:
const varOcg = new Calculator(10, 5, 'multiply');
console.log("Result:", varOcg.calculate());
