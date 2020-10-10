import express from "express";
import multer from 'multer'
import path  from "path";
import Hotel from "../models/hotelModel";

const router = express.Router();

const avatarStorage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/avatar')
   },
   filename: function (req, file, cb) {
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
});


const galleryStorage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/gallery')
   },
   filename: function (req, file, cb) {
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
});

const avatarUpload = multer({storage:avatarStorage}).single('avatar');
const galleryUpload = multer({storage:galleryStorage}).array('gallery');

router.get("/", async (req, res) => {
   const data = await Hotel.find({});
   res.send(data);
});

router.post('/avatar-uploads', avatarUpload, (req, res) => {
   res.send(`${req.file.path}`)
});

router.post('/gallery-uploads', galleryUpload, (req, res) => {
   let gallery = req.files.map(file => file.path);
   res.send(`${gallery}`)
});



router.post("/", async (req, res) => {
      const { title, description, capacity, size, price, avatar,gallery  } = req.body
      let images = gallery.split(',');
      const newHotel = new Hotel({
         title, 
         description, 
         avatar, 
         capacity, 
         size, 
         price,
         gallery: images
      });
      newHotel.save().then(savehotel=>{
         return res.status(200).send({
               message: "New Hotel Info Created",
               data: savehotel
         });
      }).catch(err=>{
         console.log(err)
         return res.status(500).json({
            error: err
         });
      });
});

export default router;