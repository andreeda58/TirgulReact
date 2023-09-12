import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/pages/Home';
import Form from './Components/pages/Form';
import Tabla from './Components/pages/Tabla';
import Lista from './Components/pages/Lista';

function App() {

  const col=[{
    route:"/",
    name:"Home",
  },{
    route: "/form",
    name:"Form",
  },
  {
    route: "table",
    name:"Table",
  },
  {
    route: "/lista",
    name:"List",
  }]

  const ListOfNavegation = (collection) => {
    return (collection.map((data) => {
      return (
        <li key={data.name} className="nav-item">
          <Link className="nav-link text-dark" to={data.route}>{data.name}</Link>
        </li>
      )
    }));
  }
  return (
    <div className="container-fluid  wrapper">

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg  justify-content-center nave">
          <ul className="nav -nav">
            {ListOfNavegation(col)}
          </ul>
        </nav>


        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/table' element={<Tabla />}></Route>
          <Route path='/lista' element={<Lista />}></Route>
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
