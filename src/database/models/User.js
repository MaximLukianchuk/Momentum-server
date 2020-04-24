import { Schema, model } from 'mongoose';
import findOneOrCreate from 'mongoose-findoneorcreate';

const schema = new Schema({
    id: {
        type: String,
        uniq: true,
    },
    events: [],
});

schema.plugin(findOneOrCreate);

export default model('User', schema);
