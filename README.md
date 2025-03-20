# sign.io


## Description

This project is a full-stack platform that recognizes and translates sign language gestures in real-time.


## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#usage)

## Technologies Used

- **React** - For building the user interface.
- **Express** - For handling routes and connecting to the frontend.
- **Flask** - For handling the machine learning model and api calls for the prediction
- **TailwindCSS** - For styling the layout.

## Getting Started

### Prerequisites

- **Node.js**, **npm**, and **postres** installed on your system.

### Installation

- To get started, clone the repository and install dependencies
  
   ```bash
   Clone the repository
   ```
   ```bash
   cd client
   ```
   ```bash
   npm install
   ```
    ```bash
   cd server
   ```
   ```bash
   pip install Flask==2.0.2 flask-cors==3.0.10 numpy==1.23.5 gunicorn==20.1.0 Werkzeug<2.1 scikit-learn==1.6.1
   ```
   

## Usage

Run the application
```bash
cd client
npm run dev
   ```
```bash
cd server
cd flask
python3 app.py
   ```

