import getEachUserData from "@/lib/getEachUserData"
import getEachUserPosts from "@/lib/getEachUserPosts"
import { Suspense } from "react"
import UserPost from "./component/UserPost"
import { Metadata } from "next"
type Params = {
  params: {
    userId : string
  }
}

export async function  metaData({params:{ userId}}:Params):Promise<Metadata>{ //it is not working man fix is pending.

  const userData: Promise<User> = getEachUserData(userId)
  const user = await userData
  return {
    title: user.name,
    description: "post page description"
  }
}


export default async function User({params:{ userId}}:Params) {
  const userData: Promise<User> = getEachUserData(userId)
  const userPosts: Promise<Posts[]> =  getEachUserPosts(userId)
  //first approach
  // const [user, userposts] = Promise.all([userData,userPosts])
  // now you can use both need wise directly in simple way by sending post data into component.

  // second approach
  // fetching data of user for heading first and the post data in a dynamic react component and we will use react Suspence to render data in flow. 
  // we are using second approach because if we use first approach we can't use Suspense if we use then whole will will contructuct under Suspense which make it useless.
  const user = await userData
  return (
    <>
      <h2>{user.name} </h2> {/*user name loaded first*/}
      <br/>
      <Suspense fallback= {<h2>post content is loading.....</h2>}> {/*waiting for the post*/}
        {/*expected error*/}
        <UserPost promise={userPosts}/>
      </Suspense>
      </>
  )
}
