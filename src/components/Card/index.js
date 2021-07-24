import React from 'react'
import '../../Styles/card.css'

function Card({title, measure, value, date}){
  return(
    <div className="card chart-card col-10 col-xxl-5 mx-auto">
      <div className="card-body pb-0">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p className="card-text mb-4">Fecha de consulta • {date.slice(0,10)}</p>
        <div className="d-flex justify-content-between card-data">
          <p className="display-4 align-self-end">{measure === "Porcentaje" ? `${value} %` : `$${value}`}</p>
          <p className="align-self-end pb-2">Unidad de medida: {measure}</p>
        </div>
      </div>
    </div>
  )
}

export default Card