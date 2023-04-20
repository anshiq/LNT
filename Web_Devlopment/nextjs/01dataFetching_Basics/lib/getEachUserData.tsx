
export default async function getEachUserData(userId:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  if(!res.ok) throw new Error("error while fetching each user data.")
  return  res.json()
}
