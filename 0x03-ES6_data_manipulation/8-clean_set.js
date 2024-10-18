export default function cleanSet(set, startString) {
  // Initialize an array to hold the filtered values
  const filteredValues = [];

  // Check if startString is not an empty string
  if (startString && typeof startString === 'string') {
    // Iterate through the Set
    for (const value of set) {
      // Check if the value starts with startString
      if (value.startsWith(startString)) {
        // Append the rest of the string (after startString) to the array
        filteredValues.push(value.slice(startString.length));
      }
    }
  }

  // Join the filtered values with '-' and return the result
  return filteredValues.join('-');
}
