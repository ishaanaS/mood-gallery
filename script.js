const paintings = [
    { title: "Painting 1", src: "images-input/W.jpg", year: 1951, category: "expressionism" },
    { title: "Painting 2", src: "images-input/Y.jpg", year: 1890, category: "modern" },
    { title: "Painting 3", src: "images-input/L.jpg", year: 1970, category: "contemporary" },
    { title: "Painting 4", src: "images-input/B.png", year: 1890, category: "impressionism" },
    { title: "Painting 5", src: "images-input/F.webp", year: 1951, category: "modern" },
    { title: "Painting 6", src: "images-input/D.jpg", year: 1951, category: "abstract" },
    { title: "Painting 7", src: "images-input/E.jpg", year: 1951, category: "expressionism" },
    { title: "Painting 8", src: "images-input/N.jpg", year: 1970, category: "contemporary" },
    { title: "Painting 9", src: "images-input/O.webp", year: 1970, category: "modern" },
    { title: "Painting 10", src: "images-input/M.jpg", year: 1890, category: "impressionism" },
    { title: "Painting 11", src: "images-input/Q.jpg", year: 1951, category: "contemporary" },
    { title: "Painting 12", src: "images-input/G.jpg", year: 1890, category: "abstract" },
    { title: "Painting 13", src: "images-input/H.jpg", year: 1970, category: "impressionism" },
    { title: "Painting 14", src: "images-input/dance.avif", year: 1970, category: "contemporary" },
    { title: "Painting 15", src: "images-input/lapointe.jpg", year: 1890, category: "impressionism" },
    { title: "Painting 16", src: "images-input/melancholy.jpg", year: 1890, category: "expressionism" },
];


const scatterBtn = document.getElementById('organize-btn');
if (scatterBtn) {
    scatterBtn.textContent = 'Scatter';
}


function renderPaintings() {
    const selectedCategory = document.getElementById('category-filter').value;
    const selectedYear = document.getElementById('year-filter').value;

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing paintings


    const filteredPaintings = paintings.filter(painting => {
        const matchesCategory = selectedCategory === 'all' || painting.category === selectedCategory;
        const matchesYear = selectedYear === 'all' || painting.year.toString() === selectedYear;
        return matchesCategory && matchesYear;
    });

  
    filteredPaintings.forEach(painting => {
        const img = document.createElement('img');
        img.src = painting.src;
        img.alt = painting.title;
        img.className = 'painting';
        gallery.appendChild(img);
    });


    scatterPaintings();
}

function scatterPaintings() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 2; // Increase height for scrolling
    const paintingSize = 275;
    
    document.querySelectorAll('.painting').forEach(painting => {
        const maxX = containerWidth - paintingSize;
        const maxY = containerHeight - paintingSize;
        const minY = 30; // Minimum Y to avoid overlap with header
        
        painting.style.left = `${Math.random() * maxX}px`;
        painting.style.top = `${Math.random() * (maxY - minY) + minY}px`;
        
        // Slight rotation - between -5 and +5 degrees
        const rotation = (Math.random() - 0.5) * 30;
        painting.style.transform = `rotate(${rotation}deg)`;
    });
}

// scatter button 
if (scatterBtn) {
    // Remove old event listener by replacing it
    scatterBtn.replaceWith(scatterBtn.cloneNode(true));
    // Get the new button
    const newScatterBtn = document.getElementById('organize-btn');
    // Add new event listener
    newScatterBtn.addEventListener('click', scatterPaintings);
}

//  dropdown filters
document.getElementById('category-filter').addEventListener('change', renderPaintings);
document.getElementById('year-filter').addEventListener('change', renderPaintings);

// rendering of paintings
renderPaintings();