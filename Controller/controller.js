const user = require("../Model/model");

exports.newUser = async (req, res) => {
    let profile = new user(req.body);
    await profile.save((fail, pass) => {
        if (fail) {
            res.status(500).send(fail);
        } else {
            res.status(201).json(pass);
        }
    });
};

exports.listUser = async (req, res) => {
    user.find({}, (fail, pass) => {
        if (fail) {
            res.status(500).send(fail);
        } else {
            res.status(200).json(pass);
        }
    });
};

exports.deleteUser = async (req, res) => {
    await user.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if (err) {
            res.send(err);
        }
        return res.json({ message: "User Deleted" });
    })
};

exports.updateUser = async (req, res) => {
    user.findByIdAndUpdate(
        req.params.id, {
        $set: req.body
    },
        (err, post) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json({ message: "User Updated" });
            };
        }
    );
};