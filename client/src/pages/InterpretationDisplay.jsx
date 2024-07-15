import React from 'react';

function InterpretationDisplay({ interpretation }) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Dream Interpretation</h3>
      <p className="mb-2">{interpretation.dream_interpretation}</p>

      <h4 className="text-lg font-semibold mt-4">Possible Meanings</h4>
      <ul className="list-disc list-inside">
        {interpretation.possible_meaning.map((meaning, index) => (
          <li key={index}>{meaning}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold mt-4">Insights</h4>
      <ul className="list-disc list-inside">
        {interpretation.insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold mt-4">Symbols</h4>
      <ul className="list-disc list-inside">
        {interpretation.symbols.map((symbol, index) => (
          <li key={index}>{symbol}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold mt-4">Emotions</h4>
      <ul className="list-disc list-inside">
        {interpretation.emotions.map((emotion, index) => (
          <li key={index}>{emotion}</li>
        ))}
      </ul>
    </div>
  );
}

export default InterpretationDisplay;
