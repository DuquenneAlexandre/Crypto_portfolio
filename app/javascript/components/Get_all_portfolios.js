import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import Portfolio_display from './Portfolio_display'
import Navigation from './Navigation'
import Create_proftolio_form from './Create_proftolio_form'

const Get_all_portfolios = (props) => {
  const portfolio_to_delete = props.location.removeId
  const [portfolios, setPortfolios] = useState([]);

    if (typeof props.location.removeId != 'undefined') {
      const create_data = {"id":portfolio_to_delete}
        axios.post('http://localhost:3000/api/v1/portfolios/portfolio_delete', create_data).then(res => {
          window.location.reload(false);
        })
        }

    useEffect(() => {
      axios.get(`http://localhost:3000/api/v1/portfolios/index`)
      .then(res => {
        setPortfolios(res.data);
      })
      }, []);


  return (
    <div>
      <Navigation />
      <div className="GlobalContainer">
        <div><Create_proftolio_form /></div>
        <div>
      {portfolios.map((portfolio) => (
        <Portfolio_display portfolio={portfolio} />))}
          </div>
        </div>
    </div>
  )
}

export default Get_all_portfolios
