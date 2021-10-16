import mongoose from 'mongoose';

const lotterySchema = mongoose.Schema({
    date: String,
    result: String,
    type: String
});

const lotteryMessage = mongoose.model('lotteryMessage',lotterySchema);

export default lotteryMessage;