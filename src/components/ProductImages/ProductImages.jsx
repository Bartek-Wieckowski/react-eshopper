import { useState } from "react";
import "./product-images.css";

export default function ProductImages({ images = [[]] }) {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <div className="product-images-wrapper">
      <img src={mainImg.url} alt="Main Images Product" className="main-img" />
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            src={image.url}
            alt="Product Mini Img"
            key={index}
            onClick={() => setMainImg(images[index])}
            className={`${image.url === mainImg.url ? "active" : null}`}
          />
        ))}
      </div>
    </div>
  );
}
