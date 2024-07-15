// src/components/DreamForm.js
import React, { useState } from 'react';

function QueryForm() {
    const [dreamDescription, setDreamDescription] = useState('');
    const [interpretation, setInterpretation] = useState('');
    const [error, setError] = useState('');

    const handleDreamSubmit = async () => {
        const queryPrefix = "Interpret this dream: Return result in json form with dream_interpreation, possible meaning(must be list of tags), insights(tags), symbols(tags), emotions(tags with emoji) : ";
        const fullQuery = queryPrefix + dreamDescription;


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dream_description: fullQuery })
        };

        try {
            const response = await fetch('http://localhost:8000/api/predict', requestOptions);  // Update URL to point to your FastAPI server
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setInterpretation(data.dream_interpretation);
            setError('');
        } catch (error) {
            console.error('Error:', error);
            setInterpretation('');
            setError('Error occurred, please try again.');
        }
    };

    return (
        <div>
            <textarea
                value={dreamDescription}
                onChange={(e) => setDreamDescription(e.target.value)}
                placeholder="Enter your dream description"
            />
            <button onClick={handleDreamSubmit}>Interpret Dream</button>
            {interpretation && (
                <div>
                    <h3>Dream Interpretation</h3>
                    <p>{interpretation}</p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default QueryForm;
