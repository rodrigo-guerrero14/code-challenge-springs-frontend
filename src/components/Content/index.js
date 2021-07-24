import React, { useEffect } from 'react'

import { Route, Switch } from 'wouter'
import LibraCobre from '../LibraCobre'
import Unemployment from '../Unemployment'
import Imacec from '../Imacec'
import Euro from '../Euro'
import Dolar from '../Dolar'
import DolarDeal from '../DolarDeal'
import UF from '../UF'
import UTM from '../UTM'
import Bitcoin from '../Bitcoin'

import { useDispatch } from 'react-redux'
import { updateData } from '../../actions'

import '../../Styles/content.css'

function Content(){
  const dispatch = useDispatch()

  fetch("https://mindicador.cl/api/")
    .then(res => res.json())
    .then(data => dispatch(updateData(data)))
    .catch(err => console.log("Ha ocurrido un error, ", err))

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://mindicador.cl/api/")
        .then(res => res.json())
        .then(data => dispatch(updateData(data)))
        .catch(err => console.log("Ha ocurrido un error, ", err))
    }, 3600000);
    return () => clearInterval(interval)
  }, [])

  return(
    <section className="content">
      <Switch>
        <Route path="/cobre" component={LibraCobre} />
        <Route path="/unemployment" component={Unemployment} />
        <Route path="/imacec" component={Imacec} />
        <Route path="/euro" component={Euro} />
        <Route path="/dolar" component={Dolar} />
        <Route path="/dolar-deal" component={DolarDeal} />
        <Route path="/UF" component={UF} />
        <Route path="/UTM" component={UTM} />
        <Route path="/bitcoin" component={Bitcoin} />
      </Switch>
    </section>
  )
}

export default Content