import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Company from './components/Company';
import Homepage from './components/Homepage';
import CompanyDetails from './components/CompanyDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/companydetails" element={<CompanyDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
