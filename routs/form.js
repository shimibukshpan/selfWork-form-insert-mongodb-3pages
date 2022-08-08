const express = require("express");
const router = express.Router();

const   User = require("../databases/mongo");

router.get('/', (req, res) =>{
    let user = new User(req.query);
    user.save();
    console.log(req.query)
    res.render('form');
    
});

router.post('', (req, res) =>{
    let user = new User(req.body);
    user.save();
    console.log(req.body)
    res.render("savedForm",{name:req.body.firstname, lastname:req.body.lastname});
    
});
module.exports = router;