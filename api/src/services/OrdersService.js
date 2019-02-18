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
        meal_title: 'Jollof Rice and chicken',
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
        meal_title: 'Jollof Rice and chicken',
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
        meal_title: 'Jollof Rice,salad and chicken',
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
        meal_title: 'Jollof Rice,salad and chicken',
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
        meal_title: 'Ice cream and chips',
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
      order.meal_title = data.meal_title;
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
  
  updateOrderItem(user_id, order_id, update){
    const pendingOrders = this.getAllPendingOrderByUser(user_id);
    const thisOrder = pendingOrders.filter( order => order.id == order_id);
    const updated_order = { id: parseInt(order_id, Number) , ...update };
    pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, updated_order);
    return pendingOrders;
  }
  
  // TODO
  getOrdersOfTheDay() {
    return this.fetchAllOrders().filter((order) => {
      return order.created_at == 'Today'; // This will a date object comparison
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
