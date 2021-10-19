import mongoose from 'mongoose';
import LotteryMessage from "../models/lotteryMessage.js";

export const getLottery = async (req, res) => {
    try {
        const lottery = await LotteryMessage.find();
        res.status(200).json({ data: lottery });
    } catch (error) {
        res.status(404).json({ 'message': error.message });
    }
}
//======create lottery ===> giai2 --> giai7
export const createLottery = async (req, res) => {
    const lottery = req.body.data;
    try {
        await LotteryMessage.insertMany(lottery, (error, success) => {
            if (error) console.log(error)
            res.status(200).json({ data: lottery, msg: 'Create successful' });
        });
    } catch (error) {
        res.status(409).json({ 'message': error.message });
    }
}
//=====get lottery by date===
export const getLotteryByDate = async (req, res) => {
    var date = req.params.date;
    try {
        var data = await LotteryMessage.find({ 'date': date });
        res.status(200).json({ data: data, msg: 'get data success' });
    } catch (error) {
        console.log(error.message)
    }
}
//=====remove by date==== all
export const removeLotteryByDate = async (req, res) => {
    var date = req.params.date;
    try {
        await LotteryMessage.deleteMany({ "date": date }, (err, result) => {
            if (err) console.log(err)
            res.status(200).json({ msg: 'delete successfuly' });
        })
    } catch (error) {
        console.log(error.message)
    }
}
///////======dacbiet======/////
export const getDacbiet = async (req, res) => {
    const date = req.params.date;
    try {
        const dacbiet = await LotteryMessage.find({ "date": date, "type": "0" });
        res.status(200).json({ data: dacbiet });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
export const postDacbiet = async (req, res) => {
    var date = req.body.date;
    var data = req.body;
    // console.log('dacbiet:'+data);
    try {
        var result = await LotteryMessage.find({ $and: [{ date: date }, { type: "0" }] })
        if (result.length > 0) {
            const _id = result[0]._id;
            LotteryMessage.findByIdAndUpdate(_id, data, { new: true }, (error, succ) => {
                if (error) res.send(err)
                res.status(200).json({ msg: 'Update succfully' });
            });
        } else {
            const newLottery = new LotteryMessage(data);
            newLottery.save();
            res.status(200).json({ data: newLottery, msg: 'Save succfully' });
        }
    } catch (error) {
        console.log(error)
    }
}
//======GiaiMot======
export const getGiaiMot = async (req, res) => {
    const date = req.params.date;
    try {
        const giaimot = await LotteryMessage.find({ 'date': date, 'type': "1" });
        res.status(200).json({ data: giaimot });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
export const postGiaiMot = async (req, res) => {
    var date = req.body.date;
    var data = req.body;
    // console.log("giai1="+data);
    try {
        var result = await LotteryMessage.find({ $and: [{ date: date }, { type: "1" }] })
        if (result.length > 0) {
            const _id = result[0]._id;
            LotteryMessage.findByIdAndUpdate(_id, data, { new: true }, (error, succ) => {
                if (error) res.send(err)
                res.status(200).json({ msg: 'Update succfully' });
            });
        } else {
            const newLottery = new LotteryMessage(data);
            newLottery.save();
            res.status(200).json({ data: newLottery, msg: 'Save succfully' });
        }
        // await LotteryMessage.find({ $and: [{ date: date }, { type: "1" }] }, (err, result) => {
        //     if (err) {
        //         res.send(err)
        //     } else {
        //         //mongoose.Types.ObjectId.isValid(_id)
        //         if (result.length > 0) {
        //             const _id = result[0]._id;
        //             LotteryMessage.findByIdAndUpdate(_id, data, { new: true }, (error, succ) => {
        //                 if (error) res.send(err)
        //                 res.status(200).json({ msg: 'Update succfully' });
        //             });
        //         } else {
        //             const newLottery = new LotteryMessage(data);
        //             newLottery.save();
        //             res.status(200).json({ data: newLottery, msg: 'Save succfully' });

        //         }
        //     }
        // })
    } catch (error) {
        console.log(error)
    }
}
//======GiaiHai======
export const getGiaiHai = async (req, res) => {
    const date = req.params.date;
    try {
        const giaihai = await LotteryMessage.find({ 'date': date, 'type': "2" });
        res.status(200).json({ data: giaihai });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
//======GiaiBa======
export const getGiaiBa = async (req, res) => {
    const date = req.params.date;
    try {
        const giaiba = await LotteryMessage.find({ 'date': date, 'type': "3" });
        res.status(200).json({ data: giaiba });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
//======GiaiBon======
export const getGiaiBon = async (req, res) => {
    const date = req.params.date;
    try {
        const giaibon = await LotteryMessage.find({ 'date': date, 'type': "4" });
        res.status(200).json({ data: giaibon });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
//======GiaiNam======
export const getGiaiNam = async (req, res) => {
    const date = req.params.date;
    try {
        const giaibon = await LotteryMessage.find({ 'date': date, 'type': "5" });
        res.status(200).json({ data: giaibon });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
//======GiaiSau======
export const getGiaiSau = async (req, res) => {
    const date = req.params.date;
    try {
        const giaisau = await LotteryMessage.find({ 'date': date, 'type': "6" });
        res.status(200).json({ data: giaisau });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}
//======GiaiBay======
export const getGiaiBay = async (req, res) => {
    const date = req.params.date;
    try {
        const giaibay = await LotteryMessage.find({ 'date': date, 'type': "7" });
        res.status(200).json({ data: giaibay });
    } catch {
        res.status(404).json({ 'message': error.message });
    }
}