const contacts = require(`../../data/contacts`)

exports.contactcontroller = (req, res) => {
    res.locals = {
        title: "contacts",
        loggedInUser: req.session.user[0],
        contacts: contacts,
    };
    res.render("admin/contacts", { layout: "./admin/layouts/adminLayout", });
}



exports.contactcontroller11 = (req, res) => {

    contacts.push(req.body)
    res.redirect("/contact")

}

exports.odervbbn = (req, res) => {
    console.log(res.body);
    orders.push(req.body)
    res.redirect("/")

}