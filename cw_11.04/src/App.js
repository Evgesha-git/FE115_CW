import './App.css';
import React, {useEffect, useState} from "react";
import Nav from "./components/nav";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Catalog from "./components/catalog";
import About from "./components/about";
import Card from "./components/card";
import Footer from "./components/footer";
import ProductCard from "./components/product";
// import ProductCard from "./components/productCard";

export const ProductContext = React.createContext();
export const CardContext = React.createContext();


function App() {
    const [data, setData] = useState([]);
    const [card, setCard] = useState([]);

    function getData(){
        if (data.length === 0) {
            if (localStorage.getItem('catalog')) {
                setData([...JSON.parse(localStorage.getItem('catalog'))])
                console.log(JSON.parse(localStorage.getItem('catalog')));
            } else {
                fetch('https://fakestoreapi.com/products/')
                    .then(resp => resp.json())
                    .then(data => {
                        setData([...data])
                        localStorage.setItem('catalog', JSON.stringify(data));

                    });
            }
        }
    }

    function getCard(){
        if (card.length === 0){
            if (localStorage.getItem('card')){
                setCard([...JSON.parse(localStorage.getItem('card'))])
            }else{
                return;
            }
        }
    }

    getCard();
    getData();

    function addCard(id){
        console.log(id);
        // let value = card;
        if (!card.includes(id)) {
            // value.push(id);
            setCard([...card, id])
        }
        console.log(card);
        // localStorage.setItem('card', JSON.stringify(card));
    }

    useEffect(() => {
        localStorage.setItem('card', JSON.stringify(card));
    })

    return (
        <CardContext.Provider value={{card, setCard}}>
            <ProductContext.Provider value={{data, setData}}>
                <React.Fragment>
                    <Routes>
                        <Route path='/' element={<Nav/>}>
                            <Route index element={<Home/>}/>
                            <Route path='catalog' element={<Catalog add={addCard}/>}/>
                            <Route path='catalog/:productId' element={<ProductCard add={addCard}/>}/>

                            <Route path='about' element={<About/>}/>
                            <Route path='card' element={<Card/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </React.Fragment>
            </ProductContext.Provider>
        </CardContext.Provider>
    );
}

export default App;
