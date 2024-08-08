import config from "../appconfig";

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

const postToImageStore = async (file) => {
  const imageBase64 = await encodeBase64(file);
  const fileName = createUid(file.name);

  const requestBody = {
    file: imageBase64,
    fileName: fileName,
    fileMimeType: file.type,
  };

  const requestOptions = {
    method: "POST",
    headers: {}, // Initialize headers object
  };

  requestOptions.headers["Content-Type"] = "application/json";
  requestOptions.body = JSON.stringify(requestBody);

  return fetch(config.imageServiceUrl(), requestOptions);
};

export default postToImageStore;
