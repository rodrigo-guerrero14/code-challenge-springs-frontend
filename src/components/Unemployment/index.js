import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'


function Unemployment(){
  const unemployment = useSelector(state => state.unemployment)
  return(
    <section className="pt-5">
      <Card title={"Tasa de desempleo"} measure={unemployment.unidad_medida} value={unemployment.valor} date={unemployment.fecha} />
    </section>
  )
}

export default Unemployment