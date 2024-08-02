import ImageTiles from "./ImageTiles";

const ImageGallery = ({ images }) => {
  return (
    <>
      <h2>Image Gallery</h2>
      <ImageTiles images={images} />
    </>
  );
};

export default ImageGallery;
