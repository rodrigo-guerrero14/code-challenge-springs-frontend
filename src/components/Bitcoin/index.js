import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function Bitcoin(){
  const bitcoin = useSelector(state => state.bitcoin)

  return(
    <section className="pt-5">
      <Card title={"Bitcoin"} measure={bitcoin.unidad_medida} value={bitcoin.valor} date={bitcoin.fecha}/>
    </section>
  )
}

export default Bitcoin