import React from 'react';
import './App.css';
import StackOverflowUsers from './app/pages/StackOverflowUsers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './app/components/Header';
import ErrorPage from './app/components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<StackOverflowUsers />} />
            <Route path="/404" element={<ErrorPage errorCode={404} />} />
            <Route path="/500" element={<ErrorPage errorCode={500} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
