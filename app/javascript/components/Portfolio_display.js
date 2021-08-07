import React from 'react'
import { Link }  from 'react-router-dom'
import axios from 'axios'
import Button_consult from './buttons/Button_consult'
import Portfolio_details from './Portfolio_details'
import DeleteIcon from '@material-ui/icons/Delete'

const Portfolio_display = (props) => {
  const { portfolio } = props;
  const createparams = portfolio.id
  const customData = require('../../../my.json');

  const submitDelete = e => {
    e.preventDefault();
    const create_data = {"id":createparams}
    axios({
        url: 'http://localhost:3000/api/v1/portfolios/portfolio_delete',
        method: 'post',
        data: create_data,
        headers: {
          'ApiKey': customData["ApiKey"],
          'ApiSecret': customData["ApiSecret"]
        }
     }).then(res => {
       window.location.reload(false);
  })
}
  return (
    <div className="OnePortfolioContainer">
      <div className="Delete_action"><DeleteIcon  type="button" onClick={submitDelete}/></div>
      <Link className='data_container' to={"/portfolios/" + portfolio.id}>
      <Portfolio_details createparams={createparams}/>
      <div className="buttons_container">
      </div>
    </Link>
    </div>
  )
}

export default Portfolio_display
