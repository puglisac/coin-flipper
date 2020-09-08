import React from 'react';


const Coin = (props)=>{
    return <img src={props.heads ? "/heads.png": "/tails.png"}></img>
}

export default Coin