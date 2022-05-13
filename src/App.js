import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home /> } />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
