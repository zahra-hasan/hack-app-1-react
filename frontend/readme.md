# Frontend

The web user interface - or _front end_ - to the app.

This code uses React and functional components, together with the React Bootstrap framework. Vite was used to create the initial code.

You are free to customise this, ignore this, or replace this with any language and tooling of your choice.

Whatever you choose, you **must** have your frontend deployed as a static website on Azure. See instructions in the Useful Links section.

You will not be judged on your technology choices. You _will_ be judged on delivering _something_ at the deadline ;)

## Getting started

Navigate into the frontend directory, install and run :

```bash
cd frontend
npm install
```

**IMPORTANT** you must change the value of `teamName` in the `appconfig.js` file to _your team name_ (one of atari, commodore etc).

![Shows location of change in appconfig](/img-readme/appconfig-teamname.png)

Following the change, start the React app in the terminal using:

```bash
npm run dev
```

You should be able to upload images and view them.

The images are uploaded to a storage API we have provided for you, described below.

### Image Store API documentation

Images are stored in an API we have provided. The image upload and fetching all images is working in the UI, so you can see how that all works.

API here: https://bjssacademyhackday-a8fqfwapbxfpa4b5.uksouth-01.azurewebsites.net

The API is documented using Swagger - a "live" documentation system that let's you try out the API.

Swagger here: https://bjssacademyhackday-a8fqfwapbxfpa4b5.uksouth-01.azurewebsites.net/docs

## Useful links

- [React Basics](https://github.com/bjssacademy/react-basics)
- [React Bootstrap Documentation](https://react-bootstrap.netlify.app/)
- [React Documentation](https://react.dev)
- [UUID library](https://www.npmjs.com/package/uuid)
- [React Fetch Hook](https://www.npmjs.com/package/react-fetch-hook)

### Static website on Azure

How to deploy a static web app on Azure: https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vue&pivots=github
