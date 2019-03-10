import MenuService from '../services/MenuService';

export default class MenuController {
  constructor() {
  }

  getAll() {
    // const menu = new MenuService();
    // return async (req, res) => {
    //   res.status(200).send(menu.getAll());
    // }

    return async (req, res) => {
      const menu = new MenuService();
      const all_menu = await menu.getAll();
      const message = all_menu.message;
      const status = all_menu.code;
      if (!all_menu.error) {
        res.status(status).send({ message, data: all_menu.menu });
      } else {
        res.status(status).send({ message });
      }
    }
  }
  
  getMenuOfTheDay() {
    const menu = new MenuService();
    return async (req, res) => {
      const menu_of_the_day = await menu.getMenuOfTheDay();
      const message = menu_of_the_day.message;
      const status = menu_of_the_day.code;
      if (!menu_of_the_day.error) {
        res.status(status).send({ message, data: menu_of_the_day.meals });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  
  getAMenuItem() {
    const menu = new MenuService();
    return async (req, res) => {
      const menu_item = await menu.getMenuOfTheDay();
      const message = menu_item.message;
      const status = menu_item.code;
      if (!menu_item.error) {
        res.status(status).send({ message, data: menu_item.meal });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  setMenuOfTheDay() {
    const menu = new MenuService();
    return async (req, res) => {
      const { meal_id } = req.body;
      const menu_response = await menu.addMealToMenu(meal_id);
      const message = menu_response.message;
      const status = menu_response.code;
      if (!menu_response.error) {
        res.status(status).send({ message, data: menu_response.meal });
      } else {
        res.status(status).send({ message });
      }
    }
  }
  

  removeMealFromMenu() {
    return async (req, res) => {
      const menu = new MenuService();
      const menu_id =  parseInt(req.params.id, Number);
      const deleted_menu = await menu.removeMealFromMenu(menu_id);
      const message = deleted_menu.message;
      const status = deleted_menu.code;
      if (!deleted_menu.error) {
        res.status(status).send({ message });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  // Extra features

  // getMenuByUser(user_id) {
  //   return this.getAll().filter((menu) => {
  //     return menu.user_id == user_id;
  //   })
  // }

  // updateMenu(user_id, menu_id, update) {
  //   const pendingOrders = this.getAllPendingOrderByUser(user_id);
  //   const thisOrder = pendingOrders.filter(order => order.id == order_id);
  //   pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, update);
  //   return pendingOrders;
  // }
}