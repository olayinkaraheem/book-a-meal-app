import MealsService from '../services/MealsService';

export default class MenuController {
  constructor() {
  }

  getAll() {
    const meal = new MealsService();
    return (req, res) => {
      res.status(200).send(meal.getAll());
    }
  }

  setMenuOfTheDay() {
    const meal = new MealsService();
    return (req, res) => {
      const { id, name, size, price, currency, caterer_id, active_today, active } = req.body;
      const newMenu = {
        id,
        name,
        size,
        price,
        currency,
        caterer_id,
        active_today,
        active,
        rating: 0,
        created_at: new Date(),
      };
      res.status(200).send(meal.addMeal(newMenu));
    }
  }

  getMeal() {
    const meal = new MealsService();
    return (req, res) => {
      res.status(200).send(meal.getMeal(req.body.id));
    }
  }

  getMenuOfTheDay() {
    const meal = new MealsService();
    return (req, res) => {
      res.status(200).send(meal.getMealsOfTheDay());
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