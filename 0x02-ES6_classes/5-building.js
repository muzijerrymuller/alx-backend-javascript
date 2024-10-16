export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("sqft must be a positive number");
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
