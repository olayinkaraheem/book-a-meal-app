import Order from '../models/OrderModel';
import Meal from '../services/MealsService';

export default class OrdersService {

  constructor() {
    // test comment to check what is wrong with merge after assignment submission
    const meals = new Meal();
    this.meals = meals.getAll();
  }

  fetchAllOrders() {
    // This is the data we will have in our database
    this.orders = [
      {
        id: 1,
        user_id: 23,
        meal_id: 1,
        meal_name: 'Jollof Rice and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: '3',
        currency: 'NGN',
        total: '1500',
        caterer_id: 3,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 2,
        user_id: 3,
        meal_id: 2,
        meal_name: 'Jollof Rice and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 1,
        currency: 'NGN',
        total: '500',
        caterer_id: 12,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 3,
        user_id: 21,
        meal_id: 3,
        meal_name: 'Jollof Rice,salad and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 4,
        currency: 'NGN',
        total: '2000',
        caterer_id: 12,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 4,
        user_id: 21,
        meal_id: 5,
        meal_name: 'Jollof Rice,salad and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 4,
        currency: 'NGN',
        total: '2000',
        caterer_id: 12,
        status: 0,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 5,
        user_id: 21,
        meal_id: 4,
        meal_name: 'Ice cream and chips',
        meal_size: 'plates',
        price: '750',
        quantity: 2,
        currency: 'NGN',
        total: '1500',
        caterer_id: 12,
        status: 0,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      
    ];

    // When we retrieve the data, it will be of type Means
    // Hence, this simulation here.
    return this.orders.map((data) => {
      const order = new Order();
      order.id = data.id;
      order.user_id = data.user_id;
      order.meal_id = data.meal_id;
      order.meal_name = data.meal_name;
      order.meal_size = data.meal_size;
      order.price = data.price;
      order.currency = data.currency;
      order.caterer_id = data.caterer_id;
      order.status = data.status;
      order.quantity = data.quantity;
      order.total = data.total;
      // order.updated_at = data.updated_at;
      // order.updated_by = data.updated_by;
      order.created_at = data.created_at;
      return order;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllOrders();
  }

  getAllMealOptions(){
    // select from a list of available meals;
    // const Meal = new Meal();
    return this.meals;
  }

  placeOrder(meal, order_info) {
    const lastOrderInDatabase = this.getAll()[this.getAll().length - 1];
    // console.log('order service', meal, meal.id, meal.name, meal.size, meal.price);
    const new_order = new Order();
    new_order.id = lastOrderInDatabase.id + 1;
    new_order.meal_id = meal.id;
    new_order.user_id = 23; // this will be the current loggedin user id
    new_order.meal_name = meal.name;
    new_order.meal_size = meal.size;
    new_order.price = meal.price;
    new_order.quantity = order_info.quantity;
    new_order.currency = meal.currency;
    new_order.total = meal.price * order_info.quantity;
    new_order.caterer_id = meal.caterer_id;
    new_order.status = meal.status;
    new_order.updated_by = 23; // this will be the current loggedin user id
    new_order.created_at = "20-01-2019 12:34:25"; // current date time
    this.orders = [ ...this.orders, new_order];
    
    return new_order;
  }
  
  updateOrderItem(user_id, order_id, update){
    const pendingOrders = this.getAllPendingOrderByUser(user_id);
    // const thisOrder = pendingOrders.filter( order => order.id == order_id);
    const updated_order = { id: parseInt(order_id, Number) , ...update };
    if(pendingOrders){
      const thisOrderIndex = pendingOrders.map( order => order.id ).indexOf(order_id);
      // console.log(thisOrderIndex);
      if(thisOrderIndex >= 0){
        pendingOrders.splice(thisOrderIndex, 1, updated_order);
        // console.log(updated_order);
        return updated_order;
      }
    }
    return {};
  }

  deleteOrderItem(user_id, order_id){
    const pendingOrders = this.getAllPendingOrderByUser(user_id);
    if (pendingOrders) {
      const thisOrderIndex = pendingOrders.map(order => order.id).indexOf(parseInt(order_id, Number));
      const thisOrder = pendingOrders[thisOrderIndex];
      if (thisOrderIndex >= 0) {
        thisOrder.status = -1;
        thisOrder.updated_at = new Date();
        const deleted_order = thisOrder;
        pendingOrders.splice(thisOrderIndex, 1, deleted_order);
        return deleted_order;
      }
    }
    return {};
  }
  
  getOrdersOfTheDay() {
    const date = new Date();
    const date_today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const full_date = year+'-'+month+'-'+date_today;
    return this.fetchAllOrders().filter((order) => {
      // const full_date = order.created_at.split(' ')[0].split('-');
      // return full_date[0] == year && full_date[1] == month && full_date[2] == date_today; // This will a date object comparison
      // OR
      const created_date = order.created_at.split(' ')[0];
      return created_date == full_date;
    })
  }

  getOrderById(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllOrders()[id - 1];
  }
  
  getOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id;
    })
  }
  // This won't be used/shown to the users.
  getAllCancelledOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && order.status == -1;
    })
  }
  // This will be for the user's order history
  getAllCompletedOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && order.status == 1;
    })
  }
  
  getAllPendingOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && order.status == 0;
    })
  }


}
