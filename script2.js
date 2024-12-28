// script.js
document.getElementById('submit-button').addEventListener('click', () => {
    const gender = document.getElementById('gender').value;
    const interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);
    const ageMin = document.getElementById('age-min').value;
    const ageMax = document.getElementById('age-max').value;
  
    const matchesContainer = document.getElementById('matches');
    matchesContainer.innerHTML = '';
  
    // Simulate fetching matched travelers (replace this with an actual API call)
    const dummyData = [
      { name: 'John Doe', gender: 'male', interests: ['adventure'], age: 25 },
      { name: 'Jane Smith', gender: 'female', interests: ['history'], age: 30 },
      { name: 'Sam Green', gender: 'other', interests: ['nature'], age: 28 },
    ];
  
    const matches = dummyData.filter(traveler => {
      const matchesGender = gender === 'any' || traveler.gender === gender;
      const matchesInterests = interests.some(interest => traveler.interests.includes(interest));
      const matchesAge = (!ageMin || traveler.age >= ageMin) && (!ageMax || traveler.age <= ageMax);
      return matchesGender && matchesInterests && matchesAge;
    });
  
    if (matches.length) {
      matches.forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
          <h3>${match.name}</h3>
          <p>Gender: ${match.gender}</p>
          <p>Interests: ${match.interests.join(', ')}</p>
          <p>Age: ${match.age}</p>
        `;
        matchesContainer.appendChild(card);
      });
    } else {
      matchesContainer.innerHTML = '<p>No matches found based on your preferences.</p>';
    }
  });
  