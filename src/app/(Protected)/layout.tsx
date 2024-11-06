'use client'

import React from "react";
import { TbLoader3 } from "react-icons/tb";
import { useRouter } from "next/navigation";
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    async function authVerification() {
      await fetch('http://3.6.34.255:3000/api/v1/auth/verifyToken', {
        method: 'GET',
        credentials: 'include'
      })
        .then((res) => res.json())
        .then(async (res) => {
          if (res.status !== "200") {
            await fetch('http://3.6.34.255:3000/api/v1/auth/refreshToken', {
              method: 'GET',
              credentials: 'include'
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.status !== "200") {
                  router.replace('/Signin');
                  return;
                }
                else setloading(false);
              })
              .catch((err) => {
                router.replace('/Signin');
              })

          }
          else setloading(false);
        })
        .catch((err) => { router.replace('/Signin');})


    }
    authVerification();
  }, [])
  return (
    loading ? (
      <TbLoader3 className="w-[50px] h-[50px] animate-spin mx-auto mt-[100px]" />
    ) : (
      children
    )
  )
}
