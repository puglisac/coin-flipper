import React from 'react';


const Coin = (props)=>{
    return <img src={props.heads ? "/heads.png": "/tails.png"} alt="coin-img"></img>;
}

export default Coin;