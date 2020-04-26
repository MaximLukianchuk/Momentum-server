import { Router } from 'express';
import * as User from './user';

export const createRouter = () => {
    const router = new Router();
    
    router.route('/user/:id').get(User.findOrCreate);
    router.route('/user/:id/add_event').post(User.addEvent);
    router.route('/user/:id/update_event').post(User.updateEvent);
    router.route('/user/:id/delete_event').post(User.deleteEvent);
    
    return router;
};
