import { getServerSession } from 'next-auth'
import Image from 'next/image';
import React from 'react'
import { authOptions } from '../lib/nextAuth';



 const profilePage =async () => {

    const session =await getServerSession(authOptions);
  return (
    <div><h1>User Info</h1>
        {session && (
<div>
    <h2>Welcome {session.user?.name}</h2>
    <Image src={session.user?.image as string} alt='profile image ' width={100} height={100}/>
   <p>Email:{session.user?.email}</p>
    </div>
        )}
    </div>
  )
}
export default profilePage;