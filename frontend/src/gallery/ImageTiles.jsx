import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImageTile from "./ImageTile";

const ImageTiles = ({ images }) => {
  return (
    <CardGroup>
      {images.map((img) => (
        <ImageTile image={img} />
      ))}
    </CardGroup>
  );
};

export default ImageTiles;
