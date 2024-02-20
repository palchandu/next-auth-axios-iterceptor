// 'use client';
// import { useSession } from "next-auth/react";
// import { useEffect } from "react";
// import { axiosAuth } from "../axios";
// const useAxiosAuth = () => {
//     const { data: session } = useSession();
    
//     useEffect(() => {
//         console.log("new sess", session)
//         const requestIntercept = axiosAuth.interceptors.request.use((config) => {
//             if (!config.headers["Authorization"]) {
//             config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`
//             console.log('config new', config);
//             }
//             return config;
//         })
//         return () => {
//             axiosAuth.interceptors.request.eject(requestIntercept);
//         }
//     }, [session]);
//     return axiosAuth;
// }

// export default useAxiosAuth;