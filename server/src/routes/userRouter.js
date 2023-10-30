const express = require("express");
const router = express.Router();

const { findAllUserContoller } = require("../controllers/userController");

console.log(findAllUserContoller);
router.get("/", findAllUserContoller);

module.exports = router;
