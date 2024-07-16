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

      <Section title="Possible Meanings" items={interpretation.possible_meaning} color="bg-orange-500" />
      <Section title="Insights" items={interpretation.insights} color="bg-green-600" />
      <Section title="Symbols" items={interpretation.symbols} color="bg-purple-500" />
      <Section title="Emotions" items={interpretation.emotions} color="bg-slate-500" />

      <button
        onClick={() => navigate('/interpret')}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Explore More Dreams
      </button>
    </div>
  );
}

const Section = ({ title, items, color }) => (
  <div>
    <h4 className="text-xl font-semibold mt-4">{title}</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item, index) => (
        <div key={index} className={`${color} text-white py-1 px-3 rounded-lg shadow-md`}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default InterpretationPage;
