import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session{
        user: {
            accessToken: string,
            rereshToken: string,
            user: {
                _id: string,
                email: string,
                name: string,
                mobile: string,
                type: string,
                createdAt: string,
                updatedAt: string,
                __v: 0
            }
        }
    }
}