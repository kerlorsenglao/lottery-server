
import LotteryMessage from "../models/lotteryMessage.js";

export const getLottery = async (req, res) => {
    try {
        const lottery = await LotteryMessage.find();
        res.status(200).json({ data: lottery });
    } catch (error) {
        res.status(404).json({ 'message': error.message });
    }
}

export const createLottery = async (req, res) => {
    const lottery = req.body;
    const newLottery = new LotteryMessage(lottery);
    try {
        await newLottery.save();
        res.status(201).json(newLottery);
    } catch (error) {
        res.status(409).json({ 'message': error.message });
    }
}

//======dacbiet======
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
    // console.log(data);
    try {
        const result = LotteryMessage.find({ 'date': date, 'type': "0" });
        if (result.length < 1) {
            //Just save
            const newLottery = new LotteryMessage(data);
            await newLottery.save()
            res.json({ status: true, msg: 'Save successfully' });
        } else {
            // have update
            await LotteryMessage.updateOne(result[0],{$set:data})
            res.json({ status: true, msg: 'Update successfully' });
        }
    } catch (error) {

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
    try {
        const result = LotteryMessage.find({ 'date': date, 'type': 1 });
        if (result.length < 1) {
            //Just save
            const newLottery = new LotteryMessage(data);
            await newLottery.save()
            res.json({ status: true, msg: 'Save successfully' });
        } else {
            // have update
            await LotteryMessage.updateOne(result[0],{$set:data}),
            res.json({ status: true, msg: 'Update successfully' });
        }
    } catch (error) {

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