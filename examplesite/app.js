const express = require("express")
const cwd = process.cwd();
const path = require("path")
const router = express.Router()

const app = express();

app.use("/",  express.static(path.join(cwd, "public")));
app.use("/dist/sekx.js",  express.static(path.join(cwd, "../dist/sekx.js")));
router.get("/", (req, res)=>res.sendFile(path.join(cwd, "index.html")))


app.use("/", router)
app.listen(4000, ()=> console.log("started at %s", 4000))