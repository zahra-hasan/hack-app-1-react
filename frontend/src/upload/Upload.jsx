import config from "../appconfig.js";
import ImageUploader from "./ImageUploader";

const Upload = () => {
  return (
    <>
      <h2>Upload</h2>
      <ImageUploader destination={config.imageServiceUrl()} />
    </>
  );
};

export default Upload;
