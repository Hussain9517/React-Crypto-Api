import React,{useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';





function Api() {


const [coins, setcoins] = useState([]);

useEffect(() => {
    axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    ).then(res => {
       setcoins(res.data);
    }).catch(err => {
        console.log(err);
    })
})

const cryptoName = coins.map(coin => {
    return(
        <div>{coin.name}</div>
    )
})

const cryptoPrice = coins.map(coin => {
    return(
        <div>{coin.current_price}</div>
    )
})

const high = coins.map(coin => {
    return(
        <div>{coin.high_24h}</div>
    )
})

const low = coins.map(coin => {
    return(
        <div>{coin.low_24h}</div>
    )
})


const ath = coins.map(coin => {
    return(
        <div>{coin.ath}</div>
    )
})
   
        

  return (
    <div className="container-fluid">
        <div className="container">
        <table>
          <tr>
              <th><h3>Crypto</h3></th>
              <th><h3>Prices</h3></th>
              <th><h3>High 24h</h3></th>
              <th><h3>Low 24h</h3></th>
              <th><h3>Ath</h3></th>

          </tr>   




          <tr>
              <th><h4>{cryptoName}</h4></th>
              <th><h4>{cryptoPrice}</h4></th>
              <th><h4>{high}</h4></th>
              <th><h4>{low}</h4></th>
              <th><h4>{ath}</h4></th>

          </tr>  



        </table>
        </div>
        
    </div>
  )
}


export default Api;

