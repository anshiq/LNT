import React from "react";
// why use effect // use effect is used to manage sideEffects (external proccess like db.)
// since due to setState we run an infinite loop over a big part of the code.
// with useeffect we will check it there is any change occur or not in the state then accordingly we will run that big part.

export default function FetchApiWithuseEffect() {
  const [jsonData, setJsonData] = React.useState({});
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setJsonData(data), [jsonData]); // now when ever jsonData will change due to user activity useEffect will run fetch funcn
  });
  return <div>{JSON.stringify(jsonData)}</div>;
}
