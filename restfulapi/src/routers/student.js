const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.get("/", (req, res) => {
  res.send("this is home page");
});

// post student document using sync function
// router.post("/student", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user
//         .save()
//         .then(() => {
//             res.status(200).send(user);
//         })
//         .catch((err) => res.status(400).send(err));
// });

// post student document using async function
router.post("/student", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createStudent = await user.save();
    res.status(200).send(createStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get students document
router.get("/student", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get specific student document
router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.status(200).send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//find by id and delete student document
router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudentData = await Student.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(404).send();
    }
    res.status(200).send(deleteStudentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// find by id and update student document
router.patch("/student/:id", async (req, res) => {
  try {
    const updateId = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(
      { _id: updateId },
      req.body,
      {
        new: true,
        // you can see new update document
      }
    );
    if (!updateId) {
      return res.status(404).send();
    }
    res.status(200).send(updateStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update one
router.patch("/student/:id", async (req, res) => {
  try {
    const updateId = req.params.id;
    const updateStudent = await Student.updateOne(
      { email: updateId },
      req.body,
      {
        new: true,
        //^ you can see new update document
      }
    );
    if (!updateId) {
      return res.status(404).send();
    }
    res.status(200).send(updateStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
