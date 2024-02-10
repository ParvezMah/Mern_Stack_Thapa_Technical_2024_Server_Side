const express = require("express");
const app = express();
const router = require("./router/auth_router");

// Mount the Router :  Mounting a middleware function at this path
app.use("/api/auth", router);

// app.get("/", (req, res)=>{
//     res.status(200).send("Welcome to world best mern series by Thapa Technical");
// })


// app.get("/register", (req, res)=>{
//     res.status(200).send("Welcome to Registration Page");
// })

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
})