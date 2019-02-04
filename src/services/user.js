import * as userDAO from '../dao/user';

export const signIn = async (email, password) => {
  try {
    const result = (await userDAO.checkIfUserNamePwdMatch(email, password));
    console.log(result !== '0', result);
    if (result !== '0') {
      return true;
    }
    return false;
  }
  catch (err) {
    throw err;
  }
}

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