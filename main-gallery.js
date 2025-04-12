const paintings = [
    { title: "Painting 1", src: "images-input/W.jpg", year: 1951, category: "expressionism" },
    { title: "Painting 2", src: "images-input/Y.jpg", year: 1890, category: "modern" },
    { title: "Painting 3", src: "images-input/L.jpg", year: 1970, category: "expressionism" },
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
    { title: "Painting 17", src: "images-input/cont.jpg", year: 1970, category: "contemporary" },
    { title: "Painting 18", src: "images-input/cont2.jpg", year: 1970, category: "contemporary" },
    { title: "Painting 19", src: "images-input/cont 3.jpg", year: 1970, category: "contemporary" },
];

const scatterBtn = document.getElementById('organize-btn');
if (scatterBtn) {
    scatterBtn.textContent = 'Scatter';
}

function renderPaintings() {
    const selectedCategory = document.getElementById('category-filter').value;
    const selectedYear = document.getElementById('year-filter').value;

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // clear existing paintings

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

function getPaintingSize() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 450) {
        return { width: 150, height: 100 };
    } else if (screenWidth <= 768) {
        return { width: 200, height: 133 };
    } else {
        return { width: 300, height: 200 };
    }
}

function scatterPaintings() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 2; // extra height for scrolling
    const paintingSize = getPaintingSize();
    const isMobile = window.innerWidth <= 768;
    
    document.querySelectorAll('.painting').forEach(painting => {
       
        const maxX = containerWidth - paintingSize.width;
        const maxY = containerHeight - paintingSize.height;
        const minY = isMobile ? 300 : 30; // overlap stuff
        
        painting.style.left = `${Math.random() * maxX}px`;
        painting.style.top = `${Math.random() * (maxY - minY) + minY}px`;
        
        const rotation = (Math.random() - 0.5) * 30;
        painting.style.transform = `rotate(${rotation}deg)`;
    });
}

// scatter button
if (scatterBtn) {
    scatterBtn.replaceWith(scatterBtn.cloneNode(true));
    const newScatterBtn = document.getElementById('organize-btn');
    newScatterBtn.addEventListener('click', scatterPaintings);
}

// dropdown filters
document.getElementById('category-filter').addEventListener('change', renderPaintings);
document.getElementById('year-filter').addEventListener('change', renderPaintings);


window.addEventListener('resize', () => {
    setTimeout(scatterPaintings, 100);
});


renderPaintings();