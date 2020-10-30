const { Router } = require("express");
const EventController = require("./controllers/EventController");
const PostController = require("./controllers/PostController");
const ProjectController = require("./controllers/ProjectController");
const SessionController = require("./controllers/SessionController");
const SubscribeController = require("./controllers/SubscribeController");
const UserController = require("./controllers/UserController");

const routes = Router();

// USER AND SESSIONS
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.get("/users:/id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.get("/projects/:id", ProjectController.show);
routes.put("/projects/:id", ProjectController.update);
routes.delete("/projects/:id", ProjectController.delete);

// routes.get('/sessions', SessionController.get)
// routes.post('/sessions', SessionController.store)

// // NEWSLETTER
// routes.post('/subscribe', SubscribeController.store)

// // PROJECTS
// routes.get('/projects', ProjectController.index)
// routes.post('/projects', ProjectController.store)
// routes.get('/projects/:id', ProjectController.show)
// routes.put('/projects/:id', ProjectController.update)
// routes.delete('/projects/:id', ProjectController.delete)

// // POSTS OR NEWSLETTERS
// routes.get('/posts', PostController.index)
// routes.post('/posts', PostController.store)
// routes.get('/posts/:id', PostController.show)
// routes.put('/posts/:id', PostController.update)
// routes.delete('/posts/:id', PostController.delete)

// // EVENTS
// routes.get('/events', EventController.index)
// routes.post('/events', EventController.store)
// routes.put('/events/:id', EventController.update)
// routes.delete('/events/:id', EventController.delete)

module.exports = routes;
