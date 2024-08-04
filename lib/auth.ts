import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials"; 

export const authConfig:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:'Sign in',
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"example@example.com",
                },
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                if(!credentials || !credentials.email || !credentials.password)
                    return null
                const dbUser=await prisma
            }
        })
    ],
};

