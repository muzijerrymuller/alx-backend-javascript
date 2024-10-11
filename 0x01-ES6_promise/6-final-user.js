import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Break down promises into individual variables for readability
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use await with Promise.allSettled to wait for both promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  // Map over the results to return the desired structure
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  }));
}
