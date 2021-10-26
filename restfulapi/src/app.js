const express = require("express");
const cors = require("cors");
require("./db/connect");
const Student = require("./models/students");
const studentsRouter = require("./routers/student");
const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(studentsRouter);



app.listen(port, () => {
    console.log("app is run at 4000");
});
