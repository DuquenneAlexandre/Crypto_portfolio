import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from './Navigation'

const Get_portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3000/api/v1/portfolios/index`)
      .then(res => {
        setPortfolios(res.data);
        console.log(portfolios)
      })
      }, []);

  return (
    <div>
    <Navigation />
    {portfolios.map((portfolio) => (
      <div>{portfolio.name}</div>))}</div>
  )
}

export default Get_portfolios
