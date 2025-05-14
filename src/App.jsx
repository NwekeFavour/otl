import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Shop from './pages/shop';
import Loader from './components/loader';

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation(); // Now it's inside the Router

  useEffect(() => {
    setLoaded(false);
    const timeout = setTimeout(() => {
      setLoaded(true); // Set to true after the loading is complete
    }, 1500); // simulate loading delay
    
    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [location]); // dependency on location to trigger the effect whenever route changes

  return (
    <>
      {!loaded && <Loader />}
      {loaded && (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>  {/* Wrap AppContent with Router */}
      <AppContent />
    </Router>
  );
}

export default App;
