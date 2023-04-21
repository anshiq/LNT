import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Users Page",
  description: "this is official users page."
}
export default async function Users() {
  const userdata: Promise<User[]> = getAllUsers();
  const users = await userdata;
  const content = (
    <section>
      <h2>Back to home page</h2>
      <br />
      <h3>All users are</h3>
      {users.map(eachUser => (<>
        <p key={eachUser.id}>
          <Link href={`/users/${eachUser.id}`}>{eachUser.name}</Link>
        </p>
        <br />
      </>))}
    </section>
  )
  return (
    <>
      {content}
    </>
  )
}
