'use strict';
module.exports = function (app) {
    var abc = require("../Controller/controller");
    app
        .route("/user")
        .post(abc.newUser)
        .get(abc.listUser);
    app
        .route("/user/:id")
        .delete(abc.deleteUser)
        .put(abc.updateUser);
};