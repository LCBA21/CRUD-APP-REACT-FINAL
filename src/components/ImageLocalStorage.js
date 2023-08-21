import React, { useState, useEffect } from 'react';

const ImageLocalStorage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        localStorage.setItem('uploadedImage', imageData);
        setImage(imageData);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="image-local-storage">
     
      <input
        type="file"
        id="image-input"
        accept="image/*"
        onChange={handleImageUpload}
        className='img-icon'
      />
      {image && <img  src={image} alt="Uploaded" className="circle-image" />}
    </div>
  );
};

export default ImageLocalStorage;
