import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/HomePage';
import BookService from './components/Home/BookService';
import SignIn from './components/Home/SignIn';
import SignUp from './components/Home/SignUp';
import UserDashboard from './components/Home/Userpanel/UserDashboard';
import AdminDashboard from './components/Home/Adminpanel/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Userpanel/UserDashboard" element={UserDashboard} />
        <Route path="/Adminpanel/AdminDashboard" element={AdminDashboard} />

      </Routes>
    </Router>
  );
}

export default App;
