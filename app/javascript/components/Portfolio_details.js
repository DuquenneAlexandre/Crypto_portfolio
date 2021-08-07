import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string'

const Portfolio_details = (props) => {
  const [portfolios, setPortfolios] = useState([]);
  const { createparams } = props;
  const create_data = {"id":createparams}
  const customData = require('../../../my.json');


  useEffect(() => {
    axios({
      url: 'http://localhost:3000/api/v1/portfolios/portofolio_details',
      method: 'post',
      data: create_data,
      headers: {
        'ApiKey': customData["ApiKey"],
        'ApiSecret': customData["ApiSecret"]
      }
   }).then(res => {
         setPortfolios(res.data);
    })
    }, []);

    function render_coins_name() {
      if (typeof portfolios.coins != 'undefined')
      return (portfolios.coins.map(p => <ul><li key={p.coin_name}>{p.coin_name}</li><li key={p.coin_quantity}>{p.coin_quantity}</li></ul>))
    }

  return (
    <div className="Portfolio_display">
    <div>{portfolios.name}</div>
    <div>{portfolios.description}</div>
    <div>{portfolios.total_value}</div>
  </div>
  )
}

export default Portfolio_details
