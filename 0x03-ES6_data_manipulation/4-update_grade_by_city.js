export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // Find the grade for the current student in newGrades
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Return the student object with the updated grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A', // If grade found, use it; else, use 'N/A'
      };
    });
}
