import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
/**
 * Binds the routes to the appropriate handler
 * functions in the given Express application.
 * This function is responsible for setting up
 * all the necessary routes for the application,
 * linking each route to its corresponding handler,
 * so that the Express server can respond
 * to requests based on the incoming HTTP methods
 * (GET, POST, etc.) and the route paths.
 * It is typically used during the application
 * setup phase to ensure all routes are
 * correctly configured and ready to handle incoming requests.
 * @param {Express} app -
 * The Express application instance to which the routes will be bound.
 * The app object is typically created using `express()` and is
 * used to define routes, middleware, and other server-related
 * logic.
 * @example
 * const express = require('express');
 * const app = express();
 * bindRoutes(app);  // Bind all routes to the app
 */


const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
