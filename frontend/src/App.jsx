import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ImageGalleryLoader from "./gallery/ImageGalleryLoader";
import Upload from "./upload/Upload";
import NoPage from "./layout/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImageGalleryLoader />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
