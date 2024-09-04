// Function to perform basic calculator operations
function calculate(num1, num2, operation) {
    // Validate the input numbers
    if (num1 === null || num2 === null || num1 === undefined || num2 === undefined) {
        return "Error: Invalid numbers provided.";
    }

    // Perform the operation based on the input string
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            // Handle division by zero
            if (num2 === 0) {
                return "Error: Division by zero.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operation provided.";
    }
}

// Test cases
console.log(calculate(5, 3, 'add'));       // Output: 8
console.log(calculate(10, 2, 'divide'));   // Output: 5
console.log(calculate(7, 2, 'multiply'));  // Output: 14
console.log(calculate(15, 5, 'subtract')); // Output: 10
console.log(calculate(10, 0, 'divide'));   // Output: "Error: Division by zero."
console.log(calculate(10, 5, 'modulus'));  // Output: "Error: Invalid operation provided."


