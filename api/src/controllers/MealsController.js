import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(){
    this.mealsService = new MealsService;
  }
  
  getAll() {
    const meal = new MealsService();
    return (req, res) => {
      let all_meals = null;
      meal.getAll()
      .then( (meals) => {
        all_meals = meals
      })
      .catch( (err) => {
        console.log( err )
      })
      console.log(all_meals);
      let message = 'No meal option available';
      let status = 204;
      if(all_meals.length){
        message = 'Meals fetched successfully';
        status = 200;
      }
      res.status(status).send({ message, data: all_meals });
    }
  }

  getMeal() {
    const meals = new MealsService();
    return (req, res) => {
      const meal = meals.getMeal(req.params.id);
      let message = `Cannot get meal with id ${req.params.id}`;
      let response_status = 403;
      if(meal.id) {
        message = 'Meal fetch request processed successfully';
        response_status = 200;
      }      
      res.status(response_status).send({ message, data: meal });
    }
  }

  addMeal() {
    return (req, res) => {
      const meal = new MealsService();
      // const { name, size, price, currency, caterer_id, active_today, active } = req.body;
      // const newMeal = {
      //   id: lastMealInDatabase.id + 1,
      //   name ,
      //   size ,
      //   price ,
      //   currency ,
      //   caterer_id ,
      //   active_today ,
      //   active ,
      //   rating: 0,
      //   updated_at: 0,
      //   updated_by: 0,
      //   created_at: new Date(),
      // };
      const newMeal = req.body;
      const meal_response = meal.addMeal(newMeal);
      let message = `New meal failed to add to list of available meal options`;
      let response_status = 400;
      if(meal_response.id){
        message = `New meal with id ${meal_response.id} added successfully`;
        response_status = 200;
      }
      res.status(response_status).send({ message, data: meal_response });
    }
  }

  updateMeal() {
    //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
    const meal = new MealsService();
    return (req, res) => {
      const updated_meal = meal.updateMeal(parseInt(req.params.id, Number), req.body);
      let message = `Meal with id ${req.params.id} could not be updated`;
      let response_status = 403; 
      if(updated_meal.id){
        message = `Meal with id ${req.params.id} updated successfully`;
        response_status = 200;
      }
      res.status(response_status).send({ message, data: updated_meal });
    }
  }

  deleteMeal() {
    const meal = new MealsService();
    return (req, res) => {
      const deleted_meal = meal.deleteMeal(req.body.caterer_id, req.params.id);
      let message = `Meal with id ${req.params.id} could not be deleted`;
      let response_status = 403;
      if(deleted_meal.id){
        message = `Meal with id ${req.params.id} deleted successfully`;
        response_status = 200;
      }
      res.status(response_status).send({ message, data: deleted_meal });
    }
  }
}