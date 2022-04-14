import React, {useContext} from "react";
import './product.css';
import {Link, useParams} from "react-router-dom";
import {ProductContext} from "../App";
import {CardContext} from "../App";

function ProductCard(props){
    const {data, setData} = useContext(ProductContext);
    const {card, setCard} = useContext(CardContext);
    const id = useParams()
    const product = data.find(elem => elem.id === +id.productId);
    console.log(product)
    return (
        <div className="product-card">
            <div className='product-image'>
                <img src={product.image} alt="###"/>
            </div>
            <h2>{product.title}</h2>
            <p>{product.price} $</p>
            <p>{product.description}</p>
            <button onClick={() => props.add(+id.productId)}>Add {card.includes(+id.productId) ? '-' : '+'}</button>
        </div>
    )
}

function ProductPreview(props){
    const {title, image, price, id, add} = props;
    const {card, setCard} = useContext(CardContext);
    return (
        <div className='product-preview'>
            <div className='product-image'>
                <Link to={`${id}`}>
                    <img src={image} alt="###"/>
                </Link>
            </div>
            <Link to={`${id}`}><h2>{title}</h2></Link>
            <p>{price} $</p>
            <button onClick={() => add(id)}>Add {card.includes(+id) ? '-' : '+'}</button>
        </div>

    )
}

export {ProductPreview}
export default ProductCard;