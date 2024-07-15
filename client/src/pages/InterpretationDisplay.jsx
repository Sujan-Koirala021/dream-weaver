import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function InterpretationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const interpretation = location.state?.interpretation;

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white mt-8">
      <h3 className="text-2xl font-semibold mb-4">Dream Interpretation</h3>
      <p className="mb-6">{interpretation.dream_interpretation}</p>

      <h4 className="text-xl font-semibold mt-4">Possible Meanings</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {interpretation.possible_meaning.map((meaning, index) => (
          <div key={index} className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md">
            {meaning}
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold mt-4">Insights</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {interpretation.insights.map((insight, index) => (
          <div key={index} className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md">
            {insight}
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold mt-4">Symbols</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {interpretation.symbols.map((symbol, index) => (
          <div key={index} className="bg-purple-500 text-white py-1 px-3 rounded-lg shadow-md">
            {symbol}
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold mt-4">Emotions</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {interpretation.emotions.map((emotion, index) => (
          <div key={index} className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-md">
            {emotion}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Explore More Dreams
      </button>
    </div>
  );
}

export default InterpretationPage;
