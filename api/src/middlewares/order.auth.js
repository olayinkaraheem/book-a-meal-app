import Authorizations from '../config/actions';

const OrderAuth = {
  // Request A Meal On The System
  createOrder: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.CREATE_ORDER);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
  //  Get An Order On The System
  getOrder: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_ORDER);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
  // Update An Order On The System
  updateOrder: (req, res, next) => {
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

  // Delete A Order
  deleteOrder: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.DELETE_ORDER);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
};

export default OrderAuth;