import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './pages/Homepage';
import SingleCompany from './pages/SingleCompany';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/company/:companySymbol" element={<SingleCompany />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
