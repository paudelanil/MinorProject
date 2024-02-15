import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MusicCard = ({ musicData }) => {
  return (
    <Col sm={3} className="mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{musicData['Song Name']}</Card.Title>
          <Card.Text>
            <audio controls style={{ width: '100%' }}>
              <source src={musicData['Preview Url']} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
            Song ID: {musicData['Song ID']}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

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
  const [image, setImage] = useState(null);
  const [predictionResponse, setPredictionResponse] = useState([]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (image !== null) {
      let formData = new FormData();
      formData.append('image', image);

      try {
        const response = await axios.post('http://localhost:8000/api/detect', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setPredictionResponse(response.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Your Photo here</Form.Label>
        <Form.Control type="file" name="image" onChange={handleFileChange} />
      </Form.Group>

      <Button onClick={handleSubmit} variant="dark">
        Submit
      </Button>

      
      {/* Your existing code */}
      {predictionResponse['Music Data'] && (
        <div>
          <h2>Recommended Songs</h2>
          <MusicList musicDataList={predictionResponse['Music Data']} />
        </div>
      )}
    
    </>
  );
}

export default PostCreate;
