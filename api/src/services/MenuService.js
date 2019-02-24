import Meal from '../models/MealModel';

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
        // updated_at: "20-01-2019 12:34:25",
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
        // updated_at: "20-01-2019 12:34:25",
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
        // updated_at: "20-01-2019 12:34:25",
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
        // updated_at: "20-01-2019 12:34:25",
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
        // updated_at: "20-01-2019 12:34:25",
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

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals() || [];
  }

  getMenuOfTheDay() {
    return this.fetchAllMeals().filter(meal => meal.active_today == 1);
  }

  getMeal(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1] || {};
  }

  addMealToMenu(caterer_id, meal_id) {
    // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
    // or a string the controller;
    const meals = this.getAllByCaterer(caterer_id);
    if(meals){
      const thisMealIndex = meals.map(meal => meal.id).indexOf(parseInt(meal_id, Number));
      const thisMeal = meals[thisMealIndex];
      if (thisMealIndex >= 0) {
        thisMeal.active_today = 1;
        thisMeal.updated_at = new Date();
        const new_menu_item = thisMeal;
        meals.splice(thisMealIndex, 1, new_menu_item);
        return new_menu_item;
      }
    }
    return {};
  }
  removeMealFromMenu(caterer_id, meal_id) {
    // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
    // or a string the controller;
    const meals = this.getAllByCaterer(caterer_id);
    if(meals){
      const thisMealIndex = meals.map(meal => meal.id).indexOf(parseInt(meal_id, Number));
      const thisMeal = meals[thisMealIndex];
      if (thisMealIndex >= 0) {
        thisMeal.active_today = 0;
        thisMeal.updated_at = new Date();
        const removed_menu_item = thisMeal;
        meals.splice(thisMealIndex, 1, removed_menu_item);
        return removed_menu_item;
      }
    }
    return {};
  }


  getAllByCaterer(caterer_id) {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals().filter(meal => meal.caterer_id == caterer_id);
  }

  // removeMealFromMenu(caterer_id, meal_id) {
  //   const meals = this.getAllByCaterer(caterer_id);
  //   return meals.filter(meal => meal.id != meal_id)
  // }

}
