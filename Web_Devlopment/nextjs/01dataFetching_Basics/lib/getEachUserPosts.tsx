export default async function getEachUserPosts(userId:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  if(!res.ok) throw new Error("error while fetching each user data.")
  return  res.json()
}
