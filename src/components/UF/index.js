import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'

function UF(){
  const uf = useSelector(state => state.uf)
  return(
    <section className="pt-5">
      <Card title={"Unidad de fomento (UF)"} measure={uf.unidad_medida} value={uf.valor} date={uf.fecha} />
    </section>
  )
}

export default UF