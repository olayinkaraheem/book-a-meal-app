import { Menu } from '../../database/models';

export default class MenuService {
  async getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    // return this.fetchAllMeals() || [];
    try {
      const menu = await Menu.findAll({});
      // console.log(menu);
      if (menu) {
        console.log(menu);
        return { error: false, code: 200, message: 'Request successful', menu };
      }

      return { error: false, code: 200, message: "No meals found", menu: {} };
    } catch (err) {
      console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again' };
    }
  }

  async getMenuOfTheDay() {
    // return this.fetchAllMeals().filter(meal => meal.active_today == 1);
    try {
      const date = new Date();
      const month = `${date.getMonth() + 1}`;
      const day = date.getDate().toString().length < 2 ? "0"+date.getDate() : date.getDate();
      const today = `${date.getFullYear()}-${month.padStart(2, '0')}-${day}`;
      const meals = await Menu.findAll({ where: { created_at: today } });
        // where: {
        //   $and: [
        //     {},
        //     sequelize.where(
        //       sequelize.fn('DATE', sequelize.col('created_at')),
        //       sequelize.literal('CURRENT_DATE')
        //     )
        //   ]
        // }
        // where: {
        //   created_at: {
        //     $gt: date.toDate(),
        //     $lt: date.add(1, 'days').toDate()
        //   }
        // }
      
      // console.log(meals);
      if(meals) {
        return { error: false, code: 200, message: `Today's menu fetched successfully`, meals };
      }
      return { error: false, code: 200, message: `No meal found for today's menu`, meals: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again'};
    }
  }

  async getAMenuItem(id) {
    // -1 because we have our data in an array which starts at 0
    // return this.fetchAllMeals()[id - 1] || {};
    try {
      const meal = await Menu.find({ where: { id } });
      if (meal) {
        return { error: false, code: 200, message: 'Request successfull', meal };
      }
      return { error: false, code: 200, message: `No meal found with id: ${id}`, meal: {} };
    } catch (err) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again' };
    }
  }

  async addMealToMenu(meal_id) {
    // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
    // or a string the controller;
    try {
      // const meals = new MealsService();
      const newMenu = await Menu.create({ meal_id });
      if (newMenu) {
        return { error: false, code: 200, message: `New menu item with id ${newMenu.id} added successfully`, meal: newMenu };
      }
      return { error: false, code: 403, message: 'Meal could not be added to menu. Please try again', meal: {} };
    } catch (err) {
      return { error: true, code: 500, message: "Something is not right" };
    }
  }
  async removeMealFromMenu(id) {
    // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
    // or a string the controller;
    // console.log(meal_id);
    try {
      const deleted_menu = await Menu.update({ deleted: 1}, { where: { id }, returning: true });
      if (deleted_menu[1].length) {
        return { error: false, meal: deleted_menu, code: 200, message: `Meal with menu id ${id} removed from menu successfully` }
      }
      return { error: false, code: 200, message: 'Meal could not be deleted from menu', meal }
    } catch (err) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' }
    }
  }


  // getAllByCaterer(caterer_id) {
  //   // This will be a call to our ORM
  //   // And some manipulations to make the data presentable.
  //   return this.fetchAllMeals().filter(meal => meal.caterer_id == caterer_id);
  // }

  // removeMealFromMenu(caterer_id, meal_id) {
  //   const meals = this.getAllByCaterer(caterer_id);
  //   return meals.filter(meal => meal.id != meal_id)
  // }

}
