import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <Router>
      <div id="container">
        <Header />
        <section id="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/list" element={<Product />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
