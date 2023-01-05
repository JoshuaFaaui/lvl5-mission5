import './App.css';
import Search from './comps/Search';
import Display from './comps/Display';
import { useState } from 'react';
function App() {
    const [quotes, setQuotes] = useState('')
  return (
    <div>
      <h1>Hello wrld</h1>
      <Search setQuotes={setQuotes} />
      <Display quotes={quotes} />
    </div>
  );
}

export default App;
