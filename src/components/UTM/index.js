import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function UTM(){
  const utm = useSelector(state => state.utm)
  return(
    <section className="pt-5">
      <Card title={"Unidad tributaria mensual (UTM)"} measure={utm.unidad_medida} value={utm.valor} date={utm.fecha} />
    </section>
  )
}

export default UTM