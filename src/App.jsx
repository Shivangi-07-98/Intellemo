import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/Profile';
import EditProfilePage from './components/EditPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/edit/:userId" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;