const express = require('express')
// const controller = require('../controllers/controller')
const {
  newStudent,
  allStudent,
  deleteAll,
  updateStudent,
  getOneStudent,
  delOneStudent,
} = require('../controllers/controller')

const router = express.Router()

// API ROUTES
// router.get("/students", imageUpload, allStudent);
// router.post("/students", imageUpload, newStudent);

router.get("/students", allStudent);
router.post("/students", newStudent);
router.delete("/students", deleteAll);

router.put("/students/:id", updateStudent);
router.delete("/students/:id", delOneStudent);
router.get("/students/:id", getOneStudent);


module.exports = router;