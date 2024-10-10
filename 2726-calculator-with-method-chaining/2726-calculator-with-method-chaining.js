class Calculator {
  
  /** 
   * Constructor to initialize the Calculator with an initial value.
   * @param {number} value - The initial value for the calculator.
   */
  constructor(value) {
      this.result = value; // Store the initial value in the result property
  }

  /** 
   * Adds a specified number to the current result.
   * @param {number} value - The value to add to the result.
   * @return {Calculator} - Returns the updated Calculator instance for chaining.
   */
  add(value) {
    this.result += value; // Add the value to the current result
    return this; // Return the current instance for chaining
  }

  /** 
   * Subtracts a specified number from the current result.
   * @param {number} value - The value to subtract from the result.
   * @return {Calculator} - Returns the updated Calculator instance for chaining.
   */
  subtract(value) {
    this.result -= value; // Subtract the value from the current result
    return this; // Return the current instance for chaining
  }

  /** 
   * Multiplies the current result by a specified number.
   * @param {number} value - The value to multiply with the result.
   * @return {Calculator} - Returns the updated Calculator instance for chaining.
   */
  multiply(value) {
    this.result *= value; // Multiply the current result by the value
    return this; // Return the current instance for chaining
  }

  /** 
   * Divides the current result by a specified number.
   * Throws an error if attempting to divide by zero.
   * @param {number} value - The value to divide the result by.
   * @return {Calculator} - Returns the updated Calculator instance for chaining.
   * @throws {Error} - Throws an error if value is zero.
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed"); // Error for division by zero
    }
    this.result /= value; // Divide the current result by the value
    return this; // Return the current instance for chaining
  }
  
  /** 
   * Raises the current result to the power of a specified number.
   * @param {number} value - The exponent to raise the result to.
   * @return {Calculator} - Returns the updated Calculator instance for chaining.
   */
  power(value) {
    this.result **= value; // Raise the current result to the power of the value
    return this; // Return the current instance for chaining
  }
    
  /** 
   * Returns the current result of the calculations.
   * @return {number} - The current result.
   */
  getResult() {
      return this.result; // Return the current result
  }
}
