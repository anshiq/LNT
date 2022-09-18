import React from "react";
// fully functional form isat 8 hr duration in 12 hr react course
export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });
console.log(formData)
  function handleChange(event) {
    // console.log(event.target.name); // target stores the element in which the thing is exicuted, value is the input in that element and name is kind of specific id given to the element.
    // console.log(event.target.value)
    setFormData((prevData) => {
      return {
        ...prevData,  // to store the last state of data .
        // eg: firstName      :  Anshik if we input in the first input box
        [event.target.name]: event.target.value // since event name is same as the element names in setSTate function it will update the data with respect to which input was clicked.
      };
    });
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="firstName" // {it is a kind of id specific for the element}
          placeholder="firstName" // for ease in setState function in if statements. setting same name key values.
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName" // {it is a kind of id specific for the element}
          placeholder="lastName" // for ease in setState function in if statements. setting same name key values.
          onChange={handleChange}
        />
      </form>
    </>
  );
}
