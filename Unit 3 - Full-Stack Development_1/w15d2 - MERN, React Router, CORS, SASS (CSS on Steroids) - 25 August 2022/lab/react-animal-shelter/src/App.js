import {useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import Animals from './components/animals/Animals';
import "bootstrap/dist/css/bootstrap.min.css";
import SiteHeader from './components/partials/SiteHeader';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AnimalCard from './components/card/AnimalCard';
import AnimalDetails from './components/animal/AnimalDetails';

function App() {

  return (
    <div className="App">
      <SiteHeader />

      <Routes>
        <Route path="/" exact element={<Animals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animals/:id" element={<AnimalDetails />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
