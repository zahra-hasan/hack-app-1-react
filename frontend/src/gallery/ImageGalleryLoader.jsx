import config from "../appconfig.js";
import useFetch from "../hooks/useFetch";
import ImageGallery from "./ImageGallery";

const ImageGalleryLoader = () => {
  const { data, isLoading, error } = useFetch(config.imageServiceUrl());

  // data is a JSON object with one field 'data'
  // field 'data' is an array of string
  // each string has format:
  // "data:image/png;base64," + base64 encoded image bytes

  return (
    <>
      {isLoading && <p>Loading images...</p>}
      {error && <p>{error}</p>}

      {data && <ImageGallery images={data.data} />}
    </>
  );
};

export default ImageGalleryLoader;
