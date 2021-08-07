import React from 'react'

const Coins_one_byone_details = (props) => {
  const {onecoion} = props
  return (
    <div className="CoinsContainer">
    <div key={onecoion.coin_name}>{onecoion.coin_name}</div>
    <div key={onecoion.coin_quantity}>{onecoion.coin_quantity}</div>
    </div>
  )
}

export default Coins_one_byone_details
