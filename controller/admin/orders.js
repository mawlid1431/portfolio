
const orders = require(`../../data/orders`)

exports.odersController = (req, res) => {
    res.locals = {
        title: "orders",
        loggedInUser: req.session.user[0],
        orders: orders,
    };
    res.render("./admin/orders", { layout: "./admin/layouts/adminLayout", });
}


exports.odervbbn = (req, res) => {
console.log(res.body);
    orders.push(req.body)
    res.redirect("/")

}