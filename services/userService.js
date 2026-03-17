const db = require("../database/database");

class UserService {

    createUser(name) {
        db.addUser({ name });
    }

    getAllUsers() {
        return db.getUsers();
    }

}

module.exports = new UserService();