import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/create' element={<Create />}/>
        <Route exact path='/read' element={<Read />} />
        <Route exact path='/update' element={<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
