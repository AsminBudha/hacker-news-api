import md5 from 'md5';
import { Router } from 'express';

import * as userService from '../services/user';
import * as appConstants from '../constants/common';

const router = Router();

/**
 * Receives post request and response with login successful or not.
*/
router.post(appConstants.SIGN_IN_API, async (req, res, next) => {
  try {
    const successStatus = await userService.signIn(req.body.email, md5(req.body.password));

    let result = {
      success: successStatus,
      message: successStatus ? 'Login Successful' : 'Username or password didn\'t match',
    };

    res.json({ result: result });
  }
  catch (err) {
    next(err);
  }
});

/**
 * Receive post request and response with signup successful or not.
*/
router.post(appConstants.SIGN_UP_API, async (req, res, next) => {
  try {
    const successStatus = await userService.signUp(req.body.email, md5(req.body.password));
    const result = {
      success: successStatus,
      message: successStatus ? 'User added successfully' : 'Username already used',
    };

    res.json({ result: result });
  } catch (err) {
    next(err);
  }
});

export default router;
