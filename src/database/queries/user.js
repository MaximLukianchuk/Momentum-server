import User from '../models/User';

export const findOrCreateUser = async ({ id }) =>
    await User.findOneOrCreate({ id }, { id });

export const addUserEvent = async ({ id, event }) =>
    await User.findOneAndUpdate({ id }, { $push: { events: event } }, { new: true, upsert: true });


export const updateUserEvent = async ({ id, eventId, ...changes }) => {
    const user = await User.findOne({ id });
    
    user.events = user.events.map(event => event.id !== eventId ? event : {
        ...event,
        ...changes
    });
    
    return await user.save();
};

export const deleteUserEvent = async ({ id, eventId }) => {
    const user = await User.findOne({ id });
    
    user.events = user.events.filter(event => event.id !== eventId);
    
    return await user.save();
};
