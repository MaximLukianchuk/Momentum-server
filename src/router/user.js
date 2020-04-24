import { createApiMethod, createApiPostMethod } from './utils';
import { findOrCreateUser, addUserEvent } from '../database/queries/user';

export const findOrCreate = createApiMethod(findOrCreateUser);
export const addEvent = createApiPostMethod(addUserEvent);
