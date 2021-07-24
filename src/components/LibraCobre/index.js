import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function LibraCobre(){
  const poundCopper = useSelector(state => state.pound_copper)
  return(
    <section className="pt-5">
      <Card title={"Libra de cobre"} measure={poundCopper.unidad_medida} value={poundCopper.valor} date={poundCopper.fecha} />
    </section>
  )
}

export default LibraCobre