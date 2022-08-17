import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Scroll from './pages/Scroll/Scroll';
import Scroll2 from './pages/Scroll2/Scroll2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/scroll' element={<Scroll />}></Route>
          <Route path='/scroll2' element={<Scroll2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
