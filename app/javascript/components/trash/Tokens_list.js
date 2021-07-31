import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import Navigation from './Navigation'

const Tokens_list = (props) => {
const {portfolioId} = props
const [post, setPost] = useState([]);
const [count, setCount] = useState(0);
const [amount, setAmount] = useState(0);
const [currencydetails, setCurrencydetails] = useState([]);
const [create_data, setCreate_data] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/portfolios/get_coin_list`)
    .then(res => {
      setPost(res.data);
    })
    }, []);
    
      function handleChange(e) {
      /*  setAmount(e.target.value) */
        const this_input = e.target.value
        const result = post.filter(item => item.id === this_input)
        if (result.length > 0){
          result.map(r => setCount(r.symbol))
          setCurrencydetails(result)
          console.log(currencydetails)
        }
      }

      function handleChange2(e) {
        setAmount(e.target.value)
      /*  console.log(e.target.value) */
      }

      const submit = e => {
        if (count != 0 && amount > 0) {
          const create_data = {"coin_identificator":currencydetails[0].id,
             "coin_symbol":currencydetails[0].symbol,
              "coin_name":currencydetails[0].name,
               "coin_quantity": amount,
                "portfolio_id": portfolioId}
                setCreate_data(create_data)
                console.log(create_data)
              /*  axios.post('http://localhost:3000/api/v1/portfolios/coins_new', create_data).then(res => {
                     console.log(res.data)
                }) */
              }
      }

  return (
    <div>
      <form >
        <div>
            Search currency
            <input className="currency_input" name="currency" onChange={handleChange} required/>
        </div>
        <div>
            Choose amount
            <input name="amount" onChange={handleChange2} required/>
        </div>
        <button type="submit" onClick={submit}>Add</button>
        </form>
    </div>
  )
}

export default Tokens_list
