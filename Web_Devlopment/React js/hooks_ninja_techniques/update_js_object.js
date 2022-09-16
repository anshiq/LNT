import React from 'react'

export default function () {

    const [details,setDetails] = React.useState({
        firstName: 'john',
        lastName: 'peter',
        phone: '+1 374 484 4843',
        isFavorite: false
    })
  function clicked(){
   setDetails(prevDetails=>{
    return {
        ...prevDetails,
        isFavorite: !prevDetails.isFavorite
    }
   })

  }
  return (
    <div onClick={clicked}>{details}</div>
  )
}
