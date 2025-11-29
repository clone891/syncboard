"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react"

export interface AuthFormProps {
  initialSignUp?: boolean
}

export const AuthForm: React.FC<AuthFormProps> = ({ initialSignUp = false }) => {
  const [isSignUp, setIsSignUp] = useState(initialSignUp)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Replace this with real auth call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-amber-50 text-amber-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-12 text-center">
          <Link href="/" className="flex items-center justify-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">S</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-950 to-amber-700 bg-clip-text text-transparent">SyncBoard</h1>
          </Link>
          <p className="text-amber-700 text-sm">{isSignUp ? "Join your team on SyncBoard" : "Welcome back to SyncBoard"}</p>
        </div>

        <div className="relative">
          {/* Login */}
          <div className={`transition-all duration-500 absolute inset-0 ${isSignUp ? "opacity-0 translate-x-8 pointer-events-none" : "opacity-100 translate-x-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 bg-white border border-amber-300 rounded cursor-pointer accent-amber-600" />
                  <span className="text-amber-700 group-hover:text-amber-800 transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">Forgot password?</a>
              </div>

              <button type="submit" disabled={isLoading} className="w-full mt-6 px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-600/20 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2">
                {isLoading ? (<><Loader2 className="w-4 h-4 animate-spin" />Signing in...</>) : (<><span>Sign in</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>) }
              </button>
            </form>
          </div>

          {/* Sign up */}
          <div className={`transition-all duration-500 ${isSignUp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none absolute"}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-amber-800">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full mt-6 px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-600/20 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2">
                {isLoading ? (<><Loader2 className="w-4 h-4 animate-spin" />Creating account...</>) : (<><span>Create account</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>) }
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-amber-700">
          <p>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button onClick={() => { setIsSignUp(!isSignUp); setFormData({ email: "", password: "", name: "", confirmPassword: "" }); }} className="text-amber-600 hover:text-amber-700 font-semibold transition-all duration-200 relative group">
              {isSignUp ? "Sign in" : "Sign up"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-amber-200 text-center">
          <p className="text-xs text-amber-600">By continuing, you agree to our <a href="#" className="text-amber-700 hover:text-amber-800 transition-colors">Terms of Service</a> and <a href="#" className="text-amber-700 hover:text-amber-800 transition-colors">Privacy Policy</a></p>
        </div>
      </div>
    </main>
  )
}

export default AuthForm
