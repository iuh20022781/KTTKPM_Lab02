const userController = require("./controllers/userController");

userController.create("Hoang");
userController.create("Anh");

const users = userController.getUsers();

console.log(users);