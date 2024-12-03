import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './audioStyle.css'; // Import the external CSS file


const API_BASE_URL = 'http://localhost:8000';

const MusicCard = ({ musicData }) => {
  const defaultImage = "https://media.wired.com/photos/5927001eaf95806129f51539/master/w_1920,c_limit/spotify-logo-zoom-s.jpg"

  return (
    <Col sm={3} className="mb-3"> {/* Adjust margin here */}
      <Card style={{ width: '80%',margin: '0 auto' }}>
        <Card.Img variant="top" src={musicData['Album Image'] || defaultImage} alt="Album Cover" />
        <Card.Body>
          <Card.Title>{musicData['Song Name']}</Card.Title>
          <Card.Text>
            {/* <p>Artist: {musicData['Artist']}</p> */}
            {/* <p>Emotion: {musicData['Emotion']}</p> */}
            <audio controls style={{ width: '100%' }}>
              <source src={musicData['Preview Url']} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

function SubmittedImage({ imageUrl, imageEmotion }) {
  return (
    <div className="d-flex justify-content-center align-items-center mb-3"> {/* Adjust margin here */}
      <Card style={{ width: '18rem' }}>
        {/* Display the resized image */}
        <Card.Img variant="top" src={imageUrl} style={{ maxHeight: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{imageEmotion}</Card.Title>
          <Card.Text>
            {/* Add any additional text or content here */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}


const MusicList = ({ musicDataList }) => {
  return (
    <Row>
      {musicDataList.map((musicData, index) => (
        <MusicCard key={index} musicData={musicData} />
      ))}
    </Row>
  );
};

function PostCreate() {
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(null);
  const [predictionResponse, setPredictionResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    // Reset previous response when a new image is selected
    setPredictionResponse([]);
    setShowImage(false);
    setError(null);

    setImage(e.target.files[0]);
  };

  const handleClear = () => {
    setPredictionResponse([]);
    setShowImage(false);
    setError(null);
  };

  const handleSubmit = async () => {
    if (image !== null) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post(`${API_BASE_URL}/api/detect`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setPredictionResponse(response.data);
        
        console.log(predictionResponse["Music Data"]);

        setShowImage(true);
      } catch (error) {
        console.error('Error uploading image:', error);
        setError('An error occurred while processing the image. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
<div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', flexDirection: 'column' }}>
      <Card style={{ width: '20rem', borderRadius: '15px', padding: '20px', textAlign: 'center' }}>
        <Form.Group controlId="formFile">
          <Form.Label>Upload Your Photo here</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleFileChange}
            style={{ borderRadius: '10px', marginBottom: '10px' }}
          />
          <Button onClick={handleSubmit} variant="light">
            Submit
            
          </Button>
        </Form.Group>

        {/* Display loading spinner while waiting for API response */}
        {loading && <p>Loading...</p>}

        {/* Display error message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Display the resized image using BasicExample only when showImage is true */}
        {showImage && <SubmittedImage imageEmotion={predictionResponse['Emotion']} imageUrl={URL.createObjectURL(image)} />}
      </Card>

      {predictionResponse["Music Data"] && (
        <>
          <h2>Recommended Songs</h2>
          
          <MusicList musicDataList={predictionResponse['Music Data']} />
          {/* Display the clear button */}
          <Button onClick={handleClear} variant="dark" style={{ marginTop: '10px' }}>
            Clear
          </Button>
          

        </>
      )}
    </div>
  );
};


export default PostCreate;
