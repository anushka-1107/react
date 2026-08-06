import React from 'react'
import Comp2 from './comp2'

function Compo1(props) {

  return (
    <div>
     <h1>start 1</h1>
     <h1>my age {props.age}</h1>
     <Comp2 agee = {props.age} name ="Michle"/>
    </div>
  )
}

export default Compo1