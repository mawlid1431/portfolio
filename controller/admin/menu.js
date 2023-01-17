
const menu = require(`../../data/menu`)

// const { PrismaClient } = require("@prisma/client");


// const { } = new PrismaClient();

exports.menuController = (req, res) => {
    res.locals = {
        title: "menu",
        loggedInUser: req.session.user[0],
        menu: menu,
    };
    res.render("./admin/menu", { layout: "./admin/layouts/adminLayout", });
};


exports.addMenucontroller = (req, res) => {
    res.locals = {
        title: "addMenu",
        loggedInUser: req.session.user[0],

    };

    // res.render(`admin/addUsers`)
    res.render(`admin/addMenu`, { layout: "./admin/layouts/adminLayout" });
};








//  update qaybta koowaad

exports.upadatemenucontroller = (req, res) => {
    res.locals = {
        title: "upadate-menu",
        loggedInUser: req.session.user[0],
        menu: menu
    };
    res.render(`admin/upadate-menu`, { layout: "./admin/layouts/adminLayout" });
};

// update qaybta labaad


exports.deletecofeeController = (req, res) => {
    const id = req.params.id;

    menu = menu.filter((menu) => menu.id !== id);

    res.json();
};

exports.addmenuform = async (req, res) => {
    menu.push(req.body);
    const createdUser = await menu.create({ data: req.body })
    console.log(createdUser);


    res.render(`/admin/menu`);
};



// exports.UpdatemenuController = async (req, res) => {
//     const updatemenu = await Menu.update({
//       where: {
//         id: Number(req.params.id),
//       },
//       data: req.body,
//     });
//     // console.log(data);
//     res.json();
//   };


















exports.updatedcontrol = (req, res) => {

    const id = req.params.id;
    menu: menu.filter((menu) => menu.id !== id)
    res.json();

}


// fomka meni update 


exports.updatedformdata = (req, res) => {

    const id = req.params.id;

    const targetmenu = menu.filter((menu) => menu.id === id)
    res.locals = {
        title: "menu",
        loggedInUser: req.session.user[0],
        menu: targetmenu[0]

    };
    res.render(`admin/upadate-menu`, { layout: "./admin/layouts/adminLayout" });
}


exports.updateHamse = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    for (const menu of menu) {

        if ((menu.id === id)) {

            menu.id = data.id,
                menu.productName = data.productName,
                menu.price = data.price,
                menu.discount = data.discount
            menu.image = data.image
            menu.detail = data.detail
            break;
        }
    }
    res.json();
}







