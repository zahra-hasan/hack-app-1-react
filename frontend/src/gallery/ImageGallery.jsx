import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImageTile from "./ImageTile";

const ImageGallery = ({ images }) => {
  return images.length > 0 ?
  (
    <>
      <h2>Notes Gallery</h2>
      <CardGroup>
        {images.map((img, k) => (
          <ImageTile image={img} key={k} />
        ))}
      </CardGroup>
    </>
  ) : (
    <>
      <p>No notes found.</p>
      <p>Upload your first handwritten note!</p>
    </>
  );
};

export default ImageGallery;
