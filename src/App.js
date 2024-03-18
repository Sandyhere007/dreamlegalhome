import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route element = {<Home />}  path='/'></Route>
      {/* <Route element = {<Products />}  path='/products'></Route> */}

      </Routes>
    </Router >
  );
}

export default App;
