// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

function initializeRooms() {
  return [19, 20, 34].map(size => new ClassRoom(size));
}
