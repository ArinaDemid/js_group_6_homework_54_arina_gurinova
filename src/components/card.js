import React from "react";

const suits = {
    '♦': 'diams',
    '♠': 'spades',
    '♣': 'clubs',
    '♥': 'hearts'
};

const Card = props => {


    let className =  `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;

    return (
        <a className={className} href='#'>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </a>
    )
};


export default Card;