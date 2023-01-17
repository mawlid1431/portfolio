// let users = require(`../../data/users`);

const { PrismaClient } = require("@prisma/client");
// const { name } = require("ejs");

const { user } = new PrismaClient();

exports.listOfusercon = async (req, res) => {
    const users = await user.findMany();

    res.locals = {
        title: "users",
        loggedInUser: req.session.user[0],
        users: users,
    };

    res.render("admin/users", { layout: "./admin/layouts/adminLayout" });
    // res.render("admin/users", { users: users });
};

exports.addUsercontroller = (req, res) => {
    res.locals = {
        title: "addUsers",
        loggedInUser: req.session.user[0],
    };

    // res.render(`admin/addUsers`)
    res.render(`admin/addUsers`, { layout: "./admin/layouts/adminLayout" });
};
exports.adduserform = async (req, res) => {
    // users.push(req.body);
    // const createdUser = await user.create({ data: req.body })
    // console.log(createdUser);
    // res.redirect(`/admin/users`);
};
exports.deleteidcon = async (req, res) => {
    await user.delete({
        where: {
            id: Number(req.params.id),
        },
    });

    res.json();
};

exports.updateUser = (req, res) => {
    let id = req.params.id;
    const targetuser = users.filter((filter) => filter.id === id);
    // console.log(targetuser);
    res.locals = {
        title: "users",
        loggedInUser: req.session.user[0],
    };

    res.render(`admin/update-user`, {
        user: targetuser[0],
        layout: "./admin/layouts/adminLayout",
    });
};

exports.updateduserscontrollers = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    for (const user of users) {
        if (user.id === id) {
            user.id = data.id;
            user.username = data.username;
            user.email = data.email;
            user.phone = data.phone;
            user.password = data.password;
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.role = data.role;
            break;
        }
    }
    res.json();
};
