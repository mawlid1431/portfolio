exports.dashboardPageController = (req, res) => {

  res.locals = { title: "Dashboard", loggedInUser: req.session.user[0] };
  res.render("./admin/dashboard", { layout: "./admin/layouts/adminLayout", });
};
