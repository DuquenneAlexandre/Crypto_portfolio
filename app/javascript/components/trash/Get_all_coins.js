import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import Navigation from './Navigation'
import Create_coins from './Create_coins'


const Get_all_coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3000/api/v1/portfolios/get_all_coins`)
      .then(res => {
        console.log(res.data);
        setCoins(res.data);
      })
      }, []);

  return (
    <div>
      <Navigation />
    {coins.map(coin => <div key={coin.coin_name}>{coin.coin_name}</div>)}
    <div><Create_coins /></div>
    </div>
  )
}
export default Get_all_coins
