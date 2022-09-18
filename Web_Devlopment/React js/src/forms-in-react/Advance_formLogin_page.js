// pending conditions for empty credentials
import React from "react";
export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    retypedPassword: "",
    joinNewsLater: false,
  });
  console.log(formData);

  function handleChange(event) {
     const {name,value,type,checked } = event.target; // all properties we have to work with each element 
     setFormData(prevData=>({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value // updating as per element in this small but large logic. see below the elements
     })) // this time returning whole thing as an object.
  }
  function handleSubmit(event) {
    event.preventDefault(); // to dont refresh the page. and also to not paste credentials in url.
      if(formData.password === formData.retypedPassword)
      {
        alert('successfully signed up')
        if(formData.joinNewsLater===true){
            alert('thanks for newslaters')
          }
      }
      else{
        alert('password didnot match')
      }
      
}
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Retype Password"
            name="retypedPassword"
            value={formData.retypedPassword}
          />
          <input
            type="checkbox"
            onChange={handleChange}
            name="joinNewsLater"
            checked={formData.joinNewsLater}
          />
          <label htmlFor="okaytoEmail">I want to join Newslater.</label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
