import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coins_one_byone_details from './Coins_one_byone_details'
import DeleteIcon from '@material-ui/icons/Delete'


const Display_portfolio_details = (props) => {
  const {portfolioDetails} = props
  const [portfolios, setPortfolios] = useState([]);

useEffect(() => {
  axios.post('http://localhost:3000/api/v1/portfolios/portofolio_details', portfolioDetails).then(res => {
       setPortfolios(res.data);
  })
  }, []);
  const destroy_coins = e => {
    e.preventDefault();
    const get_values = e.target.value
    const coins_destroyer = {"portfolio_id": portfolioDetails.id,
       "coin_symbol": portfolios.coins[get_values].coin_symbol,
        "coin_name": portfolios.coins[get_values].coin_name,
         "coin_identificator": portfolios.coins[get_values].coin_identificator,
          "coin_quantity": portfolios.coins[get_values].coin_quantity}
          axios.post('http://localhost:3000/api/v1/portfolios/portfolio_delete_coins', coins_destroyer).then(res => {
              window.location.reload(false);
          })
        }

    function render_coins_name() {
      if (typeof portfolios.coins != 'undefined')
      return (portfolios.coins.map((p, key) => <>
      <div className="CoinsContainer">
      <Coins_one_byone_details onecoion={p} />
    <DeleteIcon type="button" value={key} onClick={destroy_coins}/></div>
    </>))
    }

  return (
    <div className="Portfolio_details_container">
      <div className="Portfolio_details_name">Name: {portfolios.name}</div>
      <div className="Portfolio_details_description">Description: {portfolios.description}</div>
      <div className="Portfolio_details_value">Total value: {portfolios.total_value} $</div>
      <div>{render_coins_name()}</div>
      </div>
  )
}

export default Display_portfolio_details
