import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css'; 

const FileUploadForm = () => {
  const [photos, setPhotos] = useState([]);
  const [resume, setResume] = useState(null);
  const [video, setVideo] = useState(null);

  const [photoPreviewVisible, setPhotoPreviewVisible] = useState(false);
  const [resumePreviewVisible, setResumePreviewVisible] = useState(false);
  const [videoPreviewVisible, setVideoPreviewVisible] = useState(false);

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const resetForm = () => {
    setPhotos([]);
    setResume(null);
    setVideo(null);
    setPhotoPreviewVisible(false);
    setResumePreviewVisible(false);
    setVideoPreviewVisible(false);
  };

  const showMessage = (msg, type) => {
    toast(msg, {
      autoClose: 3000,
      className: `toast-${type}`,
    });
  };

  const uploadPhotos = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    photos.forEach((photo) => formData.append('photos', photo));
    try {
      await axios.post('http://localhost:3000/file/photosupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      showMessage('Photos uploaded successfully!', 'success');
      resetForm();
    } catch (error) {
      showMessage('Error uploading photos.', 'error');
    }
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    try {
      await axios.post('http://localhost:3000/file/resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      showMessage('Resume uploaded successfully!', 'success');
      resetForm();
    } catch (error) {
      showMessage('Error uploading resume.', 'error');
    }
  };

  const uploadVideo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);
    try {
      await axios.post('http://localhost:3000/file/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      showMessage('Video uploaded successfully!', 'success');
      resetForm();
    } catch (error) {
      showMessage('Error uploading video.', 'error');
    }
  };

  const previewPhotos = () => (
    <div className="preview-container">
      <h5 className="preview-heading">Photo Previews:</h5>
      <div className="d-flex flex-wrap">
        {photos.map((photo, index) => (
          <div key={index} className="m-2">
            <Image
              src={URL.createObjectURL(photo)}
              alt={`Photo ${index + 1}`}
              thumbnail
              className="preview-img"
            />
            <div className="text-center mt-1">{photo.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const previewResume = resume ? (
    <div className="preview-container">
      <h5 className="preview-heading">Resume Preview:</h5>
      <div className="d-flex align-items-center">
        <div className="me-3"><strong>Resume:</strong></div>
        <div>
          {resume.type === 'application/pdf' ? (
            <embed
              src={URL.createObjectURL(resume)}
              type="application/pdf"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            />
          ) : (
            <a href={URL.createObjectURL(resume)} download className="preview-link">
              {resume.name}
            </a>
          )}
        </div>
      </div>
    </div>
  ) : null;

  const previewVideo = video ? (
    <div className="preview-container">
      <h5 className="preview-heading">Video Preview:</h5>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-2"><strong>Video:</strong> {video.name}</div>
        <video
          controls
          src={URL.createObjectURL(video)}
          className="w-100"
          style={{ maxWidth: '400px', maxHeight: '300px' }}
        />
      </div>
    </div>
  ) : null;

  return (
    <Container className="outer-container py-4">
      <h1 className="heading-head">Upload Files</h1>

      <Form onSubmit={uploadPhotos} className="mb-5">
        <Form.Group>
          <Form.Label>Profile Photos (JPG, JPEG, GIF)</Form.Label>
          <Form.Control
            type="file"
            multiple
            accept=".jpg,.jpeg,.gif"
            onChange={handlePhotoChange}
            className="mb-3"
          />
        </Form.Group>
        {photoPreviewVisible && previewPhotos()}
        <Button variant="primary" type="submit" disabled={photos.length === 0}>Upload Photos</Button>
        <Button 
          variant="secondary" 
          onClick={() => setPhotoPreviewVisible(!photoPreviewVisible)}
          className="ms-2"
        >
          {photoPreviewVisible ? 'Hide Preview' : 'Preview Photos'}
        </Button>
      </Form>

      <Form onSubmit={uploadResume} className="mb-5">
        <Form.Group>
          <Form.Label>Resume (DOC, DOCX, PDF)</Form.Label>
          <Form.Control
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={handleResumeChange}
            className="mb-3"
          />
        </Form.Group>
        {resumePreviewVisible && previewResume}
        <Button variant="primary" type="submit" disabled={!resume}>Upload Resume</Button>
        <Button 
          variant="secondary" 
          onClick={() => setResumePreviewVisible(!resumePreviewVisible)}
          className="ms-2"
        >
          {resumePreviewVisible ? 'Hide Preview' : 'Preview Resume'}
        </Button>
      </Form>

      <Form onSubmit={uploadVideo} className="mb-5">
        <Form.Group>
          <Form.Label>Video (MP4, WMV)</Form.Label>
          <Form.Control
            type="file"
            accept=".mp4,.wmv"
            onChange={handleVideoChange}
            className="mb-3"
          />
        </Form.Group>
        {videoPreviewVisible && previewVideo}
        <Button variant="primary" type="submit" disabled={!video}>Upload Video</Button>
        <Button 
          variant="secondary" 
          onClick={() => setVideoPreviewVisible(!videoPreviewVisible)}
          className="ms-2"
        >
          {videoPreviewVisible ? 'Hide Preview' : 'Preview Video'}
        </Button>
      </Form>

      <ToastContainer />
    </Container>
  );
};

export default FileUploadForm;
