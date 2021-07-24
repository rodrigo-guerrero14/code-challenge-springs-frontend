import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'


function Euro(){
  const euro = useSelector(state => state.euro)
  return(
    <section className="pt-5">
      <Card title={"Euro"} measure={euro.unidad_medida} value={euro.valor} date={euro.fecha} />
    </section>
  )
}

export default Euro