const userController = require("./controllers/userController");

userController.create("Tan");
userController.create("Phat");

const users = userController.getUsers();

console.log(users);