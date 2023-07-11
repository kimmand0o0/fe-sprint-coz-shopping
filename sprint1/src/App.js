import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div id="container">
        <Header />
        <section id="main">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
