// Import the required functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Create and export the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => 
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }))
    );
}
