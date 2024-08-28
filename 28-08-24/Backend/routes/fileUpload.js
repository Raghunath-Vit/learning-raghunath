const express = require('express');
const router = express.Router();
const fileControllers = require('../controllers/filesUpload');

router.post('/photosupload', fileControllers.postPhotos);
router.post('/resume', fileControllers.resumeUpload);
router.post('/video', fileControllers.videoUpload);

router.get('/photosupload', fileControllers.getPhotos);
router.get('/resume', fileControllers.getUpload);
router.get('/video', fileControllers.getVideo);

module.exports = router;
