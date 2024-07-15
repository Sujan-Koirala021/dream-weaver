import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import dreamImage from '../assets/dream_query.png'; // Add your image path here

function DreamForm() {
  const [dreamDescription, setDreamDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDreamSubmit = async () => {
    setLoading(true);
    setError('');
    const queryPrefix = "Interpret this dream: Return result in json form with dream_interpretation, possible meaning(must be list of tags), insights(tags), symbols(tags), emotions(tags with emoji) : ";
    const fullQuery = queryPrefix + dreamDescription;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dream_description: fullQuery })
    };

    try {
      const response = await fetch('http://localhost:8000/api/predict', requestOptions); // Update URL to point to your FastAPI server
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Extract and parse the JSON string from the response
      const jsonString = data.dream_interpretation.match(/```json\n([\s\S]*?)\n```/)[1];
      const cleanedData = JSON.parse(jsonString);

      // Navigate to the interpretation page with the cleaned data
      navigate('/result', { state: { interpretation: cleanedData } });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setError('Error occurred, please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <div className="flex justify-center mb-6">
        <img src={dreamImage} alt="Dream" className="w-48 h-48 object-cover rounded-full border-4 border-gray-700" />
      </div>
      <div className="mb-6 text-center text-lg font-semibold text-blue-300 animate-fade-in">
        "Dreams are the touchstones of our character." - Henry David Thoreau
      </div>
      <textarea
        className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={dreamDescription}
        onChange={(e) => setDreamDescription(e.target.value)}
        placeholder="Enter your dream description"
        rows="4"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
        onClick={handleDreamSubmit}
        disabled={loading}
      >
        {loading ? <Spinner /> : 'Interpret Dream'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default DreamForm;
