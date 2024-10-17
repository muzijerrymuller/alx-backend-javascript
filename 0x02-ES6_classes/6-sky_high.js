// Import Building from 5-building.js
const Building = require('./5-building.js');

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);
    // Store the number of floors in an underscore attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

module.exports = SkyHighBuilding;
