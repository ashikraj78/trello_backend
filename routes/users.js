var express = require("express");
var router = express.Router();
var userController = require("../src/users/userController");
var authController = require("../src/auth/authcontroller");
var authMiddleware = require("../middleware/authMiddleware");

/* CREATE users  */
router.post("/", userController.createUser);

/* GET users listing. */
router.get("/", userController.listUsers);
router.get("/me", authMiddleware.identifyUser, userController.showMe);
router.get("/:id", userController.showUser);

/* UPDATE users  */
router.put("/:id", userController.updateUser);

/* DELETE users  */
router.delete("/:id", userController.deleteUser);

// login
router.post("/login", authController.loginUser);

module.exports = router;
