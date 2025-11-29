import dynamic from "next/dynamic"
import React from "react"

const AuthForm = dynamic(() => import("@/components/auth/AuthForm"), { ssr: false })

export default function SignupPage() {
  return <AuthForm initialSignUp={true} />
}
