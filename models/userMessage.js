import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    password: String,
});

const userMessage = mongoose.model('userMessage',userSchema);

export default userMessage;