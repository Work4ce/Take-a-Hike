const { Router } = require('express');
const galleryRouter = Router();
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../../.env')});
const axios = require('axios');
const { cloudinary } = require('../../utils/coudinary');

galleryRouter.post('/', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'trailfeathers'
  })
  res.json({msg: "YOOOO"})
} catch (error) {
  console.error(error)
  res.status(500).json({err: 'OOPS'})
}
})



galleryRouter.get('/', async (req, res) => {

  const resources = await cloudinary.search
  .expression(`resource_type:image AND folder:trailfeathers/*`)
  .sort_by('created_at', 'desc')
  .max_results(30)
  .execute();

  const secureImageUrls = resources.resources
    .filter((imageObj) => imageObj.folder === 'trailfeathers')
    .map((image) => image.secure_url);
  res.json(secureImageUrls);


})




module.exports = {
  galleryRouter,
}