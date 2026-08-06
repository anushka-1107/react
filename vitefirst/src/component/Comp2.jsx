import React from 'react'
import Comp3 from './Comp3'



function Comp2(props) {
  return (
     <div>
            <h1>start 2</h1>
            <h1>my age {props.agee}</h1>
            <h1>my name {props.name}</h1>
            <Comp3 age={props.agee} name = {props.name} email = 'asd@123.com'/>
        </div>
    )
}

export default Comp2