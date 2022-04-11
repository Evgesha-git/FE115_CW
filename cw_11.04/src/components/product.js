import React from "react";
import './product.css';
import {Link, useParams} from "react-router-dom";

function ProductCard(){
    const id = useParams()
    return (
        <h1>Product {id}</h1>
    )
}

function ProductPreview(props){
    const {title, image, price, id} = props;
    return (
        <div className='product-preview'>
            <div className='product-image'>
                <Link to={`${id}`}>
                    <img src={image} alt="###"/>
                </Link>
            </div>
            <h2>{title}</h2>
            <p>{price} $</p>
            <button>Add</button>
        </div>

    )
}

export {ProductCard, ProductPreview}