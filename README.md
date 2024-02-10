1. npm init -y
2. node mon install


### -----MERN Tutorial #4: Express Routers 🔥 Creating and Organizing Routes-----
1. Express Routes
```
// This structure allows you to modularize your routes and middleware, making your code more organized and maintainable.

const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send("Welcome to Best Mern series by Thapa Technical using router")
})

router.route("/register").get((req, res)=>{
    res.status(200).send("Welcome to Registration Page")
})

module.exports = router;
```