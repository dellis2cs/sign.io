# app.py
from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (adjust as needed)

# Load your pre-trained RandomForest model
model_dict = pickle.load(open('../model/model.p', 'rb'))
model = model_dict['model']

# Map numeric labels to sign characters
labels = {0: 'A', 1: 'B', 2: 'L',3:'C',4:'D',5:'E'}

@app.route('/predict', methods=['POST'])
def predict():
    # Expecting JSON: { "landmarks": [list of numbers] }
    data = request.get_json()
    landmarks = data.get("landmarks", [])
    if not landmarks:
        return jsonify({"error": "No landmark data provided"}), 400

    # Convert landmarks list to numpy array (reshape to 1 sample)
    data_np = np.array(landmarks).reshape(1, -1)
    prediction = model.predict(data_np)
    predicted_sign = labels[int(prediction[0])]

    return jsonify({"prediction": predicted_sign})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
