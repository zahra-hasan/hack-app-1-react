import config from "../appconfig.js";
import React from "react";
import useFetch from "react-fetch-hook";
import ImageGallery from "./ImageGallery";

const ImageGalleryLoader = () => {
  const { isLoading, data, error } = useFetch(config.imageServiceUrl());

  return (
    <>
      {isLoading && <p>Loading images...</p>}
      {error && (
        <p>
          {error.status}&nbsp;{error.statusText}
        </p>
      )}
      {data && <ImageGallery images={data.data} />}
    </>
  );
};

export default ImageGalleryLoader;
