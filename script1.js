// script.js
document.getElementById('generate-itinerary').addEventListener('click', () => {
    const destination = document.getElementById('destination').value;
    const companions = document.getElementById('companions').value;
    const duration = document.getElementById('duration').value;
    const preferences = Array.from(document.getElementById('preferences').selectedOptions).map(option => option.value);
  
    const itineraryOutput = document.getElementById('itinerary-output');
    itineraryOutput.innerHTML = '';
  
    // Simulate itinerary generation (replace this with an actual API call)
    const dummyItinerary = `
      <h3>Destination: ${destination}</h3>
      <p>Traveling with: ${companions}</p>
      <p>Duration: ${duration} days</p>
      <h4>Recommended Plan:</h4>
      <ul>
        <li><strong>Day 1:</strong> Arrival and explore local landmarks.</li>
        <li><strong>Day 2:</strong> Visit the best restaurants and enjoy ${preferences.includes('luxury') ? 'fine dining' : 'local delicacies'}.</li>
        <li><strong>Day 3:</strong> Adventure activities or cultural experiences.</li>
        <li><strong>Day 4:</strong> Relaxation at your accommodation.</li>
        <li><strong>Day 5:</strong> Departure with unforgettable memories.</li>
      </ul>
    `;
  
    itineraryOutput.innerHTML = dummyItinerary;
  });
  