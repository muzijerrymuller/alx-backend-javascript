jerrymuller

# JavaScript ES6 Basics

This repository contains various JavaScript functions designed to demonstrate the principles of ES6 syntax, including block scoping, arrow functions, default parameters, and more. Below is a summary of each task along with explanations of the functions involved.

## Table of Contents

1. [Task 0: Const or Let](#task-0-const-or-let)
2. [Task 1: Block Scope](#task-1-block-scope)
3. [Task 2: Arrow Functions](#task-2-arrow-functions)
4. [Task 3: Parameter Defaults](#task-3-parameter-defaults)
5. [Task 4: Rest Parameter Syntax for Functions](#task-4-rest-parameter-syntax-for-functions)
6. [Task 5: The Wonders of Spread Syntax](#task-5-the-wonders-of-spread-syntax)
7. [Task 6: Template Literals](#task-6-template-literals)
8. [Task 7: Object Property Value Shorthand Syntax](#task-7-object-property-value-shorthand-syntax)
9. [Task 8: Computed Property Names](#task-8-computed-property-names)
10. [Task 9: ES6 Method Properties](#task-9-es6-method-properties)
11. [Task 10: For...of Loops](#task-10-forof-loops)
12. [Task 11: Iterator](#task-11-iterator)
13. [Task 12: Create a Report Object](#task-12-create-a-report-object)

## Task 0: Const or Let

**File:** `0-constants.js`

This task involves modifying functions to use `const` and `let` for variable declaration. 

- `taskFirst()`: Returns a string that states a preference for `const`.
- `taskNext()`: Appends the output of `getLast()` to another string indicating a preference for `let`.

**Example Usage:**
```javascript
console.log(`${taskFirst()} ${taskNext()}`); // Output: I prefer const when I can. But sometimes let is okay   console.log(taskBlock(true));  // Output: [true, false]
console.log(taskBlock(false)); // Output: [false, true]const neighborhoodsList = new getNeighborhoodsList();
console.log(neighborhoodsList.addNeighborhood('Noe Valley')); // Output: ['SOMA', 'Union Square', 'Noe Valley']console.log(getSumOfHoods(34)); // Output: 142  console.log(returnHowManyArguments("Hello", "Holberton", 2020)); // Output: 3  console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')); // Output: ['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o'] console.log(getBudgetObject(400, 700, 900)); 
// Output: { income: 400, gdp: 700, capita: 900 }
 console.log(getBudgetForCurrentYear(2100, 5200, 1090)); 
// Output: { 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }const fullBudget = getFullBudgetObject(20, 50, 10);
console.log(fullBudget.getIncomeInDollars(fullBudget.income)); // Output: $20 console.log(createEmployeesObject("Software", ["Bob", "Sylvie"])); 
// Output: { Software: [ 'Bob', 'Sylvie' ] }
 console.log(createEmployeesObject("Software", ["Bob", "Sylvie"])); 
// Output: { Software: [ 'Bob', 'Sylvie' ] }
