import React, {useContext, useEffect} from "react";
import {ProductPreview} from "./product";
import './catalog.css';
import {ProductContext} from '../App';

function Catalog(props){
    const {data, setData} = useContext(ProductContext);

    // function getData(){
    //     if (data.length === 0) {
    //         if (JSON.parse(localStorage.getItem('catalog')).length > 0) {
    //             setData([...JSON.parse(localStorage.getItem('catalog'))])
    //             console.log(JSON.parse(localStorage.getItem('catalog')));
    //             return;
    //         } else {
    //             fetch('https://fakestoreapi.com/products/')
    //                 .then(resp => resp.json())
    //                 .then(data => {
    //                     setData([...data])
    //                     localStorage.setItem('catalog', JSON.stringify(data));
    //
    //                 });
    //         }
    //     }
    // }

    useEffect(() =>{
        console.log(data)
    })

    // getData();

    return (
        <div className='product-container'>
            {data.map((product, index) =>{
                return <ProductPreview
                    key={index.toString()}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    id={product.id}
                    add={props.add}
                />
            })}
            {/*<Outlet/>*/}
        </div>
    )
}

export default Catalog;