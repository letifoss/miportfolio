import React, { useState, useEffect } from 'react';

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='content d-flex flex-column justify-content-center align-items-center'>
      <h5>Antes de seguir, te dejo una imagen aleatoria de mi animal favorito :D </h5>
      <img src={imageUrl} alt="Imagen de Perro aleatoria" width={300} />
    </div>
  );
}

export default DogImage;
