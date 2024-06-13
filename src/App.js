
import './App.css';

import { Routes, Route} from 'react-router-dom';

import {Home} from "./Components/Home/Home"

import {Join} from "./Components/Join/Join"

import {Contact} from "./Components/Contact/Contact"

import {Activities} from "./Components/Activities/Activities"

import {News} from "./Components/News/News"

import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/Join" element={<Join />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/News" element={<News />} />
    </Routes>
  );
}

export default App;
