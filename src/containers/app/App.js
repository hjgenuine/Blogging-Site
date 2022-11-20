import React from "react"
import './App.css';
import Home from "../home/Home"
import Article from "../article/Article";
import { Routes, Route, HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article" element={<Article />}></Route>
      </Routes>
    </HashRouter>
  )
}