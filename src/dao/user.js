import fs from 'fs';
import path from 'path';

import { db as knex } from '../constants/db';

/**
 *
 * @param {String} username Username or Email which is to be checked if already exists in db.
 * @returns {NUmber} Number of username that matched with param.
 */
export const checkIfUserNameAlreadyExists = (username) => {
  return knex('user').count('email').where('email', username).then((rows) => {
    return rows[0].count;
  });
}

/**
 *
 * @param {String} username
 * @param {String} password
 * @returns {Number} Number of username and password that matched with param.
 */
export const checkIfUserNamePwdMatch = (username, password) => {
  return knex('user').count('email').where({
    email: username,
    password: password
  }).then((rows) => {
    return rows[0].count;
  });
}

/**
 * Insert Username and password into database.
 *
 * @param {String} username
 * @param {String} password
 * @returns {Number} Id on which user is added.
 */
export const insertUsernamePassword = (username, password) => {
  return knex.insert({
    email: username,
    password: password
  }).into('user')
    .then((id) => {
      return id;
    });
}

//Code related to add username and password in file I/O.
const FILE_PATH = path.join(__dirname, '../../res/userList.txt');

/**
 * @returns {String} Returns data in file or empty array.
 */
export const readFromUserFile = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return data ? data : '[]';
  } catch (err) {
    throw err;
  }
}

/**
 * Write data into file.
 *
 * @param {Object} users All users data that is to be inserted into file.
 */
export const writeIntoUserFIle = (users) => {
  try {
    fs.writeFileSync(FILE_PATH, users, 'utf8');
    return true;
  } catch (err) {
    throw err;
  }
}
