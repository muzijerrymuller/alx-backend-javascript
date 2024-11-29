import fs from 'fs';
/**
 * Reads and parses student data from a CSV file.
 * This function asynchronously reads the CSV
 * file at the given path, parses its contents,
 * and returns a Promise that resolves to an
 * array of student objects. Each object contains
 * The CSV file should have rows representing
 * individual students, with columns corresponding
 * to the student's first name, last name,
 * and age. The function will process this data
 * into a structured format for easy use in the application.
 * @param {String} dataPath -
 * The path to the CSV file containing student data. This can
 * be a relative or absolute file path, pointing to a well-formatted CSV file.
 * @returns {Promise<Array
 * {firstname: String, lastname: String, age: number}>>}
 * A promise that resolves to
 * an array of student objects, where each object contains:
 *    - `firstname`: The student's first name (String).
 *    - `lastname`: The student's last name (String).
 *    - `age`: The student's age (Number).
 * @example
 * readStudentData("students.csv").then((students) => {
 *   console.log(students);
 *   // Outputs an array of student objects, e.g.:
 *   // [{ firstname: "John", lastname: "Doe", age: 21 }, ...]
 * });
 */

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
