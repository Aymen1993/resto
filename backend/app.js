// ------------------------------Module Importation----------------------------------------//
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt")
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// connect APP to DB (RestoVenus)
mongoose.connect('mongodb://127.0.0.1:27017/restoVenusDB');

// ------------------------------Express Application----------------------------------------//
// Create express apllication 
const app = express();

// ------------------------------Mongoose Importation----------------------------------------//

const Plat = require("./models/plat");
const Chef = require("./models/chef");
const User = require("./models/user");


// send JSON responses
app.use(bodyParser.json());
// Get object from request 
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // * tous les FE(react/angular) origin des requests reusable
    //http://localhost:3000 if you want only one server

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// configauration path
app.use('/plats', express.static(path.join('backend/images/plats')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = (path) => multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        // date.now()=> time stamp  unique img name
        cb(null, imgName);
    }
});

// ------------------------------Business Logic----------------------------------------//

//          _____________________________User___________________________
//Business Logic : Get All Users
app.get("/users", (req, res) => {
    console.log("here into BL:Get All Users");
    User.find().then(
        (docs) => {
            res.json({ users: docs });
        });
});
//Business Logic : Signup
app.post("/users/signup", (req, res) => {
    bcrypt.hash(req.body.pwd, 8).then(
        (cryptedPwd) => {
            console.log("Here is Pwd crypted", cryptedPwd);
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                tel: req.body.tel,
                pwd: cryptedPwd,
                gender: req.body.gender,
                role: req.body.role,
                status: req.body.status
            });
            user.save(
                (err, doc) => {
                    if (err) {
                        if (err.errors.email && !err.errors.tel) {
                            res.json({ message: "Email exist", emailExist: true, telExist: false });
                        } else if (!err.errors.email && err.errors.tel) {
                            res.json({ message: "Tel exist", emailExist: false, telExist: true })
                        } else {
                            res.json({ message: "Email & Tel exist", emailExist: true, telExist: true })
                        }
                    } else {
                        res.json({ message: "User added with success" });
                    }
                });
        });
});
//Business Logic : Login
app.post("/users/login", (req, res) => {
    console.log("here into BL:login", req.body);
    User.findOne({ email: req.body.email }).then(
        (data) => {
            if (data) {
                bcrypt.compare(req.body.pwd, data.pwd).then(
                    (response) => {
                        if (response) {
                            res.json({ role: data.role, id: data._id });
                        } else {
                            res.json({ role: "error" });
                        }
                    }
                )
            } else {
                res.json({ role: "error" });
            }
        });
});
//Business Logic:Edit User
app.put("/users", (req, res) => {
    console.log("here into BL:Edit User", req.body);
    // bcrypt.hash(req.body.pwd, 8).then(
    //     (cryptedPwd) => {
    //         console.log("Here is Pwd crypted", cryptedPwd);

    //         let user =req.body;
    //         user.pwd=cryptedPwd;
    //         User.updateOne({ _id: user._id }, user).then(
    //             (response) => {
    //                 console.log('here is res',response);
    //                 if (response.modifiedCount == 1) {
    //                     res.json({ message: "User is edited with success" });
    //                 } else {
    //                     res.json({ message: "Error" });
    //                 }
    //             });
    //     });
});

//Business Logic:Get User By Id
app.get("/users/:id", (req, res) => {
    let id = req.params.id
    console.log("here into BL:Get User", id);
    User.findOne({ _id: id }).then(
        (doc) => {
            doc ? res.json({ user: doc }) : res.json({ message: "User does not exist" });
        });
});
// Business Logic : Delete User
app.delete("/users/:id", (req, res) => {
    console.log("Here into BL:Delete id", req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        (response) => {
            if (response.deletedCount == 1) {
                res.json({ isDeleted: true });
            } else {
                res.json({ isDeleted: false });
            }
        });
});
//          _____________________________Plat____________________________
//Business Logic : Get All Plats
app.get("/plats", (req, res) => {
    console.log("here into BL:Get All Plats");
    Plat.find().then((
        docs) => {
        console.log("here into BL:Get All Plats",docs);
        
        res.json({ plats: docs });
    });
});

//Business Logic : Add Plat
app.post("/plats", multer({ storage: storageConfig('backend/images/plats') }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    console.log("here into BL:Add Plat");

    let plat = new Plat({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        photo: url + '/images/plats/' + req.file.filename
    });
    console.log("here is plat", plat);
    plat.save((err, doc) => {
        console.log("Here is the error", err);
        console.log("Here is the doc", doc);
        if (doc) {
            res.json({ message: "Plat added with success" });
        } else {
            res.json({ message: "Error" })
        }
    });
});

//Business Logic:Edit Plat
app.put("/plats", multer({ storage: storageConfig('backend/images/plats') }).single('img'), (req, res) => {
    console.log("here into BL:Edit Plat",req.body);
    const url = req.protocol + '://' + req.get('host');
    let plat=req.body;
    plat.photo =  url + '/images/plats/' + req.file.filename;
    console.log("here edited plat",plat);
    Plat.updateOne({ _id: req.body._id }, plat).then(
        (response) => {
            console.log("here is the response", response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Plat is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//Business Logic:Get Plat By Id
app.get("/plats/:id", (req, res) => {
    let id = req.params.id;
    console.log("here into BL:Get Plat", id);
    Plat.findOne({ _id: id }).then(
        (doc) => {
            console.log("here plat", doc);
            doc ? res.json({ plat: doc }) : res.json({ message: "Plat does not exist" });
        });
});

//Business Logic:Delete Plat By Id
app.delete("/plats/:id", (req, res) => {
    console.log("Here into BL:Delete id", req.params.id);
    Plat.deleteOne({ _id: req.params.id }).then(
        (response) => {
            if (response.deletedCount == 1) {
                res.json({ isDeleted: true });
            } else {
                res.json({ isDeleted: false });
            }
        });
});
//Business Logic:search Plats By name or price
app.post("/plats/search", (req, res) => {
    console.log("here into BL:search plats", req.body);
    Plat.find({ $or: [{ name: { $regex: new RegExp(req.body.name, "i") } }, { price: req.body.price }] }).then(
        (docs) => {
            console.log("Here all Plats", docs);
            res.json({ plats: docs });
        });
});
//          ______________________________Chef_____________________________
//Business Logic : Get All Chefs
app.get("/chefs", (req, res) => {
    console.log("here into BL:Get All Chefs");
    Chef.find().then(
        (docs) => {
            res.json({ chefs: docs })
        });
});
//Business Logic : Add Chef
app.post("/chefs", (req, res) => {
    console.log("here into BL:Add Chef", req.body);
    let chef = new Chef({
        name: req.body.name,
        speciality: req.body.speciality,
        experience: req.body.experience
    });
    chef.save((err, doc) => {
        console.log("Here is err", err);
        console.log("Here is doc", doc);
        if (doc) {
            res.json({ message: "Chef is added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
//Business Logic:Edit Chef
app.put("/chefs", (req, res) => {
    console.log("here into BL:Edit Chef", req.body);
    Chef.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log("here is the response", response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Chef is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//Business Logic:Get Chef By Id
app.get("/chefs/:id", (req, res) => {
    let id = req.params.id
    console.log("here into BL:Get Chef", id);
    Chef.findOne({ _id: id }).then((doc) => {
        doc ? res.json({ chef: doc }) : res.json({ message: "Chef does not exist" });
    });
});
//Business Logic:Delete Chef By Id
app.delete("/chefs/:id", (req, res) => {
    console.log("Here into BL:Delete id", req.params.id);
    Chef.deleteOne({ _id: req.params.id }).then(
        (response) => {
            if (response.deletedCount == 1) {
                res.json({ isDeleted: true });
            } else {
                res.json({ isDeleted: false });
            }
        });
});

// ------------------------------App Exportation----------------------------------------//
//Make app importable from another files
module.exports = app;