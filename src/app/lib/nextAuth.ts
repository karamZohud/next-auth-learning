import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const  authOptions:AuthOptions={
    providers:[GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
    })

    ],
    session:{
        strategy:"jwt",
        maxAge:1*24*60*60
    },
    jwt:{
        // لفك نشفير التووكن لاخذ بيانات لليوزر
    },
    callbacks:{
        // work after signin ,session callbacks بترجع سيشن في معلومات اليوزر بشبه الكوكي 
    },
    secret:process.env.NEXTAUTH_SECRET as string
,
pages:{
    signIn:"/auth/signin"//custom signIn page
}

 
};