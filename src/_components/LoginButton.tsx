"use client";
import { signIn } from 'next-auth/react';
import React from 'react'

export default function LoginButton() {
  return (<div className='flex flex-col items-center justify-center h-screen gap-8 '>
      <button type="button" onClick={()=>signIn('google',{redirect:true,callbackUrl:"/profile"})} >Signin with Google</button>
      <button type="button" onClick={()=>signIn('github',{redirect:true,callbackUrl:"/profile"})} >Signin with GitHub</button>

  
  </div>
)
}
