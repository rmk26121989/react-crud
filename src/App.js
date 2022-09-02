import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        
        <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/create" >Create</Link>
        </li>
        </ul>
        
        <Routes><Route exact path='/' element={<Read />} /></Routes>
        
        <div>
          <Routes><Route exact path='/create' element={<Create />} /></Routes>
        </div>
        <div>
        <Routes><Route exact path='/read' element={<Read />} /></Routes>
        </div>
        <div>
        <Routes><Route exact path='/update' element={<Update />} /></Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;