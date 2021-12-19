import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Post } from "../../pages/Post";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} index />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}
