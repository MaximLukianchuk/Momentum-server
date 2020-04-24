import User from '../models/User';

export const findOrCreateUser = async ({ id }) =>
    await User.findOneOrCreate({ id }, { id });

export const addUserEvent = async ({ id, event }) =>
    await User.findOneAndUpdate({ id }, { $push: { events: event } }, { new: true, upsert: true });
