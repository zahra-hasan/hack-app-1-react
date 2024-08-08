import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImageTile from "./ImageTile";

const ImageGallery = ({ images }) => {
  return (
    <>
      <h2>Image Gallery</h2>
      <CardGroup>
        {images.map((img, k) => (
          <ImageTile image={img} key={k} />
        ))}
      </CardGroup>
    </>
  );
};

export default ImageGallery;
