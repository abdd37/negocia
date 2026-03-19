'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const titres = {
  voiture: '🚗 Acheter une voiture',
  loyer: '🏠 Négocier un loyer',
  salaire: '💼 Négocier son salaire',
  entretien: '🎯 Convaincre en entretien',
}

function SimulationContent() {
  const searchParams = useSearchParams()
  const scenario = searchParams.get('scenario') || 'voiture'
  const [messages, setMessages] = useState([
    { role: 'ia', text: 'Bonjour ! Je suis prêt pour la simulation. Comment puis-je vous aider ?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const envoyer = async () => {
    if (!input.trim()) return
    const newMessages = [...messages, { role: 'user', text: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, scenario }),
    })
    const data = await res.json()
    setMessages([...newMessages, { role: 'ia', text: data.reply }])
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col items-center px-4 py-8">
      <h1 className="text-xl font-bold text-white mb-6">{titres[scenario]}</h1>
      <div className="w-full max-w-2xl bg-[#1E293B] rounded-xl p-6 flex flex-col gap-4 min-h-[400px] mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-3 rounded-xl max-w-[75%] text-sm ${m.role === 'user' ? 'bg-[#6366F1] text-white' : 'bg-[#334155] text-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#334155] text-[#94A3B8] px-4 py-3 rounded-xl text-sm">En train de répondre...</div>
          </div>
        )}
      </div>
      <div className="w-full max-w-2xl flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && envoyer()}
          placeholder="Tape ta réponse..."
          className="flex-1 bg-[#1E293B] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-[#64748B] outline-none focus:border-[#6366F1]"
        />
        <button onClick={envoyer} className="bg-[#6366F1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4F46E5]">
          Envoyer
        </button>
      </div>
    </main>
  )
}

export default function Simulation() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-white">Chargement...</div>}>
      <SimulationContent />
    </Suspense>
  )
}