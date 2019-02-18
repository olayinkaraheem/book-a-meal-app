import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(){
    // this.mealsService = new MealsService();
  }
  
  getAll() {
    const meal = new MealsService();
    console.log("got here",meal);
    return (req, res) => {
      res.status(200).send(meal.getAll());
    }
  }

  getMeal() {
    const meal = new MealsService();
    return (req, res) => {
      const status = meal.getMeal(req.params.id).length ? 200 : 400;
      res.status(status).send(meal.getMeal(req.params.id));
    }
  }

  addMeal() {
    const meal = new MealsService();
    const lastMealInDatabase = meal.getAll()[meal.getAll().length - 1];
    return (req, res) => {
      const { name, size, price, currency, caterer_id, active_today, active } = req.body;
      const newMeal = {
        id: lastMealInDatabase.id + 1,
        name ,
        size ,
        price ,
        currency ,
        caterer_id ,
        active_today ,
        active ,
        rating: 0,
        updated_at: 0,
        updated_by: 0,
        created_at: new Date(),
      };
      res.status(200).send(meal.addMeal(newMeal));
    }
  }

  updateMeal() {
    //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
    const meal = new MealsService();
    return (req, res) => {
      const { name, size, price, currency, caterer_id, active_today, active, rating } = req.body;
      const update = {
        name,
        size,
        price,
        currency,
        caterer_id,
        active_today,
        active,
        rating,
        updated_at: new Date(),
        updated_by: caterer_id
      };
      res.status(200).send(meal.updateMeal(caterer_id, parseInt(req.params.id, Number), update));
    }
  }

  deleteMeal() {
    const meal = new MealsService();
    return (req, res) => {
      res.status(200).send(meal.deleteMeal(req.body.caterer_id, req.params.id));
    }
  }
}