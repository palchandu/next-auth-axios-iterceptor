'use client';
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
//import { getServerAuthSession } from "../lib/auth";
const AppBar = () => {
  const { data: session } = useSession();
  //const authSession = await getServerAuthSession();
  //console.log('server auth',authSession)
  return (
    <div>
      <nav className="flex justify-between bg-green-400 h-10 px-5 py-2">
        <ul className="left-side flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/admin/panel">Panel</Link>
          </li>
        </ul>
        <ul className="right-side flex gap-10">
          {session?.user ? (
            <>
              <li>
                <p>{session.user?.user.name}</p>
              </li>
              <li>
                <button className="text-red-500" onClick={()=>signOut()}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="text-white-600" onClick={()=>signIn()}>Login</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
