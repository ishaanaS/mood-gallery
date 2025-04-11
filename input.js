
const slider = document.getElementById('moodSlider');
const moodText = document.getElementById('moodText');
const submitButton = document.querySelector('.submit-button');
const closeButton = document.querySelector('.close-button');

// mood text based on slider value
function updateMoodText(value) {
  if (value < 33) {
    moodText.textContent = "Happy";
  } else if (value < 67) {
    moodText.textContent = "Neutral";
  } else {
    moodText.textContent = "Sad";
  }
}


updateMoodText(slider.value);


slider.addEventListener('input', function() {
  updateMoodText(this.value);
});


const artistPages = {
  'Happy': {
    artist: 'Vincent van Gogh',
    era: '1889',
    movement: 'Post-Impressionism',
    description: 'Vincent van Gogh created vibrant, emotionally expressive paintings with bold colors and dramatic, impulsive brushwork. His "Sunflowers" series radiates warmth and optimism, reflecting his brief periods of happiness and creative fulfillment.',
    image: 'vangogh-sunflowers.jpg',
    artistImage: 'vangogh.jpg'
  },
  'Neutral': {
    artist: 'Andy Warhol',
    era: '1962',
    movement: 'Pop Art',
    description: "Andy Warhol famously appropriated familiar images from consumer culture and mass media, among them celebrity and tabloid news photographs, comic strips, and, in this work, the widely consumed canned soup made by the Campbell's Soup Company.",
    image: 'warhol-campbells.jpg',
    artistImage: 'warhol.jpg'
  },
  'Sad': {
    artist: 'Edvard Munch',
    era: '1893',
    movement: 'Expressionism',
    description: 'Edvard Munch explored themes of isolation, anxiety, and psychological torment. "The Scream" portrays an agonized figure against a landscape with an intensely anxious mood, representing the universal human experience of anxiety and fear.',
    image: 'munch-scream.jpg',
    artistImage: 'munch.jpg'
  }
};

// submission
submitButton.addEventListener('click', function() {
  const moodValue = slider.value;
  const moodDescription = moodText.textContent;
  
  //  alert with the selected mood
  alert(`mood submitted: ${moodDescription} (${moodValue})`);
  

  sessionStorage.setItem('selectedMood', moodDescription);
  

  setTimeout(() => {
    window.location.href = 'artist-page.html';
  }, 500);
});


closeButton.addEventListener('click', function() {
  alert('are you sure?');
});