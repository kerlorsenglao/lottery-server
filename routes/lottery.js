import express from 'express';
import {getLottery,createLottery,getDacbiet,
    getGiaiMot,getGiaiHai,getGiaiBa,getGiaiBon,getGiaiNam,getGiaiSau,getGiaiBay,
    postDacbiet,postGiaiMot,getLotteryByDate,removeLotteryByDate} from '../controllers/lottery.js';

const router = express.Router();

router.post('/',createLottery);
router.get('/',getLottery);
router.get('/:date',getLotteryByDate);
router.delete('/:date',removeLotteryByDate);

router.get('/dacbiet/:date',getDacbiet);
router.post('/dacbiet',postDacbiet);

router.get('/giai1/:date',getGiaiMot);
router.post('/giai1',postGiaiMot);

router.get('/giai2/:date',getGiaiHai);
router.get('/giai3/:date',getGiaiBa);
router.get('/giai4/:date',getGiaiBon);
router.get('/giai5/:date',getGiaiNam);
router.get('/giai6/:date',getGiaiSau);
router.get('/giai7/:date',getGiaiBay);


export default router