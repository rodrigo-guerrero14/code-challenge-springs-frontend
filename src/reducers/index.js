export default function reducers(state, action){
  switch(action.type){
    case "UPDATE_DATA":
      return {
        ...state,
        date: action.payload.fecha,
        pound_copper: action.payload.libra_cobre,
        unemployment: action.payload.tasa_desempleo,
        imacec: action.payload.imacec,
        euro: action.payload.euro,
        dolar: action.payload.dolar,
        dolar_deal: action.payload.dolar_intercambio,
        uf: action.payload.uf,
        utm: action.payload.utm,
        bitcoin: action.payload.bitcoin
      }
    default: return state
  }
}