import React, {useContext} from "react";
import {CardContext, ProductContext} from "../App";
import {Link} from "react-router-dom";
import './card.css'

function CardWidget(){
    const {card} = useContext(CardContext);

    return (
        <div>
            <Link to='card'>Card</Link>
            <span>{card.length}</span>
        </div>
    )
}

function Card(){
    const {card, setCard} = useContext(CardContext);
    const {dataFind} = useContext(ProductContext);
    const dataCard = dataFind.filter(item => card.includes(item.id));
    const price = dataCard.reduce((sum, item) => sum += parseFloat(item.price), 0) || '0';
    console.log(dataCard);

    function removeItem(id){
        if (card.length === 1 && card[0] === id){
            setCard([]);
            localStorage.setItem('card', JSON.stringify([]));
        }else{
            setCard([...card.filter(el => el !== id)]);
        }
    }

    return (
        <div className='card-container'>
            {dataCard.length > 0 ? dataCard.map((item, i) => {
                return (
                    <div className='card-item' key={i.toString()}>
                        <div className='card-image'>
                            <img src={item.image} alt="###"/>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.price} $</p>
                        <button
                            onClick={() => removeItem(item.id)}
                        >Del</button>
                    </div>
                )
            }) : <p>Корзина пуста</p>}
            <span>Total price: {price}$</span>
        </div>
    )
}

export default Card;
export {CardWidget};