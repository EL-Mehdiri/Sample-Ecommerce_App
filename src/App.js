import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Route>
        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </Route>
    </div>
  );
}

export default App;
