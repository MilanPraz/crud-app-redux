import "./App.css";
import { Route, Routes } from "react-router-dom";

import EditPage from "./EditPage";
import Home from "./Home";

import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
