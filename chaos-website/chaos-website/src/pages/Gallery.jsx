import React from 'react';

const Gallery = () => {
  const images = [
    "https://placekitten.com/400/300",
    "https://placekitten.com/401/300",
    "https://placekitten.com/402/300"
  ];

  return (
    <section className="py-16 bg-gray-800 text-center">
      <h2 className="text-3xl font-semibold mb-8">画廊</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`作品 ${i+1}`} className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;