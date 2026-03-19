'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="bg-[#1E293B] rounded-xl border border-white/10 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-2">Connexion</h1>
        <p className="text-[#94A3B8] text-sm text-center mb-8">Accède à ton coach de négociation</p>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Ton email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#0F172A] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-[#64748B] outline-none focus:border-[#6366F1]"
          />
          <input
            type="password"
            placeholder="Ton mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#0F172A] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-[#64748B] outline-none focus:border-[#6366F1]"
          />
          <button
            onClick={handleLogin}
            className="bg-[#6366F1] text-white py-3 rounded-lg font-medium hover:bg-[#4F46E5]"
          >
            Se connecter
          </button>
        </div>
        <p className="text-center text-sm text-[#64748B] mt-6">
          Pas encore de compte ? <Link href="/login" className="text-[#6366F1]">Inscription</Link>
        </p>
      </div>
    </main>
  )
}