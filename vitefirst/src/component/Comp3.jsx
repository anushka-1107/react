import React from 'react'

function Comp3(props) {
  return (
    <div>
        <h1>start 3</h1>
        <h1>my age {props.age}</h1>
        <h1>my name {props.name}</h1>
        <h1>my email {props.email}</h1>
    </div>
  )
}

export default Comp3