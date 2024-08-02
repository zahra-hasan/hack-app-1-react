import "./ImageUploader.css";
import config from "../appconfig";
import React, { useState } from "react";

// Code taken from
// https://uploadcare.com/blog/how-to-upload-file-in-react/
const ImageUploader = ({ destination }) => {
  const [file, setFile] = useState(null);

  // ["initial" | "uploading" | "success" | "fail"]
  const [status, setStatus] = useState("initial");

  const createUid = (filename) => {
    return (
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }) +
      "." +
      filename.split(".").pop()
    );
  };

  const encodeBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageDataWithoutMimeType = reader.result.split(",")[1];
        resolve(imageDataWithoutMimeType);
      };
      reader.onerror = reject;
    });
  };

  const handleUpload = async () => {
    if (file) {
      setStatus("uploading");

      const imageBase64 = await encodeBase64(file);
      const fileName = createUid(file.name);

      const requestBody = {
        file: imageBase64,
        fileName: fileName,
      };

      const requestOptions = {
        method: "POST",
        headers: {}, // Initialize headers object
      };

      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(requestBody);

      try {
        const result = await fetch(config.imageServiceUrl(), requestOptions);
        if (result.ok) {
          setStatus("success");
        } else {
          setStatus("fail");
        }
      } catch (error) {
        console.error(error);
        setStatus("fail");
      }
    }
  };

  const selectFile = (e) => {
    if (e.target.files) {
      setStatus("initial");
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="input-group fileuploader">
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={selectFile} />
      </div>

      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button onClick={handleUpload} className="submit">
          Upload
        </button>
      )}

      <UploadResult status={status} />
    </>
  );
};

const UploadResult = ({ status }) => {
  if (status === "success") {
    return <p>✅ File uploaded successfully!</p>;
  }

  if (status === "fail") {
    return <p>❌ File upload failed!</p>;
  }

  if (status === "uploading") {
    return <p>⏳ Uploading selected file...</p>;
  }

  return null;
};

export default ImageUploader;
