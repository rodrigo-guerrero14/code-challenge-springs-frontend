import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'


function DolarDeal(){
  const dolarDeal = useSelector(state => state.dolar_deal)

  return(
    <section className="pt-5">
      <Card title={"Dólar acuerdo"} measure={dolarDeal.unidad_medida} value={dolarDeal.valor} date={dolarDeal.fecha} />
    </section>
  )
}

export default DolarDeal