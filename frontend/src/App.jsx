import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Main/MainPage';
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployees';
import EditEmployee from './components/EditEmployee';
import DeleteEmployee from './components/DeleteEmployee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/all" element={<ViewEmployees />} />
         <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} /> 
      </Routes>
    </Router>
  );
};

export default App;
