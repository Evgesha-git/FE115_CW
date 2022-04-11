import React, {useEffect, useState} from "react";
import {ProductPreview} from "./product";
import './catalog.css';

function Catalog(){
    const [data, setData] = useState([]);

    function getData(){
        if(data.length === 0) fetch('https://fakestoreapi.com/products/')
            .then(resp => resp.json())
            .then(data => setData([...data]))
    }

    useEffect(() =>{
        // console.log(data)
    })

    getData();

    return (
        <div className='product-container'>
            {data.map((product, index) =>{
                return <ProductPreview
                    key={index.toString()}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    id={product.id}
                />
            })}
        </div>
    )
}

export default Catalog;