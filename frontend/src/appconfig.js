const config = {
  imageServiceBaseUrl: "http://localhost:8090",
  teamName: "example",

  imageServiceUrl: function () {
    return `${config.imageServiceBaseUrl}/IL/teams/${config.teamName}/files`;
  },
};

export default config;
