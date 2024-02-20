import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { axiosInstance} from './axios';
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as any;
                let data = JSON.stringify({
                    "email": username,
                    "password": password
                });
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: '/v1/merchant/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
                const res = await axiosInstance.request(config);
                if (res.status === 200) {
                    console.log('dd', res.data)
                    return res.data;
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        }
    }
}

export const getServerAuthSession = () => getServerSession(authOptions); 
