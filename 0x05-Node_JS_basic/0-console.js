/**
 * displayMessage** - A simple and elegant utility for logging messages.
 *
 * @function
 * @param {string} msg - The message to display. Must be a valid string.
 *
 * @example
 * // Logs "Hello, world!" to the console
 * displayMessage("Hello, world!");
 *
 * @description
 * This function is a lightweight, reusable utility for displaying messages
 * to the console via standard output (STDOUT). Perfect for quick debugging
 * or providing meaningful runtime information.
 *
 * - Designed with simplicity in mind.
 * - Ensures clear and consistent logging in any application.
 *
 * @author
 * Bezaleel Olakunori 
 * [GitHub Profile](https://github.com/B3zaleel)
 *
 * @module displayMessage
 * @version 1.0.0
 */


const displayMessage = (msg) => {
  console.log(msg);
};

module.exports = displayMessage;
