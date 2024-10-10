export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve the promise
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject the promise
      reject(new Error('The fake API is not working currently'));
    }
  });
}
