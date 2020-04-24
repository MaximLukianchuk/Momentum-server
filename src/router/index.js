import { Router } from 'express';
import * as User from './user';

export const createRouter = () => {
    const router = new Router();
    
    router.route('/user/:id').get(User.findOrCreate);
    router.route('/user/:id/add_event').post(User.addEvent);
    
    return router;
};
