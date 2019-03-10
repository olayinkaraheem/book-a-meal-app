// import connection from '../config/db.config';
// import mealdb from '../../database/models/meal';

// export default class Meal {
//   constructor() {
//     this.id = null;
//     this.name = null;
//     this.size = null;
//     this.price = null;
//     this.currency = null;
//     this.caterer_id = null;
//     // this.active_today = null;
//     this.active = null;
//     this.rating = null;
//     this.updated_at = null;
//     this.updated_by = null;
//     this.created_at = null;
//   }

//   createMeal() {

//   } 

//   // async getMeals() {
//   //   const meals = await mealdb.findAll().then( (meals) => {
//   //     console.log(meals);
//   //   }).catch( ( err ) => {
//   //     console.log(err);
//   //   })
//   // }
//   /* async getAll(caterer_id=1) {
//     try {
//       const meals = caterer_id == 1 ? await database.Meal.findAll() : await database.Meal.findAll({ where: { caterer_id }});
//       // console.log(meals);
//       return meals;
//     } catch ( err ) {
//       const error = { error: err};
//       console.log(error);
//     }
//   }
//   getAll() {
//     const meal = new MealsService();
//     return (req, res) => {
//       let all_meals = null;
//       meal.getAll()
//       .then( (meals) => {
//         all_meals = meals
//       })
//       .catch( (err) => {
//         console.log( err )
//       })
//       console.log(all_meals);
//       let message = 'No meal option available';
//       let status = 204;
//       if(all_meals.length){
//         message = 'Meals fetched successfully';
//         status = 200;
//       }
//       res.status(status).send({ message, data: all_meals });
//     }
//   }
//    */
// }
