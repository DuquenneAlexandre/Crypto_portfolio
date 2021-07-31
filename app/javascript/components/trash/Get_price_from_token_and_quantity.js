import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Tokens_list from './Tokens_list'
import Call_portfolio_value from './Call_portfolio_value'

const Get_price_from_token_and_quantity = () => {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3000/api/v1/portfolios/get_coin_list`)
      .then(res => {
        console.log(res.data);
        setPost(res.data);
      })
      }, []);
  return (
    <div>
    <form >
      <label>
        quantity:
        <input type="text" name="quantity"/>
      </label>
      <label>
        token_id:
        <select name="token_id">{post.map(p => <option>{p.id}</option>)}</select>
      </label>
      <button type="submit">Return price</button>
    </form>
    <Call_portfolio_value serachparams={params} />
  </div>
  )
}

export default Get_price_from_token_and_quantity
