import "./App.css";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./Components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainPage />
            </div>
          }
        />

        <Route>
          <Route path="/detail" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
