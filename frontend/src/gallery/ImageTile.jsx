import Card from "react-bootstrap/Card";
import config from "../appconfig.js";
import {Buffer} from 'buffer'

// format of image (for PNG images):
// "data:image/png;base64," + base64 bytes.
const ImageTile = ({ image }) => {
  
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Text</Card.Text>
        <button >Transcript</button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;
