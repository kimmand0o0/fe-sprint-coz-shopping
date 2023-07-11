import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
