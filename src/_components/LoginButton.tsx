"use client";
import { signIn } from 'next-auth/react';
import React from 'react'

export default function LoginButton() {
  return (
    <button type="button" onClick={()=>signIn('google',{redirect:true,callbackUrl:"/profile"})} >Signin with Google</button>
)
}
