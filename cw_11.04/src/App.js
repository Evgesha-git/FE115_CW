import './App.css';
import Nav from "./components/nav";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Catalog from "./components/catalog";
import About from "./components/about";
import Card from "./components/card";
import Footer from "./components/footer";
import {ProductCard} from "./components/product";

function App() {
  return (
      <>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='catalog' element={<Catalog/>}>
                <Route path=':productId' element={<ProductCard/>}/>
            </Route>
            <Route path='about' element={<About/>}/>
            <Route path='card' element={<Card/>}/>
        </Routes>
        <Footer />
      </>
  );
}

export default App;
