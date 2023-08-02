import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const accessKey = "hfFW33aZFNV-rjK7Y_9cNBxyGZfyCNzCOBw0cKowIZU";
  const apiUrl = `https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`;

  const fetchImages = async () => {
    try {
      const response = await axios.get(apiUrl);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img src={images[currentImageIndex]?.urls?.regular} alt="Carousel" />
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
