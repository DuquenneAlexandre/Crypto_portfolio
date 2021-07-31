import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import Navigation from './Navigation'
import Display_portfolio_details from './Display_portfolio_details'

const Find_portfolo_by_id = (props) => {
  const create_data = {"id":props.match.params.id}
  const [amout, SetAmout] = useState();
  const [currencyDetails, SetCurrencyDetails] = useState([]);
  const [currencydetailsFromForm, setCurrencydetailsFromForm] = useState([]);
  const [matchingCounter, SetMatchingCounter] = useState()
  const [bgcolor, SetBgcolor] = useState('#f28997')
  const [bgcoloramout, SetBgcoloramout] = useState('#f28997')

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/portfolios/get_coin_list`)
    .then(res => {
      SetCurrencyDetails(res.data);
    })
    }, []);

    function handleChange(e) {
        const this_input = e.target.value
        const result = currencyDetails.filter(item => item.id === this_input)
        if (result.length > 0){
          result.map(r => SetMatchingCounter(r.symbol))
          setCurrencydetailsFromForm(result)
          SetBgcolor('#C8F69B')
        } else
        SetBgcolor('#f28997')
      }

   function handleChangeDescription(e) {
     SetAmout(e.target.value)
     if (e.target.value.length > 0)
        SetBgcoloramout('#C8F69B')
      else
        SetBgcoloramout('#f28997')
      }

  const submit = e => {
    e.preventDefault();
    const submit_hash_datas = {"coin_identificator": currencydetailsFromForm[0]["id"],
    "coin_symbol": currencydetailsFromForm[0]["symbol"],
    "coin_name": currencydetailsFromForm[0]["name"],
    "coin_quantity": amout,
    "portfolio_id": props.match.params.id}
    axios.post('http://localhost:3000/api/v1/portfolios/coins_new', submit_hash_datas).then(res => {
      window.location.reload(false);
    })
  }

  return (
    <div>
      <Navigation />
      <div className="Port_by_id_global_container">
      <div>
        <Display_portfolio_details portfolioDetails={create_data}/>
      </div>
      <div className="Portfolio_add_coins_form">
        <form>
          <div className="label_currencies">
            <input style={{backgroundColor: bgcolor}} className="currency_input" name="currency" onChange={handleChange} required placeholder="Ex: bitcoin"/>
          </div>
            <div className="label_amout">
            <input style={{backgroundColor: bgcoloramout}} type='number' name="description" required maxLength="100" onChange={handleChangeDescription} placeholder="Ex: 0.3"/>
        </div>
          <button className="SubPortfolioButton" type="submit" onClick={submit}>Add</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Find_portfolo_by_id
