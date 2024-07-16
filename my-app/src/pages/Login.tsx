import React from 'react'
import { LoginForm } from '../features/auth/components/LoginForm'

export const Login = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Login</h1>
      <LoginForm />
    </div>
  )
}