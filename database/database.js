class Database {

    constructor() {

        if (Database.instance) {
            return Database.instance;
        }

        console.log("Database connected...");

        this.data = [];

        Database.instance = this;
    }

    addUser(user) {
        this.data.push(user);
    }

    getUsers() {
        return this.data;
    }
}

module.exports = new Database();