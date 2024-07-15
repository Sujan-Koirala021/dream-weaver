async function predictDreamWithFastAPI(text) {
  const apiUrl = 'http://127.0.0.1:8000';  // Replace with your FastAPI server URL

  try {
      const fetch = await import('node-fetch');
      const response = await fetch.default(`${apiUrl}/predict-dream?text=${encodeURIComponent(text)}`);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Prediction:', data.completion);
      return data.completion;
  } catch (error) {
      console.error('Error predicting dream:', error);
  }
}

// Example usage
const dreamText = 'Interpret this dream: Seeing papaya in 40 words';
predictDreamWithFastAPI(dreamText);
