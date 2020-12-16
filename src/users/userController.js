let userServies = require("./userServices");

let userController = {
  createUser: async function (req, res) {
    const user = req.body.user;
    if (!user.name || !user.email || !user.password) {
      res.status(400).json({ msg: "name, email, password is required" });
    }
    try {
      const createUser = await userServies.createUser(user);
      return res.status(201).json({ user: createUser.toJSON() });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },

  listUsers: async function (req, res, next) {
    try {
      const listUsers = await userServies.listUsers();
      return res.json({ users: listUsers });
    } catch (error) {
      next(error);
    }
  },
  showMe: async function (req, res, next) {
    const id = req.user._id;
    try {
      let user = await userServies.showUser(id);
      return res.json({ user });
    } catch (error) {
      next(error);
    }
  },
  showUser: async function (req, res, next) {
    const id = req.params.id;
    try {
      let user = await userServies.showUser(id);
      return res.json({ user });
    } catch (error) {
      next(error);
    }
  },
  updateUser: async function (req, res, next) {
    let id = req.params.id;
    let user = req.body.user;

    try {
      const updateUser = await userServies.updateUser(id, user);
      return res.json({ user: updateUser });
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteUser = await userServies.deleteUser(id);
      return res.status(201).json({ msg: "User has been deleted" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
