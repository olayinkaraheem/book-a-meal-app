import UserService from '../services/UserService';

export default class UserController {
  constructor() {
    this.userService = new UserService;
  }

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

  getUser() {
    return async (req, res) => {
      const users = new MealsService();
      const user = await users.getMeal(req.params.id);
      const message = meal.message;
      const status = meal.code;
      if (!user.error) {
        res.status(status).send({ message, data: user.user });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  signupUser() {
    return async (req, res) => {
      const user = new UsersService();
      const newUser = req.body;
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

  updateMeal() {
    //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
    const meal = new MealsService();
    return async (req, res) => {
      const updated_meal = await meal.updateMeal(parseInt(req.params.id, Number), req.body);
      // let message = `Meal with id ${req.params.id} could not be updated`;
      const message = updated_meal.message;
      const status = updated_meal.code;
      if (!updated_meal.error) {
        res.status(status).send({ message, data: updated_meal.meal });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  deleteMeal() {
    const meal = new MealsService();
    return async (req, res) => {
      const deleted_meal = await meal.deleteMeal(parseInt(req.params.id, Number), req.body);
      // let message = `Meal with id ${req.params.id} could not be updated`;
      const message = deleted_meal.message;
      const status = deleted_meal.code;
      if (!deleted_meal.error) {
        res.status(status).send({ message });
      } else {
        res.status(status).send({ message });
      }
    }
  }
}