import Card from "react-bootstrap/Card";
import config from "../appconfig.js";

// format of image (for PNG images):
// "data:image/png;base64," + base64 bytes.
const ImageTile = ({ image }) => {
  async function getImageText(){
    console.log(image)
    const imgRes = await fetch(config.imageServiceUrl())
  // Might need to reformat this, but worth testing
    const imgStringawait = new Uint8Array(await new Response(imgRes.body).arrayBuffer())
    console.log(imgStringawait)
    try {
      const response = await fetch('https://your-api-endpoint.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: image }),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    } 
    
  }
  
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Text</Card.Text>
        <button onClick={getImageText}>Transcript</button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;
