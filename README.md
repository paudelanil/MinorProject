# Emotion-Based Music Recommendation System 🎵😊

This project integrates facial emotion classification with a music recommendation engine. Users upload an image, and the system predicts their emotion, recommending music tracks that align with their mood. The application includes a **Django backend**, a **React frontend**, and a **Dockerized environment** for easy deployment.

## Features
- **Emotion Classification**: Detects faces using OpenCV and classifies emotions with a custom model.
- **Music Recommendation**: Suggests songs based on valence-arousal mapping, leveraging a curated Spotify music database.
- **Interactive UI**: A React-based frontend allows users to upload images and preview song recommendations.
- **Rich Music Details**: Includes song name, album cover, and 30-second audio previews.

---

## Components

### Backend (Django)
- Hosts the ML model for emotion classification.
- Exposes API routes for processing uploaded images and returning music recommendations.
- Stores a music database populated using the Spotify API.

### Frontend (React)
- Provides a user-friendly interface for uploading images.
- Displays recommended songs along with album artwork and audio previews.

### ML Model
- Utilizes a Haar Cascade classifier for face detection.
- Maps classified emotions to valence-arousal (V-A) values for music selection.

---

## Running the Project with Docker Compose



1. Clone the repository:
   ```bash
   git clone git@github.com:paudelanil/MinorProject.git
   cd MinorProject

2. Start the services:
   ```bash
   docker-compose up --build
   
3. Access the application
   - FrontEnd: http://localhost:3000
  
### Prerequisites
Docker and Docker Compose installed.

### Future Enhancements
- Add multilingual support for emotions and recommendations.
- Expand the database with additional music genres and regional tracks.

