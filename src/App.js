import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddBlog from './components/AddBlog';
import ViewAllBlog from './components/ViewAllBlog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/addcomment' element={<AddBlog/>}/>
          <Route path='/viewallcomment' element={<ViewAllBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
