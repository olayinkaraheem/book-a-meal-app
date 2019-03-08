import { User, Contact, Caterer, db } from '../../database/models';

export default class UserService {


  async getAll() {
    try {
      const users = await User.findAll({});
      if(users){
        // console.log(meals);
        return { error: false, code: 200, message: 'Users fetched successfully', users };
      }
      return { error: false, code: 204, message: "No meals found", users: {}};
    } catch ( err ) {
      // console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }

  }

  async getUser(id) {
    try{
      const user = await User.find({ where: { id } });
      if(user) {
        return { error: false, code: 200, message: 'Request successfull', user };
      }
      return { error: false, code: 204, message: `No user found with id: ${id}`, user: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again' };
    }
    
  }
  
  async addUser(user) {
    try {
      let newUser;
      if(role == 3) {
        newUser = await User.create({ ...user });
      }
      // const newUser = await Meal.create({
        // ...meal
        // }, returning: id)
        // .then;
      if(role == 2){
        const { firstname, lastname, username, password, email, role, ...others } = user;
          newUser = await db.sequelize.transaction( async (t) => { 
            return await User.create({ 
              firstname, 
              lastname, 
              username, 
              password, 
              email, 
              role 
            }, { transaction: t })
            .then( async (user) => {
              return await Contact.create({ email, user_id: user.id });
              // await Caterer.create({ user_id: user.id, ...others });
            })
            .then( async (user) => {
              return await Caterer.create({ user_id: user.id, ...others });
            })
            .catch( (err) => {
              throw new Error(err);
            })
        })
      }
      if(newUser){
        return { error: false, code: 200, message: `New user with id ${newUser.id} added successfully`, meal: newMeal };
      }
      return { error: false, code: 403, message: 'User could not be created. Please try again', meal: {} };
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
