function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the given length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to work with the buffer
  const dataView = new DataView(buffer);

  // Check if the position is valid within the ArrayBuffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  // Return the DataView (or the buffer)
  return dataView;
}
