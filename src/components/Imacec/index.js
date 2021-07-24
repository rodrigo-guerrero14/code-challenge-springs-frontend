import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function Imacec(){
  const imacec = useSelector(state => state.imacec)
  return(
    <section className="pt-5">
      <Card title={"Imacec"} measure={imacec.unidad_medida} value={imacec.valor} date={imacec.fecha} />
    </section>
  )
}

export default Imacec