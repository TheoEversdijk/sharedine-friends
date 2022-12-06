import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// import from controller
import { getFriends } from "../controllers/friendController.js"

/**
 * all friends router
 */
 router.options('/', (req, res, next) => {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  });

router.get('/', getFriends);

  // add friends route ?
  // show friends route ?
  // delete friends route ?
  



export default router