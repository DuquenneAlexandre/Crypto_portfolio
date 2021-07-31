import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const Portfolio_by_id = (props) => {
  console.log(props.location.id)
  const { portfolioid } = props.location.id
  const [portfolios, setPortfolios] = useState([]);
  const create_data = {"id":props.location.id}

  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/portfolios/portofolio_details', create_data).then(res => {
         setPortfolios(res.data);
    })
    }, []);

    function render_coins_name() {
      if (typeof portfolios.coins != 'undefined')
      return (portfolios.coins.map((p, key)=> <ul><li key={p.coin_name}>{p.coin_name}</li><li key={p.coin_quantity}>{p.coin_quantity}</li></ul>))
    }

  return (
    <div>
      <Home />
      <div>
        <div>{portfolios.name}</div>
        <div>{portfolios.description}</div>
        <div>{portfolios.total_value}</div>
        <div>{render_coins_name()}</div>
     </div>
    <Tokens_list portfolioId={props.location.id}/>
  </div>
  )
}
export default Portfolio_by_id
