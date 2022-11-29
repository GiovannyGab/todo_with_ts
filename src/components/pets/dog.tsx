import React from 'react'

type Props = {
    name:string
    age:number
    
}

function Dog(props: Props) {
  return (
    <div>o nome do cachorro e {props.name}, e sua idade é {props.age}</div>
  )
}

export default Dog