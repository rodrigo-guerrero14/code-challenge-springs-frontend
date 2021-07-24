import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function Dolar(){
  const dolar = useSelector(state => state.dolar)
  return(
    <section className="pt-5">
      <Card title={"Dólar Observado"} measure={dolar.unidad_medida} value={dolar.valor} date={dolar.fecha} />
    </section>
  )
}

export default Dolar