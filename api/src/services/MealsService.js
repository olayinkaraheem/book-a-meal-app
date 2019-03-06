// import Meal from '../models/MealModel';
import { Meal } from '../../database/models';

export default class MealsService {
  fetchAllMeals() {
    // This is the data we will have in our database
    this.meals = [
      {
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 0,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '200',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 4,
        name: 'Apache Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 0,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 5,
        name: 'Node Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
    ];

    // When we retrieve the data, it will be of type Means
    // Hence, this simulation here.
    return this.meals.map((data) => {
      const meal = new Meal();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      meal.caterer_id = data.caterer_id;
      meal.active_today = data.active_today;
      meal.rating = data.rating;
      meal.status = data.status;
      // meal.updated_at = data.updated_at;
      // meal.active = data.active;
      // meal.updated_by = data.updated_by;
      meal.created_at = data.created_at;
      return meal;
    });
  }

  async getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    // return this.fetchAllMeals() || [];
    try {
      const meals = await Meal.findAll({});
      if(meals){
        // console.log(meals);
        return { error: false, code: 200, message: 'Meals fetched successfully', meals };
      }
      return { error: false, code: 204, message: "No meals found", meals: {}};
    } catch ( err ) {
      // console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }

  }

  async getMeal(id) {
    // -1 because we have our data in an array which starts at 0
    // return this.fetchAllMeals()[id - 1] || {};
    try{
      const meal = await Meal.find({ where: { id } });
      if(meal) {
        return { error: false, code: 200, message: 'Request successfull', meal };
      }
      return { error: false, code: 204, message: `No meal found with id: ${id}`, meal: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again' };
    }
    
  }
  
  async addMeal(meal) {
    // this should return the meal just added if saved successfully 
    // or an error as string then i'll check if response type is an object
    // or a string the controller;
    // const { name, size, price, currency, caterer_id, image } = meal;
    try {
      // const meals = new MealsService();
      const newMeal = await Meal.create({
      ...meal
      });
      if(newMeal){
        return { error: false, code: 200, message: `New meal with id ${newMeal.id} added successfully`, meal: newMeal };
      }
      return { error: false, code: 403, message: 'Meal could not be created. Please try again', meal: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: "Something is not right" };
    }
    // const lastMealInDatabase = this.getAll()[this.getAll().length - 1];
    // const newMeal = {
    //   id: lastMealInDatabase.id + 1,
    //   name,
    //   size,
    //   price,
    //   currency,
    //   caterer_id,
    //   active_today,
    //   active,
    //   rating: 0,
    //   updated_at: 0,
    //   updated_by: 0,
    //   created_at: new Date(),
    // };
    // this.meals = [ ...this.meals, newMeal];
  }

  async updateMeal(id, meal) {
    try {
      const updated_meal = await Meal.update( meal, { where: { id }, returning: true });
      if(updated_meal){
        return { error: false, meal: updated_meal, code: 200, message: `Meal with id ${id} updated successfully` }
      }
      return { error: false, code: 204, message: 'Update failed', meal  }
    } catch ( err ) {
      return { error: true, code: 500 , message: 'Something went wrong. Please try again.'}
    }
  }
  
  async deleteMeal(id, meal) {
    try {
      const deleted_meal = await Meal.update( meal, { where: { id }, returning: true });
      console.log(deleted_meal);
      if(deleted_meal[1].length){
        return { error: false, meal: deleted_meal, code: 200, message: `Meal with id ${id} deleted successfully` }
      }
      return { error: false, code: 204, message: 'Meal could not be deleted', meal  }
    } catch ( err ) {
      return { error: true, code: 500 , message: 'Something went wrong. Please try again.'}
    }
  }

  // getMealsOfTheDay() {
  //   return this.fetchAllMeals().filter( meal => meal.active_today == 1 ) || [];
  // }
  


  // getAllByCaterer(caterer_id) {
  //   // This will be a call to our ORM
  //   // And some manipulations to make the data presentable.
  //   return this.fetchAllMeals().filter( meal => meal.caterer_id == caterer_id );
  // }

  // updateMeal(meal_id, update) {
  //   const { name, size, price, currency, caterer_id, active_today, active, rating } = update;
  //   const meals = this.getAllByCaterer(caterer_id);
  //   const thisMealIndex = meals.map(meal => meal.id).indexOf(meal_id);
  //   // const thisMeal = meals[thisMealIndex];

  //   if(meals){
  //     if(thisMealIndex >= 0 ){
  //       const meal_update = {
  //         name,
  //         size,
  //         price,
  //         currency,
  //         caterer_id,
  //         active_today,
  //         active,
  //         rating,
  //         updated_at: new Date(),
  //         updated_by: caterer_id
  //       };
  //       const updated_meal = { id: meal_id, ...meal_update };
  //       meals.splice(thisMealIndex, 1, updated_meal);
  //       return updated_meal;
  //     }
  //   }
  //   return {};
  // }
  // deleteMeal(caterer_id, meal_id) {
  //   const meals = this.getAllByCaterer(caterer_id);
  //   // return meals.filter( meal => meal.id != meal_id );
  //   if (meals) {
  //     const thisMealIndex = meals.map(meal => meal.id).indexOf(parseInt(meal_id, Number));
  //     const thisMeal = meals[thisMealIndex];
  //     if (thisMealIndex >= 0) {
  //       thisMeal.status = 0;
  //       thisMeal.updated_at = new Date();
  //       const deleted_meal = thisMeal;
  //       meals.splice(thisMealIndex, 1, deleted_meal);
  //       return deleted_meal;
  //     }
  //   }
  //   return {};
  // }

}
