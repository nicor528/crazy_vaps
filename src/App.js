import React, { useEffect } from "react";
import Home from './pages/Home'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buy from './pages/Buy'


function App() {

  
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/capsulas' element={<Buy/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;