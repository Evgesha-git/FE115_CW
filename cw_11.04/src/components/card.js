import React, {useContext} from "react";
import {CardContext, ProductContext} from "../App";
import {Link} from "react-router-dom";
import './card.css'

function CardWidget(){
    const {card, setCard} = useContext(CardContext);

    return (
        <div>
            <Link to='card'>Card</Link>
            <span>{card.length}</span>
        </div>
    )
}

function Card(){
    const {card, setCard} = useContext(CardContext);
    const {data, setData} = useContext(ProductContext);
    const dataCard = data.filter(item => card.includes(item.id));
    const price = dataCard.reduce((sum, item) => sum += parseFloat(item.price), 0) || '0';
    console.log(dataCard);

    return (
        <div className='card-container'>
            {dataCard.map((item, i) => {
                return (
                    <div className='card-item' key={i.toString()}>
                        <div className='card-image'>
                            <img src={item.image} alt="###"/>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.price} $</p>
                    </div>
                )
            })}
            <span>Total price: {price}$</span>
        </div>
    )
}

export default Card;
export {CardWidget};