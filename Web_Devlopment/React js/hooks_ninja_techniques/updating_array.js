import React from 'react'

export default function updating_array() {
    const [thingsArray,setThingsArray] = React.useState['thing 1','thing 2']
    const updateValue = 'new thing'
    function addItem() {
         setThingsArray(prevState=>{
            return [...prevState,`more content in ${updateValue}`]
         })
    }

  return (
    <h1>{thingsArray}</h1>
  )
}
