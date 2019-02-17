import MealsService from '../services/MealsService';

export default class MealsController {
  constructor() {
    //   console.log(MealsService.default);
    this.mealsService = new MealsService();
    // console.log(this.mealsService);
  }

  getAll() {
    const meal = new MealsService();
    console.log("got here", meal);
    return (req, res) => {
      res.status(200).send(meal.getAll());
    }
  }

  getMeal() {
    const meal = new MealsService();
    console.log("got here", meal);
    return (req, res) => {
      res.status(200).send(meal.getMeal(req.params.id));
    }
  }

  getMealsOfTheDay() {
    const meal = new MealsService();
    console.log("got here", meal);
    return (req, res) => {
      res.status(200).send(meal.getMealsOfTheDay());
    }
  }
}