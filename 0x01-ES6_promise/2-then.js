export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve the promise and log the message
      const response = {
        status: 200,
        body: 'Success',
      };
      console.log('Got a response from the API'); // Log the response message
      resolve(response);
    } else {
      // If success is false, reject the promise with an empty error object
      reject(new Error('')); // Return an empty error message
    }
  });
}
