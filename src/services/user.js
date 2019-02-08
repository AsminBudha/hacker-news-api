import * as userDAO from '../dao/user';

/**
 * Handle sign In function.
 *
 * @param {String} email Email or Username of an user.
 * @param {String} password Password of an user.
 */
export const signIn = async (email, password) => {
  try {
    const result = (await userDAO.checkIfUserNamePwdMatch(email, password));

    if (result !== '0') {
      return true;
    }
    return false;
  }
  catch (err) {
    throw err;
  }
}

/**
 * Handle sign up function
 *
 * @param {String} email Email or username of an user.
 * @param {String} password Password of an user.
 */
export const signUp = async (email, password) => {
  try {
    const checkIfAlreadyExists = await userDAO.checkIfUserNameAlreadyExists(email);

    if (checkIfAlreadyExists > 0) {
      return false;
    }

    const result = await userDAO.insertUsernamePassword(email, password);

    return result;
  }
  catch (err) {
    throw err;
  }
}
