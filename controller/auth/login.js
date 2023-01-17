
const users = require(`../../data/users`)

exports.loginPageController = (req, res) => {
  res.locals = { title: "Dashboard" };

  res.render("auth/auth-login", {
    layout: "./auth/layouts/authLayout",
    message: req.flash("message"),
    error: req.flash("error"),
  });
};

exports.loginController = (req, res) => {
  console.log(users);

  // console.log(req.body);
  const validUser = users.filter(
    (usr) => usr.username === req.body.username && usr.password === req.body.password
  );

  // console.log("logged in user,", validUser);
  // console.log(validUser);
  if (validUser["length"] === 1) {
    // Assign value in session
    sess = req.session;
    sess.user = validUser;

    res.redirect("/admin");
  } else {
    req.flash("error", "Incorrect email or password!");
    res.redirect("/auth/login");
  }
};
