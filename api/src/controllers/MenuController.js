import MenuService from '../services/MenuService';

export default class MenuController {
  constructor() {
  }

  getAll() {
    const menu = new MenuService();
    return (req, res) => {
      res.status(200).send(menu.getAll());
    }
  }

  setMenuOfTheDay() {
    const menu = new MenuService();
    return (req, res) => {
      const { meal_id, caterer_id } = req.body;
      const meal = menu.addMealToMenu(caterer_id, meal_id);
      let message = `Meal with id ${meal_id} not found and could'n not be added to menu`;
      let response_status = 403;
      if(meal.id){
        message = `Meal with id ${meal_id} added to menu successfully`;
        response_status = 200;
      }
      res.status(response_status).send({ message, data: meal });
    }
  }

  
  getMenuOfTheDay() {
    const menu = new MenuService();
    return (req, res) => {
      const menu_of_the_day = menu.getMenuOfTheDay();
      let message = 'Today\'s menu not set';
      let response_status = 404;
      if(menu_of_the_day){
        message = 'Menu of the day fetch request sent successfully';
        response_status = 200;
      }
      res.status(response_status).send({ message, data: menu_of_the_day });
    }
  }

  removeMealFromMenu() {
    const menu = new MenuService();
    return (req, res) => {
      const { caterer_id } = req.body;
      const meal_id = req.params.meal_id;
      const meal = menu.removeMealFromMenu(caterer_id, meal_id);
      let message = `Meal with id ${meal_id} not found and could'n not be removed from menu`;
      let response_status = 403;
      if (meal.id) {
        message = `Meal with id ${meal_id} removed from menu of the day successfully`;
        response_status = 200;
      }
      res.status(response_status).send({ message, data: meal });
    }
  }

  // Extra features
  getMeal() {
    const meal = new MenuService();
    return (req, res) => {
      res.status(200).send(meal.getMeal(req.body.id));
    }
  }

  getMenuByUser(user_id) {
    return this.getAll().filter((menu) => {
      return menu.user_id == user_id;
    })
  }

  updateMenu(user_id, menu_id, update) {
    const pendingOrders = this.getAllPendingOrderByUser(user_id);
    const thisOrder = pendingOrders.filter(order => order.id == order_id);
    pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, update);
    return pendingOrders;
  }
}