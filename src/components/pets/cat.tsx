import React from 'react'

type Props = {
    name:string
    age:number
    
}

function Cat(props: Props) {
  return (
    <div>o nome do gato e {props.name}, e sua idade é {props.age}</div>
  )
}

export default Cat