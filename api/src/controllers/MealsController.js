import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(){
    this.mealsService = new MealsService;
  }
  
  getAll() {
    return async (req, res) => {
      const meal = new MealsService();
      const all_meals = await meal.getAll();
      const message = all_meals.message;
      const status = all_meals.code;
      if(!all_meals.error){
        res.status(status).send({ message, data: all_meals.meals });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  getMeal() {
    return async (req, res) => {
      const meals = new MealsService();
      const meal = await meals.getMeal(req.params.id);
      const message = meal.message;
      const status = meal.code;
      if (!meal.error) {
        res.status(status).send({ message, data: meal.meal });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  addMeal() {
    return async (req, res) => {
      const meal = new MealsService();
    
      const newMeal = req.body;
      const meal_response = await meal.addMeal(newMeal);
      const message = meal_response.message;
      const status = meal_response.code;
      if (!meal_response.error) {
        res.status(status).send({ message, data: meal_response.meal });
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