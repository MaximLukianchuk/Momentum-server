import { createApiMethod, createApiPostMethod } from './utils';
import { findOrCreateUser, addUserEvent, updateUserEvent, deleteUserEvent } from '../database/queries/user';

export const findOrCreate = createApiMethod(findOrCreateUser);
export const addEvent = createApiPostMethod(addUserEvent);
export const updateEvent = createApiPostMethod(updateUserEvent);
export const deleteEvent = createApiPostMethod(deleteUserEvent);

