import { authOptions } from "@/app/lib/nextAuth";
import NextAuth from "next-auth";

const handler=NextAuth(authOptions);


export {handler as GET ,handler as POST};



//WHY POST BECAUSE in login and register the method we use is post and GET to get data of user