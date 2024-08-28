const multer = require('multer');
const path = require('path');
const fs = require('fs');
const File = require('../models/File'); 

const UPLOAD_DIR = path.join(__dirname, '../uploads');

const photoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(UPLOAD_DIR, 'photos')); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const photoFilter = (req, file, cb) => {
    const allowedTypes = /jpg|jpeg|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        return cb(null, true);
    }
    cb(new Error('Only jpg, jpeg, and gif files are allowed.'));
};

const resumeStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(UPLOAD_DIR, 'resumes')); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const resumeFilter = (req, file, cb) => {
    const allowedTypes = /doc|docx|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        return cb(null, true);
    }
    cb(new Error('Only .doc, .docx, and .pdf files are allowed.'));
};

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(UPLOAD_DIR, 'videos')); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const videoFilter = (req, file, cb) => {
    const allowedTypes = /mp4|wmv/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        return cb(null, true);
    }
    cb(new Error('Only mp4 and wmv files are allowed.'));
};

const uploadPhotos = multer({
    storage: photoStorage,
    fileFilter: photoFilter,
    limits: { files: 2 } 
}).array('photos', 2); 

const uploadResume = multer({
    storage: resumeStorage,
    fileFilter: resumeFilter
}).single('resume'); 

const uploadVideo = multer({
    storage: videoStorage,
    fileFilter: videoFilter
}).single('video'); 

exports.postPhotos = (req, res) => {
    uploadPhotos(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        req.files.forEach(file => {
            const newFile = new File({
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype
            });

            newFile.save()
                .then(() => console.log('Photo saved to database'))
                .catch(err => console.error('Failed to save photo to database', err));
        });

        res.status(200).json({ message: 'Photos uploaded successfully', files: req.files });
    });
};

exports.resumeUpload = (req, res) => {
    uploadResume(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const newFile = new File({
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            mimetype: req.file.mimetype
        });

        newFile.save()
            .then(() => console.log('Resume saved to database'))
            .catch(err => console.error('Failed to save resume to database', err));

        res.status(200).json({ message: 'Resume uploaded successfully', file: req.file });
    });
};

exports.videoUpload = (req, res) => {
    uploadVideo(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const newFile = new File({
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            mimetype: req.file.mimetype
        });

        newFile.save()
            .then(() => console.log('Video saved to database'))
            .catch(err => console.error('Failed to save video to database', err));

        res.status(200).json({ message: 'Video uploaded successfully', file: req.file });
    });
};

exports.getPhotos = (req, res) => {
    const photosDir = path.join(UPLOAD_DIR, 'photos');
    fs.readdir(photosDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to list photos' });
        }
        res.json(files.map(file => ({
            filename: file,
            url: `/uploads/photos/${file}`
        })));
    });
};

exports.getUpload = (req, res) => {
    const resumesDir = path.join(UPLOAD_DIR, 'resumes');
    fs.readdir(resumesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to list resumes' });
        }
        res.json(files.map(file => ({
            filename: file,
            url: `/uploads/resumes/${file}`
        })));
    });
};

exports.getVideo = (req, res) => {
    const videosDir = path.join(UPLOAD_DIR, 'videos');
    fs.readdir(videosDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to list videos' });
        }
        res.json(files.map(file => ({
            filename: file,
            url: `/uploads/videos/${file}`
        })));
    });
};
