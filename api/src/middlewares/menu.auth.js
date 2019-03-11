import Authorizations from '../config/actions';

const MenuAuth = {
  // Add A Meal To Menu On The System
  createMenu: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.CREATE_MENU);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
  //  Get Menu On The System
  getMenu: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_MENU);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
  // Get All Menu On The System
  getAll: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  // Delete A Menu Option
  deleteMenu: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.DELETE_MENU);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
};

export default MenuAuth;