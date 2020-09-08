import React, {useState} from 'react';
import Coin from './Coin';
import "./Flipper.css";


const Flipper= () => {
    const[heads, changeHeads] = useState(0);
    const[tails, changeTails] = useState(0);
    const [isHeads, flipCoin] =useState(null);
    function flip(){
        const random = Math.floor(Math.random()*2+1);
        if(random === 2){
            flipCoin(true);
            changeHeads(heads+1);
        }else {
            flipCoin(false)
            changeTails(tails+1);
        }
    }
    return (
    <div className="Flipper">
        <h1>Flip a Coin!!</h1>
    <div>
        {isHeads != null ? <Coin heads={isHeads}/> : null}
    </div>
    <p>Heads: {heads} Tails: {tails}</p>
    <button onClick={flip}>Flip Coin</button>
    </div>
    );
}

export default Flipper;