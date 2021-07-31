import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Call_portfolio_value = (props) => {
  const [total_price, setTotal_price] = useState([]);
  const { serachparams } = props;
  const my_quantity = serachparams.get('quantity');
  const token_id = serachparams.get('token_id');
  const search_data = {"quantity":my_quantity, "token_id":token_id}

  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/portfolios/get_portfolio_value', {"data":[search_data]}).then(res => {
        /* console.log(res.data) */
      setTotal_price(res.data);
    })
    }, []);

  return (
    <div>{total_price}</div>
  )
}

export default Call_portfolio_value
