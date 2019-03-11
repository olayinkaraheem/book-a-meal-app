import Authorizations from '../config/actions';


const MealAuth = {

  addMeal: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.CREATE_MEAL);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  getMeal: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.READ_MEAL);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  updateMeal: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.UPDATE_MEAL);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },

  deleteMeal: (req, res, next) => {
    if (!req.decoded) {
      return res.status(403).send({ message: 'No token provided' });
    }

    const { authorizations } = req.decoded.user;
    const superAdmin = authorizations.includes(Authorizations.GLOBAL);
    const caterer = authorizations.includes(Authorizations.DELETE_MEAL);

    if (!superAdmin && !caterer) {
      return res.status(401).send({ message: 'You don\'t have the authorization or right to perform this action' });
    }
    return next();
  },
};

export default MealAuth;