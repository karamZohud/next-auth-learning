"use client";
import { useSession } from 'next-auth/react'
import React from 'react'
import LoginButton from './LoginButton';
import Image from 'next/image';
import LogoutButton from './LogOutButton';

export default function ClientComponents() {
    const { data, status } = useSession();
    console.log(data);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {status === 'loading' && <p>Loading ...</p>}
            {status === "unauthenticated" && <LoginButton />}
            {status === 'authenticated' && (
                <>
                    <h1>Welcome {data?.user?.name}</h1>
                    <h2>{data?.user?.email}</h2>
                    {data?.user?.image && (
                        <Image
                            src={data.user.image as string}
                            alt="user image"
                            width={100}
                            height={100}
                            className="rounded-full my-7"
                        />
                    )}
                    <LogoutButton />
                </>
            )}
        </div>
    );
}