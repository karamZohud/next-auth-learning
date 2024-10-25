"use client";
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
interface Children{
    children:ReactNode
}
 const NextAuthProviders = ({children}:Children) => {
  return (
<SessionProvider>
    {children}
</SessionProvider>
)
}
export default NextAuthProviders;