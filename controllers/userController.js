const userService = require("../services/userService");

class UserController {

    create(reqName) {
        userService.createUser(reqName);
    }

    getUsers() {
        return userService.getAllUsers();
    }

}

module.exports = new UserController();