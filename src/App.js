import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Productos from './views/Productos';
import Contacto from './views/Contacto';
import ItemDetail from './views/ItemDetail';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer/Footer';

const App =()=> {
  return (
     <Router>
        <div className="App">
            <Header/>
            <NavBar />
        </div>

        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Productos" element={<Productos/>}/>
         <Route path="/Contacto" element={<Contacto/>}/>
         <Route path='/detail/:id' element={<ItemDetail/>}/>
       </Routes>
       <Footer/>
 
    </Router>
   
  );
}

export default App;
