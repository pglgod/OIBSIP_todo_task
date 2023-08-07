
import './App.css';
import AddTask from './components/AddTask';
import EditPanle from './components/EditPanle';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="container">
      <Routes>
        <Route exact path='/' element={<Home status={""} />} />
        <Route exact path='/pending-task' element={<Home status="pending" />} />
        <Route exact path='/complete-task' element={<Home status="complete" />} />


        <Route exact path='/add_task' element={<AddTask/> } />
        <Route exact path='/edit_task' element={<EditPanle/> } />
        
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
