const express = require('express');
const router = express.Router();
const sinhvien = require('../models/sinhvienModel');
//get(select)
//http://localhost:5000
router.get('/', async (req, res) => {
    try {
        const _id=req.params._id;
        const sinhviens = await sinhvien.find();//lay ve toan bo sinh vien co trong bang
        res.render('sinhviens', { sinhviens: sinhviens });//tra ve file ejs
        console.log(sinhviens)
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
});
//post (new sinhvien)
//http://localhost:5000/sinhvien
router.post('/sinhvien', async (req, res) => {
    try {
        const _id=req.params._id;
        const { id, name } = req.body;//lay du lieu nguoi nhap tu react native
        const sinhvien1 = new sinhvien({ id, name });//tao doi tuong voi du lieu user nhap
        await sinhvien1.save();//luu vao bang du lieu
        res.json(sinhvien1);//tra ve ket qua
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({ error: error })

    }
});
//put(update)
//http://localhost:5000/sinhvien/:_id
router.put('/:_id', async (req, res) => {
    try {
        const _id=req.params._id;
        const { id, name } = req.body;//lay du lieu nguoi nhap tu react native
        const updateSinhvien = await sinhvien.findByIdAndUpdate(_id, { id, name }, { new: true });
        res.json(updateSinhvien);
        console.log(updateSinhvien);
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
});
//delete(delete)
//http://localhost:5000/sinhvien/:_id
router.delete('/sinhvien/:_id', async (req, res) => {
    try {
        const _id=req.params._id;
        const {id,name}=req.body;//lay du lieu nguoi dung nhap tu react native
        const deleteSinhvien = await sinhvien.findByIdAndDelete(_id,{id,name},{new:true});
        res.json(deleteSinhvien);
        console.log(deleteSinhvien);
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
})
module.exports = router;