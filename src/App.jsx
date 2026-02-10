import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import UserInfo from "./components/userInfo";
import JokePage from "./components/page/jokePage";
// conditional rendering and rendering collections
function App() {
  return (
    <>
      <Router>
        <Routes>
          // where is this page, swap based on url
          <Route path="/" element={<JokePage />} />
          <Route path="/user" element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
