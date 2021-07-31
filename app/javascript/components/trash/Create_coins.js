import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const Create_coins = (props) => {
  const example_create = {"coin_identificator":"ripple",
  "coin_symbol":"xrp",
  "coin_name":"XRP",
  "coin_quantity": "2314",
  "portfolio_id": "1"}
  const tempo = "titi"
  console.log(example_create)

/*  if (typeof tempo != "toto") {
    const create_data = "toto"
      axios.post('http://localhost:3000/api/v1/portfolios/coins_new', create_data).then(res => {
        window.location.reload(false);
      })
    } */

  return (
    <div></div>
  )
}

export default Create_coins
