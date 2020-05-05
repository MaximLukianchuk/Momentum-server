import { Router } from 'express';
import * as User from './user';
import { auth } from '../middleware/auth';

export const createRouter = () => {
    const router = new Router();

    router.route('/user/:id/:token').get(auth, User.findOrCreate);
    router.route('/user/:id/:token/add_event').post(auth, User.addEvent);
    router.route('/user/:id/:token/update_event').post(auth, User.updateEvent);
    router.route('/user/:id/:token/delete_event').post(auth, User.deleteEvent);

    return router;
};
