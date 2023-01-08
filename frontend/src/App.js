import { Routes, Route } from 'react-router-dom'
import MyMetro from './pages/MyMetro'
import SuccApp from './pages/SuccApp'
import Home from './pages/Home';
import { useState } from 'react';
function App() {
  const [DetailsToDisplay, setDetailsToDisplay] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MyMetro" element={<MyMetro setDetailsToDisplay={setDetailsToDisplay} />} />
      <Route path="/SuccApp" element={<SuccApp  DetailsToDisplay={DetailsToDisplay} />} />
    </Routes>
  );
}

export default App;
