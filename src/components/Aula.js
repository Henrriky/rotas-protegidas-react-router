import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../repo/data'

function useAula() {
    const id = useParams().id;
    return data.filter(aula => aula.id == id)[0]
}


function Aula(props) {

  const aula = useAula()
  
  return (
    <div className="page">
        <h1>{aula.title}</h1>
        <h3>{aula.desc}</h3>
    </div>
  )
}

export default Aula