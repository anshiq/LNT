import React from 'react'

export default function BasicFetchApi() {
  const [jsonData, setJsonData] = React.useState({})
  console.log("infinite running due to use state function")
  fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=> res.json())
   .then(data=>setJsonData(data) )
  return (
    <>
    <h1>{JSON.stringify(jsonData,null,2)}</h1>
    </>
  )
}
