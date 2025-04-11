const artistData = {
    'Happy': {
      artist: 'Keith Haring',
      title: 'Untitled (Dance)',
      era: '1987',
      movement: 'Contemporary Art',
      description: "The composition of Untitled (Dance) depicts exuberant figures burst forth in an ecstatic dance. Haring's renowned style takes centre stage, with his iconic bold lines and vibrant colours breathing life into these simple figures.The artwork exudes an infectious spirit of elation, welcoming viewers to embrace their own innate rhythms and join the vibrant festivities of existence.",
      image: 'images-input/dance.avif',
      artistImage: 'images-input/keith.webp'
    },
    'Neutral': {
      artist: 'Claude Monet',
      title: 'La Pointe de la Hève',
      era: '1864',
      movement: 'Impressionism',
      description: "This painting shows the beach at Sainte-Adresse near Monet's home town of Le Havre, then a fashionable tourist resort. From the delicate colours of the shingle beach to the ribbons of sunlight on the horizon, there is ample evidence of his rigorous observation, as well as his developing skill in finding equivalents in paint for changing effects of light and varying natural textures.",
      image: 'images-input/lapointe.jpg',
      artistImage: 'images-input/monet.jpg'
    },
    'Sad': {
      artist: 'Edvard Munch',
      title: 'Melancholy',
      era: '1891',
      movement: 'Expressionism',
      description: 'Melancholy is a painting by the Norwegian artist Edvard Munch. Munch painted multiple variant versions of the expressionist work in oil on canvas during the period 1891–1893. The painting depicts a man with his head resting in his hand in a pensive mood at the edge of a shoreline.',
      image: 'images-input/melancholy.jpg',
      artistImage: 'images-input/edvard.jpg'
    }
  };
  
  const selectedMood = sessionStorage.getItem('selectedMood') || 'Neutral';
  
  const artistName = document.getElementById('artist-name');
  const artworkTitle = document.getElementById('artwork-title'); 
  const artistEra = document.getElementById('artist-era');
  const artistMovement = document.getElementById('artist-movement');
  const artistDescription = document.getElementById('artist-description');
  const artistPortrait = document.getElementById('artist-portrait');
  const artworkImage = document.getElementById('artwork-image');

  function updateArtistPage(mood) {
    const data = artistData[mood];
    
    artistName.textContent = data.artist;
    artworkTitle.textContent = data.title; 
    artistEra.textContent = data.era;
    artistMovement.textContent = data.movement;
    artistDescription.textContent = data.description;
    
    artistPortrait.src = data.artistImage;
    artistPortrait.alt = `Portrait of ${data.artist}`;
    
    artworkImage.src = data.image;
    artworkImage.alt = `${data.title} by ${data.artist}`; 
    
    document.title = `The Art Vault - ${data.artist} - ${data.title}`; 
  }
  

  updateArtistPage(selectedMood);