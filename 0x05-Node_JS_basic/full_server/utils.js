import fs from 'fs';
/**
 * Reads and parses the student data from a CSV file.
 * This function takes the path to a CSV file,
 * reads its contents, and returns a promise
 * that resolves to an array of student
 * objects. Each student object contains their
 * corresponding to their first name, last name,
 * and age. The function will parse this
 * data into a structured format.
 * @param {String} dataPath -
 * The path to the CSV file containing student data. This can
 * be either an absolute or relative file path.
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>} A Promise that resolves to an array of student objects, each containin
 *    - `firstname`: The student's first name (String).
 *    - `lastname`: The student's last name (String).
 *    - `age`: The student's age (Number).
 * @example
 * readStudentData("students.csv").then((students) => {
 *   console.log(students);
 *   // Outputs an array of student objects with their details:
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
