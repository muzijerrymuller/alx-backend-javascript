import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Call both functions and collectively resolve their promises
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      // Destructure the responses to get the needed data
      const [photoResponse, userResponse] = responses;

      // Log the body, firstName, and lastName to the console
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log an error message if there's an issue with any of the promises
      console.error('Signup system offline');
    });
}
