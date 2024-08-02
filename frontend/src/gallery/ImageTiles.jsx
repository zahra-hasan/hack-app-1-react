import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImageTile from "./ImageTile";

const ImageTiles = ({ images }) => {
  return (
    <CardGroup>
      {images.map((img, k) => (
        <ImageTile image={img} key={k} />
      ))}
    </CardGroup>
  );
};

export default ImageTiles;
