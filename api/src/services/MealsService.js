import database from '../../database/models';

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

  async getAll(caterer_id=1) {
    try {
      const meals = caterer_id == 1 ? await database.Meal.findAll() : await database.Meal.findAll({ where: { caterer_id }});
      // console.log(meals);
      return meals;
    } catch ( err ) {
      const error = { error: err};
      console.log(error);
    }
  }

  getMealsOfTheDay() {
    return this.fetchAllMeals().filter( meal => meal.active_today == 1 ) || [];
  }

  getMeal(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1] || {};
  }

  addMeal(meal) {
    // this should return the meal just added if saved successfully 
    // or an error as string then i'll check if response type is an object
    // or a string the controller;
    const { name, size, price, currency, caterer_id, active_today, active } = meal;
    const lastMealInDatabase = this.getAll()[this.getAll().length - 1];
    const newMeal = {
      id: lastMealInDatabase.id + 1,
      name,
      size,
      price,
      currency,
      caterer_id,
      active_today,
      active,
      rating: 0,
      updated_at: 0,
      updated_by: 0,
      created_at: new Date(),
    };
    this.meals = [ ...this.meals, newMeal];
    return newMeal || {};
  }

  getAllByCaterer(caterer_id) {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals().filter( meal => meal.caterer_id == caterer_id );
  }

  updateMeal(meal_id, update) {
    const { name, size, price, currency, caterer_id, active_today, active, rating } = update;
    const meals = this.getAllByCaterer(caterer_id);
    const thisMealIndex = meals.map(meal => meal.id).indexOf(meal_id);
    // const thisMeal = meals[thisMealIndex];

    if(meals){
      if(thisMealIndex >= 0 ){
        const meal_update = {
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
        const updated_meal = { id: meal_id, ...meal_update };
        meals.splice(thisMealIndex, 1, updated_meal);
        return updated_meal;
      }
    }
    return {};
  }
  deleteMeal(caterer_id, meal_id) {
    const meals = this.getAllByCaterer(caterer_id);
    // return meals.filter( meal => meal.id != meal_id );
    if (meals) {
      const thisMealIndex = meals.map(meal => meal.id).indexOf(parseInt(meal_id, Number));
      const thisMeal = meals[thisMealIndex];
      if (thisMealIndex >= 0) {
        thisMeal.status = 0;
        thisMeal.updated_at = new Date();
        const deleted_meal = thisMeal;
        meals.splice(thisMealIndex, 1, deleted_meal);
        return deleted_meal;
      }
    }
    return {};
  }

}
