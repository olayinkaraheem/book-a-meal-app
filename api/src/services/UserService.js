import { User, Contact, Caterer, sequelize } from '../../database/models';
import 'sequelize';
// import { isNullOrUndefined } from 'util';
export default class UserService {

  async getAll() {
    try {
      const users = await User.findAll({});
      if(users){
        // console.log(meals);
        return { error: false, code: 200, message: 'Users fetched successfully', users };
      }
      return { error: false, code: 204, message: "No users found", users: {}};
    } catch ( err ) {
      // console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }

  }

  async getUser(id) {
    try{
      const user = await User.findOne({ where: { id } });
      if(user) {
        return { error: false, code: 200, message: 'Request successfull', user };
      }
      return { error: false, code: 204, message: `No user found with id: ${id}`, user: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again' };
    }
    
  }

  async getUserByUsername(username) {
    try{
      const user = await User.findOne({ where: { username } });
      // console.log(user != null);
      if(user != null) {
        return { error: false, code: 200, message: 'Success', user };
      }
      return { error: false, code: 404, message: `Username  ${username} does not match any record.`, user: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again '+err };
    }
    
  }
  
  async addUser(user) {
    try {
      const { role, username, email } = user;
      // const token = Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').repeat(5);
      const existing_user = await User.findOne({ where: { username} });
      const existing_email = await Contact.findOne({ where: { email } });
      if(existing_user != null) {
        return { error: false, code: 403, message: 'A User With This Username Already Exist', user: {} };
      }
      if(existing_email != null) {
        return { error: false, code: 403, message: 'A User With This Email Already Exist', user: {} };
      }
      let newUser;
      if(role == 3) {
        newUser = await User.create({ authorizations: [3, 10, 13, 14, 15], ...user });
      }
      
      if(role == 2){
        const { firstname, lastname, username, password, email, ...others } = user;
        console.log(user);
        await sequelize.transaction( async (t) => { 
          return await User.create({ 
            firstname, 
            lastname, 
            username, 
            password, 
            email, 
            role,
            authorizations: [5, 6, 7, 8, 9, 10] 
          }, { transaction: t })
          .then( async (user) => {
            return await Contact.create({ email, user_id: user.id }, { transaction: t });
            // await Caterer.create({ user_id: user.id, ...others });
          })
          .then( async (user) => {
            return await Caterer.create({ user_id: user.id, ...others }, { transaction: t });
          })
          .catch( (err) => {
            throw new Error(err);
          })
        });
        newUser = user;
      }
      if(newUser){
        return { error: false, code: 200, message: `New user added successfully`, user: newUser };
      }
    } catch ( err ) {
      return { error: true, code: 500, message: "Something is not right"+err };
    }
  }
}
