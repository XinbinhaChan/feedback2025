

import { useState } from 'react'
import { CardInicial } from './components/CardInicial'
import { CardFinal } from './components/CardFinal'

export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao(nota){
    console.log(nota)
    setNotaAvaliacao(nota)

  }

  function handleSubmit(){
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }
    
    alert("Please, choose a rating!")
  }

  return(
    submited === false ? (
        <CardInicial handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} handleSubmit={handleSubmit} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao}/>
    )
  )
}