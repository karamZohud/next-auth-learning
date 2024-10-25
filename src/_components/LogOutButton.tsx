"use client";
import { signOut } from 'next-auth/react';
import React from 'react'

export default function LogoutButton() {
  return (
    <button type="button" onClick={()=>signOut()} >Signout </button>
)
}
