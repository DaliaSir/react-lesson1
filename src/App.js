import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import PostPage from "./components/dashboard/posts/PostPage";
import AddPost from "./components/dashboard/posts/AddPost";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />

        <div className="container">
          <Routes>
            <Route path="/" exact="true" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" exact="true" element={<DashboardPage />} />
            <Route path="/dashboard/posts" exact="true" element={<PostPage />} />
            <Route path="/dashboard/posts/add" element={<AddPost />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;