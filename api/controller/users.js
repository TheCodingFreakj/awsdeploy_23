const { User, getUsers } = require("../model/User");

exports.postSignup = async (req, res, next) => {
  const { username, password, email, bio } = req.body;
  try {
    const user = new User({ username, password, email, bio });
    console.log("User", user);
    const result = await user.createUser();
    res.send(user);
  } catch (error) {
    console.log(error.message);
    const errorToThrow = new Error();
    switch (error?.code) {
      case "23505":
        errorToThrow.message = "User already exists";
        errorToThrow.statusCode = 403;
        break;
      default:
        errorToThrow.statusCode = 500;
    }
    //pass error to next()
    next(errorToThrow);
  }
};

exports.getUsers = async (req, res, next) => {
  try {

    const result = await getUsers();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    const errorToThrow = new Error();
    switch (error?.code) {
      case "23505":
        errorToThrow.message = "User already exists";
        errorToThrow.statusCode = 403;
        break;
      default:
        errorToThrow.statusCode = 500;
    }
    //pass error to next()
    next(errorToThrow);
  }
};
