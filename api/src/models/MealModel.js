import connection from '../config/db.config';
import mealdb from '../../database/models/meal';

export default class Meal {
  constructor() {
    this.id = null;
    this.name = null;
    this.size = null;
    this.price = null;
    this.currency = null;
    this.caterer_id = null;
    // this.active_today = null;
    this.active = null;
    this.rating = null;
    this.updated_at = null;
    this.updated_by = null;
    this.created_at = null;
  }

  createMeal() {

  } 

  // async getMeals() {
  //   const meals = await mealdb.findAll().then( (meals) => {
  //     console.log(meals);
  //   }).catch( ( err ) => {
  //     console.log(err);
  //   })
  // }
}
