export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread syntax to merge the departments and employees into allEmployees
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}
