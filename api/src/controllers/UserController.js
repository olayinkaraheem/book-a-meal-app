import UserService from '../services/UserService';
import bcrypt from 'bcrypt'

export default class UserController {
  // constructor() {
  //   this.userService = new UserService;
  // }

  // Get all users on the system
  getAll() {
    return async (req, res) => {
      const user = new UserService();
      const all_users = await user.getAll();
      const message = all_users.message;
      const status = all_users.code;
      if (!all_users.error) {
        res.status(status).send({ message, data: all_users.users });
      } else {
        res.status(status).send({ message });
      }
    }
  }
  // Get a single user
  getUser() {
    return async (req, res) => {
      const users = new UserService();
      const user = await users.getUser(req.params.id);
      const message = meal.message;
      const status = meal.code;
      if (!user.error) {
        res.status(status).send({ message, data: user.user });
      } else {
        res.status(status).send({ message });
      }
    }
  }
  // Log a user in
  login() {
    return async (req, res) => {
      const users = new UserService();
      const { username, password } = req.body;
      const user = await users.getUserByUsername(username); // get user by username not id
      const message = user.message;
      const status = user.code;

      if ( !user.error ) {
        if(user.user.id) {
          // const passwordCheck = bcrpyt.compare(password, user.user.password, (err, result)=> result );
          const passwordCheck = bcrypt.compareSync(password, user.user.password);
          // if ((user.user.username !== req.body.username) && passwordCheck == true ){
          if ( passwordCheck == true ){
            res.status(status).send({ message, data: user.user });
          } else {
            res.status(status).send({ message: 'Invalid password. Please try again.' })
          }
        } else {
          res.status(status).send({ message });
        }
      } else {
        res.status(status).send({ message });
      }
    }
  }
  // Signup a user
  signupUser() {
    return async (req, res) => {
      const user = new UserService();
      let { password } = req.body;
      const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8)); // encrypt password here
      req.body.password = encryptedPassword;
      const newUser = Object.assign({}, { ...req.body });
      const user_response = await user.addUser(newUser);
      const message = user_response.message;
      const status = user_response.code;
      if (!user_response.error) {
        res.status(status).send({ message, data: user_response.user });
      } else {
        res.status(status).send({ message });
      }
    }
  }

}