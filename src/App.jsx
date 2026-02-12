import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import JokePage from "./components/page/jokePage";
import UserPage from "./components/page/user-page";
import JokePreviewPage from "./components/page/jokePreviewPage";
// conditional rendering and rendering collections
function App() {
  return (
    <>
      <Router>
        <Routes>
          // where is this page, swap based on url
          <Route path="/" element={<JokePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/preview" element={<JokePreviewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
