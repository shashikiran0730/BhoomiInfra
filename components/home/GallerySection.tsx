export default function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <section className="section-gallery">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Recent site photos and completed work.</h2>
      </div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
